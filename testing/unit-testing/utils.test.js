const {
    sum,
    greeting,
    isEven,
    names,
    getOrderById,
    getOrders,
    applyDiscount,
    fetchData,
    createOrder
} = require("./utils.js");

const db = require("./db.js");
const { default: axios } = require('axios')
const email = require('./email')



//matchers for:

// numbers
test("sum - should return 1 + 4 = 5", () => {
    const result = sum(1, 4);
    expect(result).toBe(5);
    expect(sum(0.2, 0.30001)).toBeCloseTo(0.5);
});

// strings
test("greeting - should return Hello Ahmed", () => {
    expect(greeting("Ahmed")).toMatch(/Hello Ahmed/);
});
// match used for relaxation checking not strict checking

// booleans
describe("isEven", () => {
    it("should return true for 8", () => {
        expect(isEven(8)).toBeTruthy();
    });
    it("should return false for 9", () => {
        expect(isEven(9)).toBeFalsy();
    });
    it("should return true for 4", () => {
        expect(isEven(4)).toBeTruthy();
    });
});

// describe for groubing

// undefined,  null
test("validation", () => {
    let x;
    expect(x).toBeUndefined();
});

test("validation", () => {
    let x = 7;
    expect(x).not.toBeNull();
});

// arrays
test("names - should return true for kareem", () => {
    expect(names).toContain("kareem");
});

// objects and throw errors
describe("getOrderById", () => {
    it("should return object", () => {
        const res = getOrderById(1);
        expect(res).toMatchObject({ price: 10 });
        expect(res).toHaveProperty("id", 1);
    });
    it("should throw err if id is not defined ", () => {
        expect(() => getOrderById()).toThrow();
    });
});

// Async code
describe("getOrders", () => {
    it("should return the orders length", async () => {
        expect((await getOrders()).length).toBe(2);
    });
    it("should contain specific obj", async () => {
        expect(getOrders()).resolves.toContainEqual({ id: 1, price: 10 });
    });
    it("should return order", async () => {
        const orders = await getOrders();
        expect(orders[0]).toMatchObject({ price: 10 });
    });
});

// mocking or faking

describe("applyDiscount", () => {
    it("should apply discount 10% for price 10", () => {
        db.getOrder = jest.fn();
        db.updateOrder = jest.fn();

        db.getOrder.mockReturnValue({ id: 1, price: 10 });
        const order = applyDiscount(1);
        expect(order).toMatchObject({ price: 9 });


        expect(db.updateOrder.mock.calls[0][0]).toMatchObject({ price: 9 });
        expect(db.updateOrder).toHaveBeenCalled();


        db.updateOrder.mockReset();

    });

    it("should not apply discount 10% for price 8", () => {
        db.getOrder.mockImplementation((id) => {
            if (id < 4) { 
                return { id, price: 8 };
            } else {
                return { id, price: 100 };
            }
        });
        order = applyDiscount(2);
        expect(order).toMatchObject({ price: 8 });
        expect(db.updateOrder).not.toHaveBeenCalled()

        db.getOrder.mockReset();
        db.updateOrder.mockReset();
    });
});

// mocking module
jest.mock('axios')
describe('fetchData', () => {
    it('should return some data', async () => {
        axios.get.mockResolvedValue({ id: 1 })
        const data = await fetchData()
        expect(data).toHaveProperty('id', 1)
    })
})


describe('createOrder', () => {
    it('should throw error if user id is not defined', async() => {
        await expect(createOrder()).rejects.toThrow()
    })

    it('should create the order and send email', async () => {
        email.sendEmail = jest.fn()
        db.getUser = jest.fn().mockResolvedValue({ id: 1, email: 'ahmed@gmail.com' })
        db.createOrder = jest.fn()

        const message = await createOrder(2, [{price: 10}, {price: 50}])

        expect(message).toMatch('order created')
        expect(db.createOrder).toHaveBeenCalledWith(2, [{price: 10}, {price: 50}])
        expect(db.getUser.mock.calls.length).toBe(1)
        expect(db.getUser.mock.calls[0][0]).toBe(2)
        expect(email.sendEmail.mock.calls[0][1]).toBe(60)


    })
})