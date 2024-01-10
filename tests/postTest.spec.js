import { test, expect } from "@playwright/test";

var url = 'https://reqres.in/';
var successReg = 'api/register';
var id = '';
var token = '';

test('Successful Registration', async ({ request }) => {

    const response = await request.post(url + successReg, {
        data: {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    })

    expect(response.status()).toBe(200);
    const responseData = await response.json();
    id = responseData.id;
    token = responseData.token;
    console.log('id  = ' + id + ' and token = ' + token);
})