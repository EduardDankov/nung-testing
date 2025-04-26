import axios from "axios";

export class RestClient {
    _API_URL = "https://fakerestapi.azurewebsites.net/api";

    _getFullUrl(url) {
        return this._API_URL + url;
    }

    sendRequest(method, url, headers = null, data = null) {
        return axios({
            method: method,
            url: this._getFullUrl(url),
            headers: headers,
            data: data
        });
    }
}
