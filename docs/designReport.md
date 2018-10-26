# Design Report

#### About the project 
The project was to build the game Tic Tac Toe using the programing language Java script. The logic of the game was coded using test driven development and the code was loosely coupled. The project is stored in the source control system GitHub. Circle CI is used in the project to run all the test automatically when a new version is pushed to GitHub. Heroku is used to set up a web interface for the game and also to deploy the game automatically.  

#### User Requirements
Here are the user requirements for the game Tic Tac Toe. They are ordered so that the first requirement is the most important one. 

As a user I want to be able to:
1. see the gameboard so that I can play the game.
2. see who’s turn it is so that I can know when it's my turn.
3. see the score so I know if I am winning.
4. click on the square on the gameboard to make my move.
5. click a play again button when the game is over to start a new game.
6. click a restart button to start a new game and setting the scores to zero.

## Logic Design

###### For first requirement: 
- we are going to make an array to keep track of the gameboard.
- we create a function that returns the array.

###### For the second requirement:
- we create a variable that keeps track on whose turn it is.
- we create a function that flips the variable between X and O.
- we create a function that returns who's the next player.

###### For the third requirement:
- we create two variables, one for X and one for O, too keep track on players score.
- we create a function that increments the score of the winner by one.
- we create a function that returns the score of both players.

###### For the fourth requirement:
- we create a function that takes the number of the square. that has been marked as an argument and updates the gameboard array.
- we create a function that checks if there is a winner.

###### For the fifth requirement:
- we create a function that resets the array and puts the player to X.

###### For the sixth requirement:
- we create a function that resets the array, player and score to zero.
