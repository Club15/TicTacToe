// src/api.js
const express = require("express");
const router = express.Router();
const tictactoe = require("../logic/tictactoe");
var debug = require('debug')('http');


router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS."});
});

router.options("/", (req, res) => {
  const options = {
    options: { get: ["/api/tictactoe", "/api/tictactoe/{TITLE}"] }
  };
  res.status(200).send(options);
});

router.get("/tictactoe/", (req, res) => {
  res.status(200).send({ tictactoe: tictactoe() });
});

router.post("/tictactoe/addTurn", (req, res) => {	
  //var square = req.body.square;
  res.status(200).send({ tictactoe: updateGame(req.params) });
});

router.get("/tictactoe/playAgain", (req, res) => {
  res.status(200).send({ tictactoe: playAgain() });
});

router.get("/tictactoe/resetGame", (req, res) => {
  res.status(200).send({ tictactoe: resetGame() });
});


module.exports = router;
