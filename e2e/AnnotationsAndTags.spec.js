import { test, expect } from '@playwright/test';

test.skip('Test One', async ({ page }) => {

    await page.goto('https://playwright.dev/');

});

test('Not Yet Ready', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    test.fail();
});

test.fixme('TO be Fixed', async ({ page }) => {

    //await page.goto('https://playwright.dev/');
    //test.fail();
});

test ('Test Slow @smoke', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    //test.fail();
    test.slow();
});

test ('Test Fast @fast', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    //test.fail();
    test.slow();
})

test ('Test Login @smoke', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    //test.fail();
    //test.slow();
})