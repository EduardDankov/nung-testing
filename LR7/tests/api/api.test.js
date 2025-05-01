import {RestClient} from '../../utils/rest-client.js';

describe('API test', () => {
    const rest = new RestClient("https://www.google.com");

    const HOW_SEARCH_WORKS_URL = '/search/howsearchworks';
    const PRIVACY_URL = '/url?sa=t&rct=j&source=webhp&url=https://policies.google.com/privacy%3Fhl%3Duk%26fg%3D1&opi=89978449'
    const TERMS_URL = '/url?sa=t&rct=j&source=webhp&url=https://policies.google.com/terms%3Fhl%3Duk%26fg%3D1&opi=89978449'
    const ADS_URL = '/url?sa=t&rct=j&source=webhp&url=https%3A%2F%2Fwww.google.com%2Fintl%2Fuk_ua%2Fads%2F%3Fsubid%3Dww-ww-et-g-awa-a-g_hpafoot1_1%21o2%26fg%3D1&opi=89978449'
    const YOUR_SEARCH_DATA_URL = '/url?sa=t&rct=j&source=webhp&url=/history/privacyadvisor/search/unauth%3Futm_source%3Dgooglemenu%26fg%3D1%26cctld%3Dcom&opi=89978449'
    const HOW_SEARCH_WORKS_CONTENT = 'Explore the world of Google Search';
    const PRIVACY_REDIRECT = 'https://policies.google.com/privacy';
    const TERMS_REDIRECT = 'https://policies.google.com/terms';
    const ADS_REDIRECT = 'https://www.google.com/intl/uk_ua/ads';
    const YOUR_SEARCH_DATA_REDIRECT = '/history/privacyadvisor/search/unauth';

    test('should return how search works page', async () => {
        console.log(`Sending GET request to ${HOW_SEARCH_WORKS_URL}`);
        const response = await rest.sendRequest("GET", HOW_SEARCH_WORKS_URL);
        expect(response.status).toEqual(200);
        expect(response.data).toContain(HOW_SEARCH_WORKS_CONTENT);
    });

    test('should return privacy redirect', async () => {
        console.log(`Sending GET request to ${PRIVACY_URL}`);
        const response = await rest.sendRequest("GET", PRIVACY_URL);
        expect(response.status).toEqual(200);
        expect(response.data).toContain(PRIVACY_REDIRECT);
    });

    test('should return terms redirect', async () => {
        console.log(`Sending GET request to ${TERMS_URL}`);
        const response = await rest.sendRequest("GET", TERMS_URL);
        expect(response.status).toEqual(200);
        expect(response.data).toContain(TERMS_REDIRECT);
    });

    test('should return ads redirect', async () => {
        console.log(`Sending GET request to ${ADS_URL}`);
        const response = await rest.sendRequest("GET", ADS_URL);
        expect(response.status).toEqual(200);
        expect(response.data).toContain(ADS_REDIRECT);
    });

    test('should return your data redirect', async () => {
        console.log(`Sending GET request to ${YOUR_SEARCH_DATA_URL}`);
        const response = await rest.sendRequest("GET", YOUR_SEARCH_DATA_URL);
        expect(response.status).toEqual(200);
        expect(response.data).toContain(YOUR_SEARCH_DATA_REDIRECT);
    });
});
