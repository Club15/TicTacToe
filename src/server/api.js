// src/api.js
const express = require("express");
const router = express.Router();
const tictactoe = require("../logic/tictactoe");

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

router.get("/tictactoe/mark", (req, res) => {
  res.status(200).send({ tictactoe: getMark() });
});

router.post("/tictactoe/addTurn/:square", (req, res) => {
    console.log(req.body);
    console.log(res);
    console.log(data);
    console.log("hello, it's me");

  res.status(200).send({ tictactoe: updateTable(square) });
});


router.options("/", (req, res) => {
  const options = {
    options: { post: ["/api/tictactoe", "/api/updateTable/{SQUARE}"] }
  };
  res.status(200).send(options);
});



module.exports = router;
