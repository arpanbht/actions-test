const request = require("supertest");
const app = require("../src/app");

describe("GET /api/testing/goodbye", () => {
  it("should return a JSON response with a farewell message", async () => {
    const response = await request(app).get("/api/testing/goodbye");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Goodbye, World!" });
  });
});
