import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://demoqa.com/elements')
})


////Text Box

//Verify the output after clicking con Submit button => Display the output below
test ('@Textbox', async ({page}) => {
    await page.locator('//input[@id="userName"]').fill("Nguyen Van A")
    //await page.locator('//input[@id="userEmail"]').fill("A@gmail.com")
    await page.locator('//button[@id="submit"]').click()
    expect ('//div[@id="output"]').toContain('//p[@id="name"]')
})






