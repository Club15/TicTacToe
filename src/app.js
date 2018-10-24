const express = require("express");
const path = require("path");
const app = express();
const api = require ("./server/api");

app.use(express.static(path.join(__dirname, "../", "dist")));

app.use("/api", api);

app.get("*", (req, res) => {
  res.status(404).send({ error: "Not found" });
});

app.set("json spaces", 2);

module.exports = app;
