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


});