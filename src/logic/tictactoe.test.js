var tictactoe = require("./tictactoe");

//test("returns text", () => {
   //expect(tictactoe.tictactoe("Tic Tac Toe") === "this is Tic Tac Toe")
//});


//const flipMark = require("./tictactoe");

it("testing flipmark", () => {
  //tictactoe.mark = 'X';
  //tictactoe.flipMark();
  expect(tictactoe.flipMark == "Testing flipMark");
  //Þarf að setta mark fyrst sex x.
  //Kalla á flipmark og staðfesta að það sé O

	//Þarf að settta mark fyrst sem O
	//Kalla á flipmark og staðfesta að það sé X
})

it("testing test function", () => {
	expect(tictactoe.test(5, 6) == 10);
})

it("something stupid should reutrn somethingStupid", () => {
	expect(tictactoe.returnSomethingStupid == "Hello");
})

//it("testing flipmark again", () => {
  //tictactoe.mark = 'O';
  //tictactoe.flipMark();
  //expect(tictactoe.mark === 'X');
//})
