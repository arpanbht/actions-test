const request = require("supertest");
const app = require("../src/app");

describe("GET /api/home", () => {
  it("should return home route message", async () => {
    const response = await request(app).get("/api/home");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Welcome to the homepage!" });
  });
});

describe("GET /api/room", () => {
  it("should return a JSON response with a message", async () => {
    const response = await request(app).get("/api/room");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Welcome to the room!" });
  });
});

describe("GET /api/testing/hello", () => {
  it("should return a JSON response with a message", async () => {
    const response = await request(app).get("/api/testing/hello");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello, World!" });
  });
});

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

describe("GET /api/testing/goodbye", () => {
  it("should return a JSON response with a farewell message", async () => {
    const response = await request(app).get("/api/testing/goodbye");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Goodbye, World!" });
  });
});
