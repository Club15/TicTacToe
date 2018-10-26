
  var mark = 'X';
  var scoreO = 0;
  var scoreX = 0;
  var haveWinner = false;
  var table = ['0','1','2','3','4','5','6','7','8'];
  var count = 0;

//returns the table, who's turn it is and scores
tictactoe = function() {
  var t = getTable();
  var m = getMark();
  var s = getScore();
  var tictactoe = {"game": t, "mark": m, "score": s};
  return tictactoe;
}

//returns the table
getTable = function() {
  return table;
}

//returns who's turn it is (mark)
getMark = function() {
  return mark;
}

//returns the scores (scoreX and scoreO)
getScore = function() {
  var score = {"scoreX": scoreX, "scoreO": scoreO};
  return score;
}

//returns the score for player O
getOscore = function() {
  return scoreO;
}

//returns the score for player X
getXscore = function() {
  return scoreX;
}

//flips the player (mark) who's turn it is
flipMark = function() {
  if(mark === 'X') {
    mark = 'O';
  }
  else {
    mark = 'X';
  }
  return mark;
}

updateGame = function(square) {
  if (updateTable(square)) {
    if (!isWinner()) {
      flipMark();
    }
  }
  return tictactoe();
}

//updates an index (square) to ether X or O in the table array (table)
updateTable = function(square) {
  square = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
  var i = parseInt(square);
  if (table[i] !== 'O' && table[i] !== 'X') {
    count++; 
    table[i] = mark;
    return true;
  }
  return false;
}

//updates the score for ether player O or X
updateScore = function() {
  if(mark === "X") {
    scoreX++;
  }
  else {
    scoreO++;
  }
}

//restarts the game, but keeps the scores
playAgain = function() {
    mark = 'X';
    haveWinner = false;
    table = ['0','1','2','3','4','5','6','7','8'];
    count = 0;
    return tictactoe();
}

//restart the whole game
resetGame = function() {
  playAgain();
  scoreO = 0;
  scoreX = 0;
  return tictactoe();
}

//checks if the player (mark) is a winner
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

//checks if the table is full, therefore a tie.
isTie = function() {
  if (count < 9) {
    return false;
  }
  else {
    return true;
  }
}

module.exports = tictactoe;
