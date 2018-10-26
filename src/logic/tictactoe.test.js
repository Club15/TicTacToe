const tictactoe = require("./tictactoe");

beforeEach(function() {
 	resetGame();
});

test("tictactoe should return an object", () => {
   expect(tictactoe()).not.toBeNull();
});

test("getTable should return a array with 9 empty strings", () => {
  expect(getTable()[0]).toBe('');
  expect(getTable()[1]).toBe('');
  expect(getTable()[2]).toBe('');
  expect(getTable()[3]).toBe('');
  expect(getTable()[4]).toBe('');
  expect(getTable()[5]).toBe('');
  expect(getTable()[6]).toBe('');
  expect(getTable()[7]).toBe('');
  expect(getTable()[8]).toBe('');
});

test("getScore should return 0 for both score X and O", () => {
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

test("getMessage should return Its X turn", () => {
  expect(getMessage()).toBe('Its X turn!');
});

test("getMessage should return Its O turn", () => {
  updateGame('1');
  expect(getMessage()).toBe('Its O turn!');
});

test("getMessage should return The winner is X!", () => {
  updateGame('0');  //x turn
  updateGame('3');  //o turn
  updateGame('1');  //x turn
  updateGame('4');  //o turn
  updateGame('2');  //x turn
  expect(getMessage()).toBe('The winner is X!');
});

test("getMessage should return a tie", () => {
  updateGame('1');
  updateGame('2');
  updateGame('3');
  updateGame('4');
  updateGame('6');
  updateGame('5');
  updateGame('9');
  updateGame('0');
  updateGame('8');
  expect(getMessage()).toBe("It's a tie!");
});

test("flipMark should return first O, then X", () => {
  expect(flipMark()).toBe('O');
  expect(flipMark()).toBe('X');
});

test("updateGame should mark O, because X has already done", () => {
  updateGame('1');
  expect(getMark()).toBe('O');
});

test("updateGame should return X, not O at position 1 (since we already put X in position 1)", () => {
  updateGame(1);
  flipMark();
  expect(updateGame(1).game[1]).toBe('X');
});

test("updateTable should true", () => {
  expect(updateTable('1')).toBe(true);
});

test("updateTable should false, because square 1 is already taken", () => {
  updateTable('1');
  flipMark();
  expect(updateTable('1')).toBe(false);
});

test("playAgain should clean table", () => {
  updateTable(1);
  updateTable(2);
  updateTable(3);
  expect(playAgain().game[1]).toBe('');
  expect(playAgain().game[2]).toBe('');
  expect(playAgain().game[3]).toBe('');
});

test("playAgain should turn mark into X", () => {
  expect(playAgain().message).toBe('Its X turn!');
});

test("resetGame should set scoreO and scoreX to 0", () => {
  expect(resetGame().score.scoreX).toBe(0);
  expect(resetGame().score.scoreO).toBe(0);
});

test("isWinner should return true, if array is marked X in index 0,1,2", () => {
  updateTable(0);
  updateTable(1);
  updateTable(2);
  expect(isWinner()).toBe(true);
});

test("isWinner should return true, if array is marked X in index 3,4,5", () => {
  updateTable(3);
  updateTable(4);
  updateTable(5);
  expect(isWinner()).toBe(true);
});

test("isWinner should return true, if array is marked X in index 6,7,8", () => {
  updateTable(6);
  updateTable(7);
  updateTable(8);
  expect(isWinner()).toBe(true);
});

test("isWinner should return true, if array is marked X in index 0,3,6", () => {
  updateTable(0);
  updateTable(3);
  updateTable(6);
  expect(isWinner()).toBe(true);
});

test("isWinner should return true, if array is marked X in index 1,4,7", () => {
  updateTable(1);
  updateTable(4);
  updateTable(7);
  expect(isWinner()).toBe(true);
});

test("isWinner should return true, if array is marked X in index 2,5,8", () => {
  updateTable(2);
  updateTable(5);
  updateTable(8);
  expect(isWinner()).toBe(true);
});

test("isWinner should return true, if array is marked X in index 0,4,8", () => {
  updateTable(0);
  updateTable(4);
  updateTable(8);
  expect(isWinner()).toBe(true);
});

test("isWinner should return true, if array is marked X in index 2,4,6", () => {
  updateTable(2);
  updateTable(4);
  updateTable(6);
  expect(isWinner()).toBe(true);
});

test("isWinner should return false, if array is marked X in index 1,4,6", () => {
  updateTable(1);
  updateTable(4);
  updateTable(6);
  expect(isWinner()).toBe(false);
});

test("isWinner should return false, if array is marked X in index 3,7,8", () => {
  updateTable(3);
  updateTable(7);
  updateTable(8);
  expect(isWinner()).toBe(false);
});

test("isTie should return true, if array all array is X", () => {
  for (var i = 0; i < 9; i++) {
  	updateTable(i);
  }
  expect(isTie()).toBe(true);
});

test("isTie should return false, if the array index aren't all X", () => {
  for (var i = 0; i < 8; i++) {
  	updateGame(i);
  }
  expect(isTie()).toBe(false);
});