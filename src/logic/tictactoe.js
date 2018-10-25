
  var mark = 'X';
  var scoreO = 0;
  var scoreX = 0;
  var haveWinner = false;
  var table = ['0','1','2','3','4','5','6','7','8'];

function tictactoe() {
  var t = getTable();
  var m = getMark();
  var s = getScore();
  var tictactoe = {"game": t, "mark": m, "score": s};
  return tictactoe;
}

getTable = function() {
  return table;
}

getMark = function() {
  return mark;
}

getScore = function() {
  var score = {"scoreX": scoreX, "scoreO": scoreO};
  return score;
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

getOscore = function() {
  return scoreO;
}

getXscore = function() {
  return scoreX;
}

updateTable = function(square) {
  if (table[square] !== 'O' && table[square] !== 'X') {
    table[square] = mark;
  }
  return tictactoe();
}

updateScore = function() {
  if(mark === "X") {
    scoreX++;
  }
  else {
    scoreO++;
  }
}

playAgain = function() {
    mark = 'X';
    console.log(mark);
    haveWinner = false;
    table = ['0','1','2','3','4','5','6','7','8'];
    return tictactoe();
}

module.exports = tictactoe;
