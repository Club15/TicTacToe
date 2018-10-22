// src/api.js
const express = require("express");
const app = express();
const greeting = require("../logic/tictactoe");
app.get("/tictactoe/:title", (req, res) => {

  var greeting_returned = {greeting: "This is " + req.params.title + "!"};

  res.status(200);
  res.send(greeting_returned);
});
module.exports = app;
