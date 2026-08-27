import { test, expect } from '@playwright/test'
import { HomePage } from './pages/HomePage'

test('home play loads successfully' , async ({page}) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await expect(homePage.welcomeHeading).toBeVisible();

})