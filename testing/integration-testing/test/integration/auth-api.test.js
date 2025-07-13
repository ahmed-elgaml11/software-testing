const request = require("supertest");
const server = require("../../app");

// jest.setTimeout(15000); // 15 seconds

/*
Register: 
1- all fields are required
2- password should be > 5 chars
3- confirmPass should match password
4- all is god, register the user
*/

afterAll(async () => {
    server.close()
});


describe("register", () => {
    it("should return 400 if any field is missing", async () => {
        const res = await request(server).post("/api/v1/auth/register");
        const resEmail = await request(server)
            .post("/api/v1/auth/register")
            .send({ email: "test@email.com" });
        const resPassword = await request(server)
            .post("/api/v1/auth/register")
            .send({ password: "12345" });

        expect(res.status).toBe(400);
        expect(resEmail.status).toBe(400);
        expect(resPassword.status).toBe(400);

        expect(res.body.message).toMatch("All fields are required");
        expect(resEmail.body.message).toMatch("All fields are required");
        expect(resPassword.body.message).toMatch("All fields are required");
    });
    it("should return 400 if password < 5 chars", async () => {
        const res = await request(server)
            .post("/api/v1/auth/register")
            .send({ email: "test@email.com", password: "1234" });

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch("password should be > 5 chars");
    });
    it("should return 400 if passwod does not match confirmPassword", async () => {
        const res = await request(server)
            .post("/api/v1/auth/register")
            .send({
                email: "test@email.com",
                password: "12345",
                confirmPassword: "1234",
            });

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch("confirmPass should match password");
    });
    it("should return 200 and register the user", async () => {
        const res = await request(server)
            .post("/api/v1/auth/register")
            .send({
                email: "test@email.com",
                password: "12345",
                passwordConfirm: "12345",
            });

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch("registerd successfully");
    });
});
