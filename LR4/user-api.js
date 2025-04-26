import {RestClient} from './rest-client.js';

export class UserAPI {
    _USERS_URL = "/v1/Users";
    _REST = new RestClient();

    _getUrl(userId) {
        if (isFinite(userId)) {
            return `${this._USERS_URL}/${userId}`;
        }
        return this._USERS_URL;
    }

    createUser(user) {
        return this._REST.sendRequest('POST', this._getUrl(), null, user);
    }

    getUsers() {
        return this._REST.sendRequest('GET', this._getUrl());
    }

    getUser(id) {
        return this._REST.sendRequest('GET', this._getUrl(id));
    }

    updateUser(user) {
        return this._REST.sendRequest('PUT', this._getUrl(user?.id), null, user);
    }

    deleteUser(id) {
        return this._REST.sendRequest('DELETE', this._getUrl(id));
    }
}
