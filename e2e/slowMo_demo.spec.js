import { test, expect, chromium } from '@playwright/test';

test('Slow Motion and video recording', async() => {

    //launch browser
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    //Create a new incognito browser context
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width:800, height:600}
         }
    });

    //Create a new page inside context
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/')

    await page.pause()
    await page.locator('id=user-name').fill('standard_user')
    await page.locator('//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await page.waitForURL('https://www.saucedemo.com/inventory.html')
    //await page.pause()

    //await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('//button[@id="react-burger-menu-btn"]').click()
    await page.locator('[data-test="logout-sidebar-link"]').click();

    //Dispose context once it's no longer needed
    await context.close();

})