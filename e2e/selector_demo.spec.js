import { test, expect } from '@playwright/test';

test('Selectors Demo', async ({page}) => {

    await page.goto('https://www.saucedemo.com/')
    
    //using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')

    //using xpath
    await page.locator('//input[@data-test="password"]').fill('secret_sauce')

    //using CCS selector
    await page.locator('#login-button').click()

    //using text
    //await page.locator('text=LOGIN').click()
   // await page.locator('input:has-text("LOGIN")').click()
   // await page.locator('text=LOGIN').click()

   //assertion


})