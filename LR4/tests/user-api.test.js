import {UserAPI} from '../user-api.js';

const api = new UserAPI();

describe('UserAPI.createUser', () => {
    const USER = {
        id: 1,
        userName: 'User 1',
        password: 'Password1'
    };

    test('should return status code 415 Unsupported Media Type with null body', async () => {
       await api.createUser(null)
           .catch(error => {
               expect(error.response.status).toBe(415);
           });
    });

    test('should return status code 200 OK with empty user object', async () => {
        const response = await api.createUser({});
        expect(response.status).toBe(200);
    });

    test('should return valid user with all params', async () => {
        const response = await api.createUser(USER);
        expect(response.data).toEqual(USER);
    });

    test('should return valid user with missing username', async () => {
        const user = structuredClone(USER);
        user.userName = null;
        const response = await api.createUser(user);
        expect(response.data).toEqual(user);
    });

    test('should return valid user with missing password', async () => {
        const user = structuredClone(USER);
        user.password = null;
        const response = await api.createUser(user);
        expect(response.data).toEqual(user);
    });
});

describe('UserAPI.getUsers', () => {
    const VALID_USER_ID = 1;
    const INVALID_USER_ID = -1;

    test('should return status code 200 OK', async () => {
        const response = await api.getUsers();
        expect(response.status).toBe(200);
    });

    test('should return non-null body', async () => {
        const response = await api.getUsers();
        expect(response.data).not.toBeNull();
    });

    test('should contain valid user', async () => {
        const expectedUser = {
            id: VALID_USER_ID,
            userName: `User ${VALID_USER_ID}`,
            password: `Password${VALID_USER_ID}`,
        };
        const response = await api.getUsers();
        expect(response.data).toContainEqual(expectedUser);
    });

    test('should not contain invalid user', async () => {
        const expectedUser = {
            id: INVALID_USER_ID,
            userName: `User ${INVALID_USER_ID}`,
            password: `Password${INVALID_USER_ID}`,
        };
        const response = await api.getUsers();
        expect(response.data).not.toContainEqual(expectedUser);
    });

    test('should not contain empty user', async () => {
        const expectedUser = {};
        const response = await api.getUsers();
        expect(response.data).not.toContainEqual(expectedUser);
    });
});

describe('UserAPI.getUser', () => {
    const VALID_USER_ID = 1;
    const INVALID_USER_ID = -1;

    test('should return status code 200 OK with valid user', async () => {
        const response = await api.getUser(VALID_USER_ID);
        expect(response.status).toBe(200);
    });

    test('should return status code 404 Not Found with invalid user', async () => {
        await api.getUser(INVALID_USER_ID)
            .catch(error => {
                expect(error.response.status).toBe(404);
            });
    });

    test('should return 400 Bad Request with null user', async () => {
        await api.getUser(null)
            .catch(error => {
                expect(error.response.status).toBe(400);
            });
    });

    test('should return user with correct user id', async () => {
        const response = await api.getUser(VALID_USER_ID);
        expect(response.data.id).toBe(VALID_USER_ID);
    });

    test('should return valid user', async () => {
        const expectedUser = {
            id: VALID_USER_ID,
            userName: `User ${VALID_USER_ID}`,
            password: `Password${VALID_USER_ID}`
        };
        const response = await api.getUser(VALID_USER_ID);
        expect(response.data).toEqual(expectedUser);
    });
});

describe('UserAPI.updateUser', () => {
    const USER = {
        id: 1,
        userName: 'User 1',
        password: 'Password1'
    };

    test('should return status code 405 Method Not Allowed Unsupported Media Type with null body', async () => {
        await api.updateUser(null)
            .catch(error => {
                expect(error.response.status).toBe(405);
            });
    });

    test('should return status code 405 Method Not Allowed with empty user object', async () => {
        await api.updateUser({})
            .catch(error => {
                expect(error.response.status).toBe(405);
            });
    });

    test('should return valid user with all params', async () => {
        const response = await api.updateUser(USER);
        expect(response.data).toEqual(USER);
    });

    test('should return valid user with missing username', async () => {
        const user = structuredClone(USER);
        user.userName = null;
        const response = await api.updateUser(user);
        expect(response.data).toEqual(user);
    });

    test('should return valid user with missing password', async () => {
        const user = structuredClone(USER);
        user.password = null;
        const response = await api.updateUser(user);
        expect(response.data).toEqual(user);
    });
});

describe('UserAPI.deleteUser', () => {
    const VALID_USER_ID = 1;
    const INVALID_USER_ID = -1;

    test('should return status code 200 OK with valid user', async () => {
        const response = await api.deleteUser(VALID_USER_ID);
        expect(response.status).toBe(200);
    });

    test('should return status code 404 Not Found with invalid user', async () => {
        await api.deleteUser(INVALID_USER_ID)
            .catch(error => {
                expect(error.response.status).toBe(404);
            });
    });

    test('should return 400 Bad Request with null user', async () => {
        await api.deleteUser(null)
            .catch(error => {
                expect(error.response.status).toBe(400);
            });
    });
});
