
function tictactoe(title)
{
  var mark = 'X';
  var scoreO = 0;
  var scoreX = 0;
  var gridCounter = 0;
  var haveWinner = false;
  var table = ['1','2','3','4','5','6','7','8','9'];
  var markedBoxes = [];

  /*function sem flippar mark milli X og O
  function sem hreinsar borðið / newgame
  function sem hækkar grid coutnerinn
  function sem tékkar hvort einhver sé búinn að vinna
  function sem setur O og X í reit sem búið er að klikka á
  function sem hækkar skorið hjá O og X
  function sem tékkar hvort þa sé búið að klikka á reitinn*/


  return "this is " + title;
}

function flipMark(mark) {
  if(mark === 'X') {
    return 'O';
  }
  else {
    return 'X';
  }
}

function test(){
  return "test";
}

function returnSomethingStupid(name){
  return name;
}

module.exports = {};
module.exports.tictactoe = tictactoe;
module.exports.flipMark = function flipMark(mark) {
  return "Testing flipMark";
};
module.exports.test = function tester(a, b) {
  return a + b;
};
module.exports.returnSomethingStupid = function returnSomethingStupid() {
  return "Hello";
};