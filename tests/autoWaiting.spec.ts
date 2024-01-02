import {test, expect} from '@playwright/test'

test.beforeEach(async({page}, testInfor) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
    testInfor.setTimeout(testInfor.timeout + 2000) //existing default time value and increase
})

test ('auto-waiting', async ({page}) => {
    const successButton = page.locator('.bg-success')

    //waiting for this button to be available to interact
    await successButton.click() 

    //waiting for this button to be available to interact
    const text = await successButton.textContent() 
    expect(text).toEqual('Data loaded with AJAX get request.')

    //All text content didn't wait =>
    await successButton.waitFor({state: "attached"})
    const text1 = await successButton.allTextContents() 
    expect(text1).toContain('Data loaded with AJAX get request.') 

    //Fail bc this element was not visible within this timeout => add {timeout:20000}
    await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout:20000})
})

test('alternative waits', async({page}) => {
    const successButton = page.locator('.bg-success')

    //wait for element
    await page.waitForSelector('.bg-success')

    //wait for particular response (not recommended, but sometimes useful)
    await page.waitForResponse('http://uitestingplayground.com/ajaxdata')


    const text = await successButton.allTextContents()
    expect (text).toContain('Data loaded with AJAX get request.')
})


test('timeout', async({page}) => {
    //test.setTimeout(10000)
    test.slow() //increase the default timeout in 3 times
    const successButton = page.locator('.bg-success')
    await successButton.click()  
})










