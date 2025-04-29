import puppeteer from 'puppeteer';

export class WebLoader {
    async init() {
        console.info('Initializing WebLoader...');
        this.browser = await puppeteer.launch();
        console.info('Browser launched');
        this.page = await this.browser.newPage();
        console.info('New page created');
    }

    async load(url) {
        console.info('Updating viewport...');
        await this.page.setViewport({width: 1080, height: 1024});
        console.info(`Loading URL: ${url}`);
        await this.page.goto(url);
        console.info(`Page loaded: ${url}`);
    }

    async close() {
        console.info('Closing browser...');
        await this.browser.close();
        console.info('Browser closed');
    }

    async locate(selector) {
        console.info(`Locating element with selector: ${selector}`);
        const element = await this.page.locator(selector);
        if (element) {
            console.info(`Element found: ${selector}`);
            return element;
        } else {
            console.error(`Element not found: ${selector}`);
            throw new Error(`Element not found: ${selector}`);
        }
    }
}
