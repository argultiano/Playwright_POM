import { test, expect } from '@playwright/test';

test ('Assertions  Test Demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')


    await page.locator('id=user-name').fill('standard_user')
    await page.locator('//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await page.waitForURL('https://www.saucedemo.com/inventory.html')

    //await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('//button[@id="react-burger-menu-btn"]').click()
    await page.locator('[data-test="logout-sidebar-link"]').click();



})

test.only ('Assertions  Test Demo 2', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    //await page.pause()

    //Assertions
    await expect (page.locator('text=The Kitchen')).toHaveCount(1)
    //checking the element hidden or visible
    await expect (page.locator('text=The Kitchen')).toBeVisible()
   // await expect.soft (page.locator('text=The Kitchen')).toBeHidden()

    //checking the element enabled or disabled
    await expect (page.locator('text=The Kitchen')).toBeEnabled()
   // await expect.soft (page.locator('text=The Kitchen')).toBeDisabled()
    
    //check text
    await expect (page.locator('text=The Kitchen')).toHaveText('The Kitchen')
   // await expect.soft (page.locator('text=The Kitchen')).not.toHaveText('The Kitchen')
    
    //check attribute value
    await expect (page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect (page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect (page.locator('text=The Kitchen')).toHaveAttribute('class', /chakra-heading.*/)

    await expect (page.locator('text=Alert')).toHaveAttribute('class', 'chakra-heading css-zey6tx')

    await expect (page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a')
    await expect (page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //check page URL and Title
    await expect(page).toHaveURL(/kitchen.applitools.com/)
    await expect(page).toHaveTitle(/.*Kitchen/)
    await expect(page).toHaveTitle('The Kitchen')

    await page.pause()

    //Visual Validation with screenshot

    await expect(page).toHaveScreenshot()
})