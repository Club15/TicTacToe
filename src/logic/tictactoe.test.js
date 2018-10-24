const tictactoe = require("./tictactoe");

test("returns text", () => {
   expect(tictactoe()).not.toBeNull();
});

it("testing flipmark", () => {
  expect(flipMark()).toBe('O');
  expect(flipMark()).toBe('X');
})

it("this should return X, since mark starts as X", () => {
  expect(getMark()).toBe('X');
});

it("this should return table object", () => {
  expect(getTable()).not.toBeNull();
});

it("this should return score object", () => {
  expect(getScore()).not.toBeNull();
});

it("this should return scoreX = 1", () => {
  updateScore();
  expect(getXscore()).toBe(1);
  expect(getOscore()).toBe(0);
});
