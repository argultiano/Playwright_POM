import { test, expect } from '@playwright/test';

test.describe('All My Tests', () => {



    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/')

        await page.locator('id=user-name').fill('standard_user')
        await page.locator('//input[@data-test="password"]').fill('secret_sauce')
        await page.locator('#login-button').click()
        await page.waitForURL('https://www.saucedemo.com/inventory.html')
        // await page.close()

    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })

    test('HomePage', async ({ page }) => {

        // await page.goto('https://www.saucedemo.com/')

        // await page.locator('id=user-name').fill('standard_user')
        // await page.locator('//input[@data-test="password"]').fill('secret_sauce')
        // await page.locator('#login-button').click()
        // await page.waitForURL('https://www.saucedemo.com/inventory.html')


        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="item-1-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();


    })

    test('Logout', async ({ page }) => {

        // await page.goto('https://www.saucedemo.com/')
        // await page.locator('id=user-name').fill('standard_user')
        // await page.locator('//input[@data-test="password"]').fill('secret_sauce')
        // await page.locator('#login-button').click()
        // await page.waitForURL('https://www.saucedemo.com/inventory.html')


        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        await page.waitForURL('https://www.saucedemo.com/')

    })

})









