import {test, expect} from '@playwright/test'

test('Assertions Demo', async({page}) => {

    await page.goto('https://www.youtube.com/');
    await page.pause()


    //Present not present
    await expect(page.locator('text=Try searching to get started')).toHaveCount(1);
    

    if(await page.$('text=Try searching to get started')){
        await page.locator('text=Try searching to get started').click();
    }
    //Check element hidden or visible
    await expect(page.locator('text=Try searching to get started')).toBeVisible()
    await expect.soft(page.locator('text=Try searching to get started')).toBeHidden()

    //check element enabled or disable
    await expect(page.locator('text=Try searching to get started')).toBeEnabled()
    await expect.soft(page.locator('text=Try searching to get started')).toBeDisabled()

    //Check text
    await expect(page.locator('text=Try searching to get started')).toHaveText('Try searching to get started')
    await expect(page.locator('text=Try searching to get started')).not.toHaveText('Searched')

       
})