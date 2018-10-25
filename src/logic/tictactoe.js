
  var mark = 'X';
  var scoreO = 0;
  var scoreX = 0;
  var haveWinner = false;
  var table = ['0','1','2','3','4','5','6','7','8'];
  var count = 0;

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
    count++; 
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
    haveWinner = false;
    table = ['0','1','2','3','4','5','6','7','8'];
    count = 0;
    return tictactoe();
}

resetGame = function() {
  playAgain();
  scoreO = 0;
  scoreX = 0;
  return tictactoe();
}

isWinner = function() {
  for (var i = 0; i < 3; i++) {
    if (table[i*3] == mark && table[i*3+1] == mark && table[i*3+2] == mark) {
      return true;
    }
    if (table[i] == mark && table[i+3] == mark && table[i+6] == mark) {
      return true;
    }
  }
  if (table[0] == mark && table[4] == mark && table[8] == mark) {
    return true;
  } 
  if (table[2] == mark && table[4] == mark && table[6] == mark) {
    return true;
  } 
  return false;
}

isTie = function() {
  if (count < 9) {
    return false;
  }
  else {
    return true;
  }
}

module.exports = tictactoe;
