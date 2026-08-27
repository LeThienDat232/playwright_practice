import {test,expect} from '@playwright/test'

test('Selectors Demo',  async({page}) => {

   await page.goto('https://www.saucedemo.com/');
   await page.pause();
   
   //Locate by role

    await page.getByRole('button', { name: 'Login' }).click();

    //Locate by label
        //await page.getByLabel('Password').fill('secret');
    //Locate by placeholder
    await page
        .getByPlaceholder('Username')
        .fill('standard_user');

    await page
        .getByPlaceholder('Password')
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();
    //Locate by text

    await expect(page.getByText('© 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy', { exact: true })).toBeVisible();
    
    //Locate by alt text

    await page.getByAltText('Sauce Labs Backpack').click();

    //Locate by title
    //Locate by ID

    await page.getByTestId('back-to-products').click();

    //Locate by CSS or XPath

    await page.locator('#react-burger-menu-btn').click();
    await page.locator('//*[@id="logout_sidebar_link"]').click();

});
