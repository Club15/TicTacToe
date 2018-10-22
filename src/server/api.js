// src/api.js
const express = require("express");
const router = express.Router();
const greeting = require("../logic/tictactoe");

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS."});
});

router.options("/", (req, res) => {
  const options = {
    options: { get: ["/server/tictactoe", "/server/tictactoe/{TITLE}"] }
  };
  res.status(200).send(options);
});

router.get("/tictactoe/:title", (req, res) => {
  res.status(200).send({ tictactoe: tictactoe(req.params.title) });
});

module.exports = router;
