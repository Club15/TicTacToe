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

//test("returns text", () => {
   //expect(tictactoe.tictactoe("Tic Tac Toe") === "this is Tic Tac Toe")
//});


//const flipMark = require("./tictactoe");



//it("testing flipmark again", () => {
  //tictactoe.mark = 'O';
  //tictactoe.flipMark();
  //expect(tictactoe.mark === 'X');
//})
