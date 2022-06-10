
const index = require('./index');

const {Builder, Browser, By, Key, until} = require('selenium-webdriver');


describe('mehmet.js', () => {
    
    it('should return the word', () => {

        console.log("test");


        expect(2*4).toBe(8);
    });

    it('should return the 2 word', () => {
        console.debug("test2");
        expect(2+2).toBe(4);
    });

    it("http",  async () => {
        
        const res = await index.getGoogle();
        expect(4*4).toBe(16);
    });


    it("test-selenium" , async () => {

        const driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless().windowSize({width: 1024, height: 768})).build();

        await driver.get('https://www.google.com/');
        const res = await driver.wait(until.titleIs('Google'), 1000);
        await driver.quit();
        
        expect(res).toBe(true);

    }, 30000);
});