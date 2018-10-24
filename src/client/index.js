const _ = require("lodash");

document.getElementById('getTable').addEventListener('click', getTable);

 function getTable(){
 	console.log("button pressed");

    fetch('/api/tictactoe')
    .then(res =>
        res.json()
    )
    .then(function (body) {
    	console.log(body);
        document.getElementById('table-content').innerHTML = body.tictactoe.game;
        console.log("Yaaaay");
    })
 }
 
