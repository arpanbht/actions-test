const request = require("supertest");
const app = require("../src/app");

describe("GET /api/home", () => {
  it("should return home route message", async () => {
    const response = await request(app).get("/api/home");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Welcome to the homepage!" });
  });
});
