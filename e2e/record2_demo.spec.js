import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('record demo 2', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_login_button').click();

  // ---------------------
  await context.close();
  await browser.close();
});