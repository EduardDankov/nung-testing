import {RestClient} from '../../utils/rest-client.js';
import axios from "axios";

jest.mock('axios');

function validateResponse(response, expectedResponse) {
    expect(response.status).toBe(expectedResponse.status);
    expect(response.data).toBe(expectedResponse.data);
}

describe('Unit test', () => {
    const rest = new RestClient("https://www.google.com");

    test('should return 200 OK for valid GET request', async () => {
        const expectedResponse = {
            status: 200,
            data: `{"username":"testUser"}`
        };
        axios.mockResolvedValue(expectedResponse);

        const response = await rest.sendRequest('GET', '/');
        validateResponse(response, expectedResponse);
    });

    test('should return 400 Bad Request for invalid POST request', async () => {
        const expectedResponse = {
            status: 400,
            data: `{"error":"Request body is empty"}`
        };
        axios.mockResolvedValue(expectedResponse);

        const response = await rest.sendRequest('POST', '/');
        validateResponse(response, expectedResponse);
    });

    test('should return 404 Not Found for invalid PUT request', async () => {
        const expectedResponse = {
            status: 404,
            data: `{"error":"Entity not found"}`
        };
        axios.mockResolvedValue(expectedResponse);

        const response = await rest.sendRequest('PUT', '/');
        validateResponse(response, expectedResponse);
    });

    test('should return 401 Unauthorized for invalid PATCH request', async () => {
        const expectedResponse = {
            status: 401,
            data: `{"error":"You must be logged in to perform this action"}`
        };
        axios.mockResolvedValue(expectedResponse);

        const response = await rest.sendRequest('PATCH', '/');
        validateResponse(response, expectedResponse);
    });

    test('should return 403 Forbidden for invalid DELETE request', async () => {
        const expectedResponse = {
            status: 403,
            data: `{"error":"You are not authorized to perform this action"}`
        };
        axios.mockResolvedValue(expectedResponse);

        const response = await rest.sendRequest('DELETE', '/');
        validateResponse(response, expectedResponse);
    });
});
