# Design Report

## User Requirements

As a user I want to be able to:
1. see the gameboard so that I can play the game
2. see whos turn it is so that I can know when it's my turn
3. see the score so I know if I am winning
4. click on the square on the gameboard to make my move
5. click a play again button when the game is over to start a new game
6. click a restart button to start a new game and setting the scores to zero



## Logic Design

Breytur fyrir O og X "mark = 'X'", hún byrjar á X
Breyta sem heldur utan um stigin "scoreO" og "scoreX". Breyturnar byrja í 0.
Breyta sem telur hversu margir reitir fullir "gridCounter".
Breyta sem segir ef það er kominn vinningshafi "haveWinner".

array sem heldur utan um borðið/gridið

function sem flippar mark milli X og O
function sem hreinsar borðið / newgame
function sem hækkar grid coutnerinn
function sem tékkar hvort einhver sé búinn að vinna
function sem setur O og X í reit sem búið er að klikka á
function sem hækkar skorið hjá O og X
function sem tékkar hvort þa sé búið að klikka á reitinn
