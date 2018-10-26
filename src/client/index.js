const _ = require("lodash");

function getTable(){
    fetch('/api/tictactoe')
    .then(res =>
        res.json()
    )
    .then(function (body) {
    	var game = body.tictactoe.game;
    	updateTable(game);
    })
}
getTable();

function updateTable(game) {
	console.log(game);
	for (var i = 0; i < game.length; i++)  {
    	var square = document.getElementById(i);
    	square.innerHTML = game[i];
    }
}

function addMove(number){
    var square = {square : number};
    fetch('/api/tictactoe/addTurn', {
        method: "POST",
        body: JSON.stringify(square),
        headers: {"Content-Type":  "application/json; charset=utf-8"}
    })
    .then(res => res.json())
    .then(response => updateTable(response.tictactoe.game))
    .catch(error => console.log('Error:', error));
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

