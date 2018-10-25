const tictactoe = require("./tictactoe");

beforeEach(function() {
 	playAgain();
});

test("returns text", () => {
   expect(tictactoe()).not.toBeNull();
});

test("testing flipmark", () => {
  expect(flipMark()).toBe('O');
  expect(flipMark()).toBe('X');
})

test("this should return X, since mark starts as X", () => {
  expect(getMark()).toBe('X');
});

test("this should return table object", () => {
  expect(getTable()).not.toBeNull();
});

test("this should return score object", () => {
  expect(getScore()).not.toBeNull();
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