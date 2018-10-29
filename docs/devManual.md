# Development manual
 
This is a development manual for a remake of the classic [Tic Tac Toe game](https://en.wikipedia.org/wiki/Tic-tac-toe) and was made by the group Club15 as a part of course Software Engineering at University of Reykjavík.  The source control client used is Github.
 
The game is available to anyone to play in their browser at: https://gameclub15.herokuapp.com/
 
 
##### Build environment
To deploy the game locally begin by downloading a zip of the github repository or clone the directory to your computer with a github tool of your choice from [here](https://github.com/Club15/TicTacToe).
 
Next you have to install Node from from here: https://nodejs.org/en/
- Here is additional information on how to install node for [Windows](https://blog.teamtreehouse.com/install-node-js-npm-windows) or [Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac).
 
To run the game locally traverse to the root of the folder using a command line program and execute the following commands:
```sh
    $ npm install
    $ npm run startapp
```
For more detailed information about installation of the program please consult the [Administrator Manual](https://github.com/Club15/TicTacToe/blob/master/docs/adminManual.md).
 
#### Tests
The project was made from the start as a test driven development project with the goal of making work on it as a part of continuous integration. Therefore there are multiple test environment built within the program. Jest and Supertest are used for unit testing and Puppeteer for functional testing which Circle CI which also handles API testing, makes use of when a new version of the program is pushed to Github. It does so by running all built in tests and publishing them to [Circle CI’s website](https://circleci.com/gh/Club15/TicTacToe).
 
To locally run all unit, API and functional tests once use the command
```s
  $ npm test
```
Running the above command will also make a new folder called code coverage containing html showing what and how much of the program is tested.
 In order to have continuous testing use
```s
  $ npm run watch
```