import {PuppeteerWebLoader} from "../../utils/puppeteer-web-loader.js";

describe('WebLoader', () => {
    const GOOGLE_URL = 'https://www.google.com/';
    const SEARCH_BAR = 'textarea[name="q"]';
    const SEARCH_BUTTON = 'input[name="btnK"]';
    const DOODLE_BUTTON = 'input[name="btnI"]';
    const IMAGES_LINK = 'a[data-pid="2"]';
    const GMAIL_LINK = 'a[data-pid="23"]';

    const loader = new PuppeteerWebLoader();

    beforeAll(async () => {
        await loader.init();
    });

    afterAll(async () => {
        await loader.close();
    });

    async function verifyElementExists(selector) {
        await loader.load(GOOGLE_URL);
        await loader.locate(selector)
            .then(element => expect(element).not.toBeNull());
    }

    test('should contain search bar', async () => {
        await verifyElementExists(SEARCH_BAR);
    }, 3000);

    test('should contain search button', async () => {
        await verifyElementExists(SEARCH_BUTTON);
    }, 3000);

    test('should contain doodle button', async () => {
        await verifyElementExists(DOODLE_BUTTON);
    }, 3000);

    test('should contain images link', async () => {
        await verifyElementExists(IMAGES_LINK);
    }, 3000);

    test('should contain gmail link', async () => {
        await verifyElementExists(GMAIL_LINK);
    }, 3000);
});
