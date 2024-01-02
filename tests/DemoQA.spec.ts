import {test, expect} from '@playwright/test'
import { beforeEach } from 'node:test'



//Verify the web when clicking on header => still in the web
test ('@Header', async ({page}) => {
    await page.goto('https://demoqa.com/')
    
})

test('@New User', async ({page}) => {
    await page.goto('https://demoqa.com/login')
    // await page.locator('//h5[contains(.,"Elements")]').click()
    // await page.locator('//span[contains(.,"Book Store Application")]').click()
    // await page.locator('//li[@id="item-0"]').click()
    await page.locator('//button[@id="newUser"]').click()
    await page.locator('//input[@id="firstname"]').fill('Nam')
    await page.locator('//input[@id="lastname"]').fill('Nguyen')
    await page.locator('//input[@id="userName"]').fill('namnguyen@')
    await page.locator('//input[@id="password"]').fill('1234567')
    // await page.locator('//div[@id="rc-anchor-container"]').click()
    await page.locator('//button[@id="register"]').click()

})


test ('@Login', async ({page}) => {
    await page.goto('https://demoqa.com/login')
    await page.locator('//input[@id="userName"]').fill('namnguyen@')
    await page.locator('//input[@id="password"]').fill('Abc123456@')
    await page.locator('//button[@id="login"]').click()

})


test ('@Checkboxes', async ({page}) => {
    await page.locator('//h5[contains(.,"Elements")]').click()
    await page.locator('//span[contains(text(),"Check Box")]').click()




})


test ('@Web table', async ({page}) => {
    await page.goto('https://demoqa.com/webtables')
    await page.locator('//input[@aria-label="jump to page"]').fill('0');
})