const _ = require("lodash");

function getTable(){
    fetch('/api/tictactoe')
    .then(res =>
        res.json()
    )
    .then(function (body) {
    	var game = body.tictactoe.game;
    	for (var i = 0; i < game.length; i++)  {
    		var square = document.getElementById(i);
    		square.innerHTML = game[i];
    	}
    })
}

getTable();

document.getElementById("0").onclick = function(){blob(0)};
document.getElementById("1").onclick = function(){blob(1)};
document.getElementById("2").onclick = function(){blob(2)};
document.getElementById("3").onclick = function(){blob(3)};
document.getElementById("4").onclick = function(){blob(4)};
document.getElementById("5").onclick = function(){blob(5)};
document.getElementById("6").onclick = function(){blob(6)};
document.getElementById("7").onclick = function(){blob(7)};
document.getElementById("8").onclick = function(){blob(8)};

function blob(number) {
	console.log(number);
	alert(number);
};
 
