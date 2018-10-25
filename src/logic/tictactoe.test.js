const tictactoe = require("./tictactoe");

beforeEach(function() {
 	resetGame();
});

test("returns text", () => {
   expect(tictactoe()).not.toBeNull();
});

test("flipMark should return first O, then X", () => {
  expect(flipMark()).toBe('O');
  expect(flipMark()).toBe('X');
})

test("getMark should return X", () => {
  expect(getMark()).toBe('X');
});

test("getTable should return a array with string from 0 to 8", () => {
  expect(getTable()[0]).toBe('0');
  expect(getTable()[1]).toBe('1');
  expect(getTable()[2]).toBe('2');
  expect(getTable()[3]).toBe('3');
  expect(getTable()[4]).toBe('4');
  expect(getTable()[5]).toBe('5');
  expect(getTable()[6]).toBe('6');
  expect(getTable()[7]).toBe('7');
  expect(getTable()[8]).toBe('8');
});

test("getScore() should return 0 for both score X and O", () => {
  expect(getScore().scoreX).toBe(0);
  expect(getScore().scoreO).toBe(0);
});

test("getXscore should return 1", () => {
  updateScore();
  expect(getXscore()).toBe(1);
});

test("getOscore should return 1", () => {
  flipMark();
  updateScore();
  expect(getOscore()).toBe(1);
});

test("updateTable should return X when updating position 1", () => {
  expect(updateTable(1).game[1]).toBe('X');
});

test("updateTable should return X, not O", () => {
  updateTable(1);
  flipMark();
  expect(updateTable(1).game[1]).toBe('X');
});

test("playAgain should clean table", () => {
  updateTable(1);
  updateTable(2);
  updateTable(3);
  expect(playAgain().game[1]).toBe('1');
  expect(playAgain().game[2]).toBe('2');
  expect(playAgain().game[3]).toBe('3');
});

test("playAgain should turn mark into X", () => {
  flipMark();
  expect(playAgain().mark).toBe('X');
});

test("resetGame should set scoreO and scoreX to 0", () => {
  expect(resetGame().score.scoreX).toBe(0);
  expect(resetGame().score.scoreO).toBe(0);
});