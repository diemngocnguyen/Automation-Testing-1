import {test, expect} from '@playwright/test'

test ('Sign-in  @practice', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    
    await page.locator('//input[@id="username"]').fill('rahulshettyacademy1')
    await page.locator('//input[@id="password"]').fill('learning')
    await page.locator('//input[@value="user"]').click()
    await page.locator('//button[@id="okayBtn"]').click()   
    //check if User radio button is selected or not
    expect(page.locator('//input[@value="user"]')).toBeChecked()
    await page.locator('//span[contains(text(),"I Agree to the ")]').click()
    expect(page.locator('//span[contains(text(),"I Agree to the ")]')).toBeChecked()
    await page.locator("//select[@data-style='btn-info']").click()  
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    //const dropdown = page.locator('//select[@class="form-control"]')
    //await dropdown.selectOption("consult")
    await page.locator('//input[@id="signInBtn"]').click()

    const documentLink = page.locator('//a[(text()="Free Access to InterviewQues/ResumeAssistance/Material")]')
    await expect(documentLink).toHaveAttribute("class","blinkingText")
})


//Handle Child Windows & Tabs
test ('@DocumentLink', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const documentLink = page.locator('//a[(text()="Free Access to InterviewQues/ResumeAssistance/Material")]')

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ])

    const text = await newPage.locator('//p[@class="im-para red"]').textContent()
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ") [0]
    console.log(domain)
    await page.locator("#username").type(domain)
    await page.pause()
    console.log(await page.locator("#username").textContent())










})























