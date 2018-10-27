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

    function delay(time) {
        return new Promise(function(resolve) { 
            setTimeout(resolve, time)
        });
     }

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
        //wait for half a sec to let the game load
        await delay(500);
        const message = await page.evaluate(el => el.innerHTML, await page.$('h2'));
        expect(message).toBe("Its X turn!");
    });


    //Check if the scores are 0 at beginning of game
    test("When starting a game, it should be X turn", async () => {
        const response = await page.goto(url);
        //wait for half a sec to let the game load
        await delay(500);
        const scoreO = await page.evaluate(el => el.innerHTML, await page.$('#scoreO'));
        const scoreX = await page.evaluate(el => el.innerHTML, await page.$('#scoreX'));
        expect(scoreO).toBe("Score O: 0");
        expect(scoreX).toBe("Score X: 0");
    });

});