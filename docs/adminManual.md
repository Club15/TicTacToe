# Administration manual

When taking over this program you have to have/create an account with Github, Heroku and CircleCI to be able to maintain the app. You also have to download and install Node, Npm and Heroku.


### GitHub
To get access to the project on your own computer you can use Terminal for Mac and Linux or Command Promt/Git Bash for windows. Go to the directory where you want to store the project and type in the following command:
```sh
    $ git clone git@github.com:Club15/TicTacToe.git
```

##### List of common git commands:
shows which files have been updated since the last pull.
```sh
    $ git status
```
First step of adding the new changes to GitHub.
```sh
    $ git add <Name of file>
```
Second step is to commit the changes to the local repoitory.
```sh
    $ git commit -m ”Good explanation of what was changed ”
```
Third step is to push the changes to the master branch
```sh
    $ git push: Updates the changes to GitHub.
```
Gets the newest updates of code from GitHub.
```sh
    $ git pull
```
Creates and moves you to a new branch.
```sh
    $ git checkout -b <Name of branch>
```


#### Node and NPM
In order to run the program for development or debugging one has set up Node.js and NPM. Node.js is among other used as a package manager. NPM is used to get additional libraries and manage functional dependencies for the program. Additionally Node.js sets up Javascript runtime to be able to run the code outside of a browser.

##### Setup:
Download Node.js here:  https://nodejs.org/en/
Run the installer and verify installation by typing:
```sh
    $ node --version
```
NPM is distributed with Node.js and should therefore be installed as well.
Verify installation by typing
```sh
    $ npm --version
```
After installation and pulling the newest version of TicTacToe from the Git repository to initialize the development environment tracerce to the root folder of the program and run the command:
```sh
    $ npm install
```
The command ```npm install``` will download and install the dependencies for the program such as [Express](https://expressjs.com/) and [Lodash](https://lodash.com/) and development dependencies such as [Jest](https://jestjs.io/), [Supertest](https://www.npmjs.com/package/supertest), [Webpack](https://webpack.js.org/). Further information about which dependencies are used can be seen in the ```package.json``` file and the commands for the environment can be found under ```scripts```.
##### Most notable of the script commands are:
To start both the node server and the webpack development server.
```sh
    $ npm run dev
```
To only run the node server.
```sh
	$ nodemon server
```
To only run the webpack development server.
```sh
	$ npm run server
```
To remove all dependencies and delete the ```/node_modules``` folder.
```sh
	$ npm run clean
```

# Heroku

Heroku is a cloud platform as a service that is used to deploy the app so it is accessible outside the working directory. The TicTacToe game can be found on the website https://gameclub15.herokuapp.com/.

The first step to use Heroku is to create an account through www.heroku.com. Then it is neccesary to install Heroku to be able to manage the app through your local terminal. You can find the installation using this link. https://devcenter.heroku.com/articles/heroku-cli.

When you have set up Heroku on your computer you have to install it with the command:
```sh
    $ npm install -g heroku
```
To confirm that the installation was a success type in the following command:
```sh
    $ heroku --version
```
Next you have to log in to Heroku through your terminal using this command:
```sh
    $ heroku login
```
The last step is connecting to the app gameClub15 with the command:
```sh
    $ git remote add heroku git@heroku.com:gameclub15.git
```
You can check if the connection was a succes with this command:
```sh
    $ git remote -v
```

Heroku has been set up to deploy automatically after each push to the master branch on git as long as Circle Ci gives a pass on the new code. If for some reason that needs to be changed you can go to https://www.heroku.com, select the app gameclub15, go to deploy, and there you can find Automatic Deploy and press the button Disable Automatic Deploy.

If you need to maintain the app you can also select settings and turn on Maintanace mode.

# Circle CI
Circle CI is an continuous integration program. It runs test on tictactoe when a new version is pushed on github. In the ```.circleci``` folder is a file ```config.yml``` that tells Circle CI what test to run and what it needs to install to run the test. Circle CI is connected to github and users can see if the version that is pushed passes all the test or not. It is also possible to see details of the test and what went wrong on [Circle CI webpage](https://circleci.com/gh/Club15/TicTacToe).

To be able to use Circle Ci, the user needs to sign up on their webpage with the github account that has access to tictactoe.
