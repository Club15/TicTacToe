//const tictactoe = require("./src/logic/tictactoe");
//console.log(tictactoe("Tic Tac Toe"));


const app = require("./src/server/api");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
