const puppeteer = require('puppeteer');

describe("TicTacToe", () => {
    let browser, page;
    let url = 'https://gameclub15.herokuapp.com/';

    beforeEach(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();

    });

    afterEach(() => {
        browser.close(); 
    });

    // Check that the server responds with a 200 status message
    test("Server responds with 200 status code", async () => {
        const response = await page.goto(url);
        expect(response._status).toBe(200);
    });

    // Check that the page title is "Tic Tac Toe Club15"
    test("Page title is 'TicTacToe Club15'", async () => {
        const response = await page.goto(url);
        const title = await page.title();
        expect(title).toBe("Tic Tac Toe Club15");
        // Check that the page title is "Google"
    });

    //Check if X starts in the game
    test("When starting a game, it should be X turn", async () => {
        const response = await page.goto(url); 
        //wait for game to load
        await page.waitFor(500); 
        //reset game
        await page.click('#resetGame'); 
        //wait for game to reload data
        await page.waitFor(500); 
        //check if the player is X
        const message = await page.evaluate(el => el.innerHTML, await page.$('h2'));
        expect(message).toBe("Its X turn!");
    });


    //Check if the scores are 0 at beginning of game
    test("When starting a game, both scores should be 0", async () => {
        const response = await page.goto(url);
        //wait for game to load
        await page.waitFor(500); 
        //check the score for player X and player O
        const scoreO = await page.evaluate(el => el.innerHTML, await page.$('#scoreO'));
        const scoreX = await page.evaluate(el => el.innerHTML, await page.$('#scoreX'));
        expect(scoreO).toBe("Score O: 0");
        expect(scoreX).toBe("Score X: 0");
    });

    //Check when player X clicks on a square, it gets marked by X
        test("square should be marked X by player X", async () => {
            const response = await page.goto(url);
             //wait a bit for game to load 
            await page.waitFor(500);
            //click on square 0
            await page.click('#s0');
            //wait a bit for game to update
            await page.waitFor(500);
            //check if square 0 is now marked X
            const square0 = await page.evaluate(el => el.innerHTML, await page.$('#s0'));
            expect(square0).toBe("X");
        });

    //Check if player O is next when X has clicked a square
        test("square should be marked X by player X", async () => {
            const response = await page.goto(url);
            //wait for game to load
            await page.waitFor(500);
            //click reset button
            await page.click('#resetGame'); 
            //wait for game to reload data
            await page.waitFor(500);  
            //click on square 0
            await page.click('#s0');
            //wait a bit for game to update
            await page.waitFor(500);
            //check if square 0 is now marked X
            const message = await page.evaluate(el => el.innerHTML, await page.$('#msg'));
            expect(message).toBe("Its O turn!");
        });

    //Check if player O can't choose a square that has been marked
    test("square should still be X, and it should still be Os turn", async () => {
        const response = await page.goto(url);
        //wait for game to load
        await page.waitFor(500);
        //click reset button
        await page.click('#resetGame'); 
        //wait for game to reload data
        await page.waitFor(500);  
        //player X click on square 0
        await page.click('#s0');
        //wait a bit for game to update
        await page.waitFor(500);
        //player O click on square 0
        await page.click('#s0');
        //wait a bit for game to update
        await page.waitFor(500);
        //check if square 0 is still marked X, and its still Os turn
        const message = await page.evaluate(el => el.innerHTML, await page.$('#msg'));
        const square0 = await page.evaluate(el => el.innerHTML, await page.$('#s0'));
        expect(message).toBe("Its O turn!");
        expect(square0).toBe("X");
    });

        //Check if there is a tie if all squares are marked and no winner.
        test("square should still be X, and it should still be Os turn", async () => {
            const response = await page.goto(url);
            //wait for game to load
            await page.waitFor(500);
            //click reset button
            await page.click('#resetGame'); 
            //wait for game to reload data
            await page.waitFor(500);  
            //player X click on square 0
            await page.click('#s0');
            await page.click('#s1');
            await page.click('#s2');
            await page.click('#s3');
            await page.click('#s6');
            await page.click('#s4');
            await page.click('#s5');
            await page.click('#s8');
            await page.click('#s7');
            //wait a bit for game to update
            await page.waitFor(500);
            //check if square 0 is still marked X, and its still Os turn
            const message = await page.evaluate(el => el.innerHTML, await page.$('#msg'));
            expect(message).toBe("It's a tie!");
        });
});