const request = require("supertest");
const app = require("../src/app");

describe("GET /api/testing/hello", () => {
  it("should return a JSON response with a message", async () => {
    const response = await request(app).get("/api/testing/hello");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello, World!" });
  });
});
