
const index = require('./index');

const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const https = require('https');

const sendHttpRequest = async (url, method, body) => {

    const options = {
        hostname: 'api.buildkite.com',
        port: 443,
        path: url,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.BUILDKITE_API_TOKEN}`
        }
    };

    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', (d) => {
            console.log(d);
        });
    }
    );

    req.on('error', (error) => {
        console.error(error);
    }
    );

    req.write(body);
    req.end();
}


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

        const driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()
                                .headless()
                                .addArguments('start-maximized')
                                .addArguments('disable-infobars')
                                .addArguments('--disable-extensions')
                                .addArguments('--disable-gpu')
                                .addArguments('--disable-dev-shm-usage')
                                .addArguments('--no-sandbox')
        ).build();

        await driver.get('https://www.google.com/');
        const res = await driver.wait(until.titleIs('Google'), 1000);
        await driver.quit();
        
        expect(res).toBe(true);

    }, 30000);


    it("test-http",  async () => {
            await sendHttpRequest('/v1/builds', 'POST', JSON.stringify({
                "build": {
                    "branch": "master",
                    "commit": "12345",
                    "message": "test",
                    "pull_request": false,
                    "pull_request_id": null,
                    "pull_request_number": null,
                }
            }));
            expect(4*4).toBe(16);
        }
    );
});
