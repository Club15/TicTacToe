//const _ = require("lodash");
const fetch = require('node-fetch');

function getTable(){
    fetch('/api/tictactoe')
    .then(res =>
        res.json()
    )
    .then(function (body) {
    	var tictactoe = body.tictactoe;
    	updateGame(tictactoe);
    })
}
getTable();

function updateGame(tictactoe) {
	var game = tictactoe.game;
    var score = tictactoe.score;
    var message = tictactoe.message;
	updateTable(game);
    updateScore(score);
    updateMessage(message);
}

function updateTable(game) {
	for (var i = 0; i < game.length; i++)  {
    	var square = document.getElementById('s'+ i);
      console.log(square);
    	square.innerHTML = game[i];
    }
}

function updateMessage(message) {
    console.log(message);
    document.getElementById("msg").innerHTML = message;
}

function updateScore(score) {
    var scoreX = score.scoreX;
    var scoreO = score.scoreO;
    document.getElementById("scoreX").innerHTML = "Score X: " + scoreX;
    document.getElementById("scoreO").innerHTML = "Score O: " + scoreO;
}

function addMove(number){
    var square = number;
    fetch("/api/tictactoe/addTurn/" + square)
    .then(res => res.json())
    .then(res => updateGame(res.tictactoe))
    .catch(error => console.log('Error:', error));
};

document.getElementById("playAgain").onclick = function(){
	fetch('/api/tictactoe/playAgain')
    .then(res =>
        res.json()
    )
    .then(function (body) {
    	var tictactoe = body.tictactoe;
    	updateGame(tictactoe);
    })
};

document.getElementById("resetGame").onclick = function(){
	fetch('/api/tictactoe/resetGame')
    .then(res =>
        res.json()
    )
    .then(function (body) {
    	var tictactoe = body.tictactoe;
    	updateGame(tictactoe);
    })
};

document.getElementById("s0").onclick = function(){addMove('0')};
document.getElementById("s1").onclick = function(){addMove('1')};
document.getElementById("s2").onclick = function(){addMove('2')};
document.getElementById("s3").onclick = function(){addMove('3')};
document.getElementById("s4").onclick = function(){addMove('4')};
document.getElementById("s5").onclick = function(){addMove('5')};
document.getElementById("s6").onclick = function(){addMove('6')};
document.getElementById("s7").onclick = function(){addMove('7')};
document.getElementById("s8").onclick = function(){addMove('8')};
