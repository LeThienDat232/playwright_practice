import {test,expect} from '@playwright/test'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage';

test('Login with the wrong credentials' , async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await expect(loginPage.loginHeading).toBeVisible();

    await loginPage.login('wrong@techmart.com','wrong123');

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.errorMessage).toHaveText(
        'Invalid credentials',
    );
})

test('Login with the correct credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);

    await loginPage.goto();
    
    await loginPage.login('demo@techmart.com','demo123');

    await expect(page).toHaveURL('/');

    await expect(
        homepage.userGreeting('Demo User'),
    ).toBeVisible();

})