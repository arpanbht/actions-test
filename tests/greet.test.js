const request = require("supertest");
const app = require("../src/app");

describe("GET /api/testing/greet", () => {
  it("should return a personalized greeting", async () => {
    const response = await request(app).get("/api/testing/greet?name=John");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello, John!" });
  });

  it("should return a default greeting if no name is provided", async () => {
    const response = await request(app).get("/api/testing/greet");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello, Stranger!" });
  });
});
