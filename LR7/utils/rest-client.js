import axios from "axios";

export class RestClient {
    constructor(apiUrl) {
        this._API_URL = apiUrl ?? "https://google.com";
    }

    _getFullUrl(url) {
        return this._API_URL + url;
    }

    sendRequest(method, url, headers = null, data = null) {
        console.info(`Sending ${method} request to ${this._getFullUrl(url)}`);
        return axios({
            method: method,
            url: this._getFullUrl(url),
            headers: headers,
            data: data
        });
    }
}
