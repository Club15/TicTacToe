//const tictactoe = require("./src/tictactoe");
//console.log(tictactoe("Tic Tac Toe"));


const app = require("./src/api");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
