import test from '@playwright/test'

test ('Browser Context Playwright test  @test', async ({browser})=>
{
    //chrome - plugins/ cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});


test ('Page Playwright test', async ({page})=>
{
    //chrome - plugins/ cookies
   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});
