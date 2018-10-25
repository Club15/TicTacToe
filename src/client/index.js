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

function updateTable(number){
    var data = {square : number};
    console.log(data);

    fetch('/api/tictactoe/addTurn', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
};


document.getElementById("0").onclick = function(){updateTable(0)};
document.getElementById("1").onclick = function(){updateTable(1)};
document.getElementById("2").onclick = function(){updateTable(2)};
document.getElementById("3").onclick = function(){updateTable(3)};
document.getElementById("4").onclick = function(){updateTable(4)};
document.getElementById("5").onclick = function(){updateTable(5)};
document.getElementById("6").onclick = function(){updateTable(6)};
document.getElementById("7").onclick = function(){updateTable(7)};
document.getElementById("8").onclick = function(){updateTable(8)};

function blob(number) {
	console.log(number);
	alert(number);
};
