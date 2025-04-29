import {WebLoader} from "../web-loader.js";

describe('WebLoader', () => {
    const GOOGLE_URL = 'https://www.google.com/';
    const GOOGLE_SEARCH_URL = 'https://www.google.com/search?q=';
    const GOOGLE_IMAGES_URL = 'https://www.google.com/imghp';
    const GMAIL_PAGE_TITLE = 'Gmail';
    const SEARCH_QUERY = 'Jest';
    const SEARCH_BAR = 'textarea[name="q"]';
    const SEARCH_BUTTON = 'input[name="btnK"]';
    const IMAGES_LINK = 'a[data-pid="2"]';
    const GMAIL_LINK = 'a[data-pid="23"]';

    const loader = new WebLoader();

    beforeAll(async () => {
        await loader.init();
    });

    afterAll(async () => {
        await loader.close();
    });

    test('should redirect to search results page', async () => {
        await loader.load(GOOGLE_URL);
        await loader.locate(SEARCH_BAR)
            .then(inputField => {
                console.info('Filling search bar...');
                inputField.fill(SEARCH_QUERY);
                return loader.locate(SEARCH_BUTTON);
            })
            .then(searchBtn => {
                console.info('Clicking search button...');
                searchBtn.click();
            })
            .then(async () => {
                console.info('Waiting for navigation...');
                await loader.page.waitForNavigation();
                console.info('Navigation completed');
                const content = await loader.page.content();
                console.info(`Page content: ${content}`);
                expect(content).toContain(`${GOOGLE_SEARCH_URL}${SEARCH_QUERY}`);
            });
    }, 7000);

    test('should redirect to images page', async () => {
        await loader.load(GOOGLE_URL);
        await loader.locate(IMAGES_LINK)
            .then(imgLink => {
                console.info('Clicking images link...');
                imgLink.click();
            })
            .then(async () => {
                console.info('Waiting for navigation...');
                await loader.page.waitForNavigation();
                console.info('Navigation completed');
                const url = await loader.page.url();
                console.info(`Page url: ${url}`);
                expect(url).toContain(GOOGLE_IMAGES_URL);
            });
    }, 7000);

    test('should redirect to gmail page', async () => {
        await loader.load(GOOGLE_URL);
        await loader.locate(GMAIL_LINK)
            .then(imgLink => {
                console.info('Clicking images link...');
                imgLink.click();
            })
            .then(async () => {
                console.info('Waiting for navigation...');
                await loader.page.waitForNavigation();
                console.info('Navigation completed');
                const title = await loader.page.title();
                console.info(`Page title: ${title}`);
                expect(title).toContain(GMAIL_PAGE_TITLE);
            });
    }, 7000);
});
