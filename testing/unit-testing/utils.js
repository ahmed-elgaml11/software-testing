const { default: axios } = require("axios");
const db = require("./db");
const email = require('./email')
// numbers
const sum = (x, y) => x + y;
// strings
const greeting = (name) => `Hello ${name}`;
//bool
const isEven = (num) => num % 2 === 0;
// array
const names = ["ali", "ahmed", "kareem"];

//object
const getOrderById = (id) => {
    if (!id) throw new Error("id is undefined");
    return { id: 1, price: 10 };
};

// Async code
const getOrders = async () => {
    return [
        { id: 1, price: 10 },
        { id: 2, price: 20 },
    ];
};

// mocking or faking
const applyDiscount = (orderId) => {
    const order = db.getOrder(orderId);
    if (order.price >= 10) {
        order.price -= 0.1 * order.price;
        db.updateOrder(order);
    }
    return order;
};

const fetchData = async () => {
    const res = axios.get("/anything");
    /* 
      operations
      */
    return res;
};

async function createOrder (userId, products) {
    if (!userId) throw new Error("userId not found..!");

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    await db.createOrder(userId, products)

    const user = await db.getUser(userId)

    email.sendEmail(user.email, totalPrice)

    return `order created successfully with price ${totalPrice} and products ${products}`
}

module.exports = {
    sum,
    greeting,
    isEven,
    names,
    getOrderById,
    getOrders,
    applyDiscount,
    fetchData,
    createOrder
};
