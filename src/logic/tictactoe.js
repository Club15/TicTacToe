
  var mark = 'X';
  var scoreO = 0;
  var scoreX = 0;
  var gridCounter = 0;
  var haveWinner = false;
  var table = ['1','2','3','4','5','6','7','8','9'];
  var markedBoxes = [];

function tictactoe()
{
  var tictactoe = {"game": table, "mark": mark};
  return tictactoe;
}

getMark = function() {
  return mark;
}

flipMark = function() {
  if(mark === 'X') {
    mark = 'O';
  }
  else {
    mark = 'X';
  }
  return mark;
}

module.exports = tictactoe;