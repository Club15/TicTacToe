
  var mark = 'X';
  var scoreO = 0;
  var scoreX = 0;
  var haveWinner = false;
  var message = 'Its X turn!';
  var table = ['','','','','','','','',''];
  var count = 0;

//returns the table, who's turn it is and scores
tictactoe = function() {
  var t = getTable();
  var m = getMessage();
  var s = getScore();
  var tictactoe = {"game": t, "message": m, "score": s};
  return tictactoe;
}

//returns the table
getTable = function() {
  return 3;
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

//returns the game message
getMessage = function() {
  return message;
}

//return the mark (current player)
getMark = function() {
  return mark;
}

//flips the player (mark) who's turn it is
flipMark = function() {
  if(mark === 'X') {                                //If it was Xs turn
    mark = 'O';                                     //Then now it's O turn
  }
  else {                                            //if it was Os turn
    mark = 'X';                                     //Then now it's X turn
  }
  return mark;
}

//This functions controls the game
updateGame = function(square) {
  if (!haveWinner) {                                //if there isn't a winner
    if (updateTable(square)) {                      //check if the square wasnt taken, and update table
      if (isWinner()) {                             //if there is a winner
        message = "The winner is " + mark + "!";    //let players know who's the winner
        haveWinner = true;                          //mark that there is a winner
        updateScore();                              //update the score to the player who won by one
      }
      else if(isTie()) {                            //if there is a tie
        message = "It's a tie!"                     //let players know there is a tie
      }
      else {                                        //if there is nether a winner not a tie
        flipMark();                                 //change player's turn
        message = "Its " + mark + " turn!"          //let the players know who's turn it is
      }
    }
  }
  return tictactoe();
}

//updates an index (square) to ether X or O in the table array
updateTable = function(square) {
  var i = parseInt(square);
  if (table[i] !== 'O' && table[i] !== 'X') {       //If the square hasn't already been clicked (marked)
    table[i] = mark;                                //mark the square
    count++;                                        //set the counter of taken squares by one
    return true;                                    //return true (update was successful)
  }
  return false;                                     //if square was marked, return false
}

//updates the score for ether player O or X
updateScore = function() {
  if(mark === "X") {                                //if the player who one is X
    scoreX++;                                       //increment his score by one
  }
  else {                                            //otherwise the player is O
    scoreO++;                                       //increment his score by one
  }
}

//restarts the game, but keeps the scores
//reset variables to initial values,except for X- and Oscores.
playAgain = function() {
    mark = 'X';
    haveWinner = false;
    table = ['','','','','','','','',''];
    count = 0;
    message = "Its X turn!";
    return tictactoe();
}

//restart the whole game
//reset all variables to inital values;
resetGame = function() {
  playAgain();
  scoreO = 0;
  scoreX = 0;
  return tictactoe();
}

//checks if there is a winner
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
