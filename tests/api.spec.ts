import { test, expect, request, APIRequestContext } from '@playwright/test';

test.describe('ReqRes API Tests', () => {
  let apiContext: APIRequestContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      extraHTTPHeaders: {
        'x-api-key': 'reqres-free-v1',  
      },
    });
  });

  test('Login Test - Should return token', async () => {
    const response = await apiContext.post('https://reqres.in/api/login', {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.token).toBeTruthy();
  });

  test('Fetch Users Test - Should return list of users', async () => {
    const response = await apiContext.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThanOrEqual(6);
  });

  test('Create User Test - Should create a user', async () => {
    const response = await apiContext.post('https://reqres.in/api/users', {
      data: {
        name: 'Alperen Turkseven',
        job: 'QA Tester',
      },
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.id).toBeTruthy();
    expect(body.createdAt).toBeTruthy();
  });

  test('Delete User Test - Should delete user', async () => {
    const response = await apiContext.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
  });
});
