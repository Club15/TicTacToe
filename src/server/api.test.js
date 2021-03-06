// src/api.test.js
const request = require("supertest");
const app = require("../app");

//API test
describe("OPTIONS /api", () => {
  it("should return 200 status code", async() => {
    const res = await request(app).options("/api");
    expect(res.status).toBe(200);
  });
});

//API test for error
describe("GET /api", () => {
  it("should return 405 status code and an error message", async () => {
    const res = await request(app).get("/api");
    expect(res.status).toBe(405);
    expect(res.body).toHaveProperty("error");
  });
});

//API test for tictactoe function. Should receive a tictactoe object
describe("GET /api/tictactoe/", () => {
  it("should return an object with the tictactoe attribute", async () => {
    const res = await request(app).get("/api/tictactoe/");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("tictactoe");
  });
});


//API test for checking whether the game board is updated when the api calls the function in tictactoe
describe("GET /tictactoe/addTurn/:square", () => {
  it("should return an updated table", async () => {
    const res = await request(app).get("/api/tictactoe/addTurn/1");
    expect(res.status).toBe(200);
    //expect(res.body.tictactoe.game).toBe(['0','X','2','3','4','5','6','7','8']);
    expect(res.body.tictactoe.game[1]).toBe('X');
  });
});

//API test for clearing the table with Play again command
describe("GET /tictactoe/playAgain", () => {
  it("the game table should be cleared at all squares", async () => {
    const res = await request(app).get("/api/tictactoe/playAgain");
    expect(res.status).toBe(200);
    expect(res.body.tictactoe.game[0]).toBe('');
    expect(res.body.tictactoe.game[1]).toBe('')
    expect(res.body.tictactoe.game[2]).toBe('')
    expect(res.body.tictactoe.game[3]).toBe('')
    expect(res.body.tictactoe.game[4]).toBe('')
    expect(res.body.tictactoe.game[5]).toBe('')
    expect(res.body.tictactoe.game[6]).toBe('')
    expect(res.body.tictactoe.game[7]).toBe('')
    expect(res.body.tictactoe.game[8]).toBe('')
  });
});

//API test for clearing the table with Reset game command. Clearing the table.
describe("GET /tictactoe/resetGame", () => {
  it("the game table should be cleared, at all squares", async () => {
    const res = await request(app).get("/api/tictactoe/resetGame");
    expect(res.status).toBe(200);
    expect(res.body.tictactoe.game[0]).toBe('');
    expect(res.body.tictactoe.game[1]).toBe('')
    expect(res.body.tictactoe.game[2]).toBe('')
    expect(res.body.tictactoe.game[3]).toBe('')
    expect(res.body.tictactoe.game[4]).toBe('')
    expect(res.body.tictactoe.game[5]).toBe('')
    expect(res.body.tictactoe.game[6]).toBe('')
    expect(res.body.tictactoe.game[7]).toBe('')
    expect(res.body.tictactoe.game[8]).toBe('')
  });
});

//API test for clearing the table with Reset game command. scoreX = 0 and scoreO = 0
describe("GET /tictactoe/resetGame", () => {
  it("should have scoreX and score 0 at zero", async () => {
    const res = await request(app).get("/api/tictactoe/resetGame");
    expect(res.status).toBe(200);
    expect(res.body.tictactoe.score.scoreX).toBe(0);
    expect(res.body.tictactoe.score.scoreO).toBe(0);
  });
});

