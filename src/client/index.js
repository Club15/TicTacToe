const _ = require("lodash");

document.getElementById('getTable').addEventListener('click', getTable);

 function getTable(){
 	console.log("button pressed");

    fetch('/api/tictactoe')
    .then(res =>
        res.json()
    )
    .then(function (body) {
    	var table = document.getElementById('table');
    	console.log(body);
    	var game = body.tictactoe.game;
    	console.log(table);
    	console.log(game);
    	for (var i = 0; i < game.length; i++)  {
    		var square = document.createElement('div');
    		square.id = i;
    		square.innerHTML = game[i];
    		table.appendChild(square);
    	}
    })
 }

 getTable();
 
