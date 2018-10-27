// src/api.test.js
const request = require("supertest");
const app = require("../app");

describe("OPTIONS /api", () => {
  it("should return 200 status code", async() => {
    const res = await request(app).options("/api");
    expect(res.status).toBe(200);
  });
});

describe("GET /api", () => {
  it("should return 405 status code and an error message", async () => {
    const res = await request(app).get("/api");
    expect(res.status).toBe(405);
    expect(res.body).toHaveProperty("error");
  });
});

describe("GET /api/tictactoe/", () => {
  it("should return an object with the tictactoe attribute", async () => {
    const res = await request(app).get("/api/tictactoe/");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("tictactoe");
  });
});


describe("GET /tictactoe/addTurn/:square", () => {
  it("should return an updated table", async () => {
    const res = await request(app).get("/api/tictactoe/addTurn/1");
    expect(res.status).toBe(200);
    //expect(res.body.tictactoe.game).toBe(['0','X','2','3','4','5','6','7','8']);
    expect(res.body.tictactoe.game[1]).toBe('X');
  });
});
