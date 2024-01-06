import { test, expect } from "@playwright/test";

test('Get facts about Greece', async ({ request }) => {

    let country = 'Greece';
    let numberOfCapitals = 1;
    let capital = 'Athens';
    let commonPolishTranslation = 'Grecja'

    const response = await request.get('https://restcountries.com/v3.1/name/' + country);
    expect(response.status()).toBe(200);
    const responseData = await response.json();

    expect(responseData[0].name.common).toBe(country);
    expect(responseData[0].capital.length).toBe(numberOfCapitals);
    expect(responseData[0].capital[0]).toBe(capital);
    expect(responseData[0].translations.pol.common).toBe(commonPolishTranslation);


})