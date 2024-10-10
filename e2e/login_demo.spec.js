import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/login'

test('Login Test', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')

    // await page.goto('https://www.saucedemo.com/')
    // await page.locator('id=user-name').fill('standard_user')
    // await page.locator('//input[@data-test="password"]').fill('secret_sauce')
    // await page.locator('#login-button').click()
    // await page.waitForURL('https://www.saucedemo.com/inventory.html')

    //await page.getByRole('button', { name: 'Open Menu' }).click();
    // await page.locator('//button[@id="react-burger-menu-btn"]').click()
    // await page.locator('[data-test="logout-sidebar-link"]').click();
})


