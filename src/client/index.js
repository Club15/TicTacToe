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
	var mark = tictactoe.mark;
	var score = tictactoe.score;
	updateTable(game);
	updateMark(mark);
	updateScore(score);
}

function updateTable(game) {
	for (var i = 0; i < game.length; i++)  {
    	var square = document.getElementById(i);
    	square.innerHTML = game[i];
    }
}

function updateMark(mark) {
	console.log(mark);
}

function updateScore(score) {
	console.log(score);
}

function addMove(number){
    var square = number;
    fetch("/api/tictactoe/addTurn/" + square)
    .then(res => res.json())
    .then(res => updateTable(res.tictactoe.game))
    .catch(error => console.log('Error:', error));
};

/*function addMove(number){
    var square = {square : number};
    fetch('/api/tictactoe/addTurn', {
        method: "POST",
        body: JSON.stringify(square),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => updateTable(res.tictactoe.game))
    .catch(error => console.log('Error:', error));
};*/

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

document.getElementById("0").onclick = function(){addMove('0')};
document.getElementById("1").onclick = function(){addMove('1')};
document.getElementById("2").onclick = function(){addMove('2')};
document.getElementById("3").onclick = function(){addMove('3')};
document.getElementById("4").onclick = function(){addMove('4')};
document.getElementById("5").onclick = function(){addMove('5')};
document.getElementById("6").onclick = function(){addMove('6')};
document.getElementById("7").onclick = function(){addMove('7')};
document.getElementById("8").onclick = function(){addMove('8')};

