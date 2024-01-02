import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    // await page.getByText('Form').click()
    // await page.getByText('Form Layouts').click()
})


// test('Locator syntax rules', async({page}) => {
//     //by Tag name
//     page.locator('input')

//     //by ID
//     page.locator('#inputEmail1')

//     //by Class value
//     page.locator('.shape-rectangle')

//     //by attribute
//     page.locator('[placeholder="Email"]')

//     //by Class value (full)
//     page.locator('[]')

//     //combine different selectors
//     page.locator('input[placeholder="Email"][nbinput]')

//     //XPath => not recommend
//     page.locator('//*[@id="inputEmail1"]')

//     //by partial text
//     page.locator(':text("Using)')

//     //by exact text match
//     page.locator(':text-is("Using the Grid")')

// })

test ('User facing Locators', async ({page}) => {
    await page.getByRole('textbox', {name:"username"}).click()
    await page.getByLabel('Username:').first().click()
    await page.getByRole('button', {name:"Sign In"}).click()
    await page.getByPlaceholder('').click()
    await page.getByText('').click()
    await page.getByTitle('').click()
   
})

test ('Locating child elements', async({page}) => {
    await page.locator('nb-card nc-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()
    await page.locator('nb-card').getByRole('button',{name: "Sign in"}).first().click()
    await page.locator('nb-card').nth(3).getByRole('button').click()
})


test ('Locating parent element', async ({page}) => {

    //find the nb card locator only for the text using the grid.
    await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).click()

    //find the nb card locator by using allocator (provide unique locator inside of the card (ID: #inputEmail1))
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name:"Email"}).click()

    //providng a second argument into the locator method, filter by text
    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).click()

    //providng a second argument into the locator method, filter by allocator (unique locator)
    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"}).click()

    //providng a second argument into the locator method, filter the output of this locator, filter by text or by locator
    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign in"}).getByRole('textbox', {name:"Email"}).click()

    //using XPath to go one level up to nb card and then find the child element
    await page.locator(':text-is("Using the Grid")').locator('...').getByRole('textbox', {name:"Email"}).click()

})


test ('Reusing the locators', async ({page}) => {
    const basicForm = page.locator ('nb-card'). filter({hasText: "Basic form"})
    const emailField = basicForm.getByRole('textbox', {name: "Email"})

    await emailField.fill('test@test.com')
    await basicForm.getByRole('textbox', {name: "Password"}).fill('Welcome123')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

    await expect(emailField).toHaveValue('test@test.com')
})


test ('extracting values', async({page}) => {
    //single test value
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"})
    const buttonText = await basicForm.locator('button').textContent()
    expect (buttonText).toEqual('Submit')

    //all text values
    const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
    expect(allRadioButtonsLabels).toEqual("Option 1")

    //input value
    const emailField =basicForm.getByRole('textbox', {name: "Email"})
    await emailField.fill('test@test.com')
    const emailValue = await emailField.inputValue() //get the property value of the input field
    expect (emailValue).toEqual('test@test.com')

    //placeholder
    const placeholderValue = await emailField.getAttribute('placeholder') //get the value of any attribute on the web page
    expect (placeholderValue).toEqual('Email')

})


test ('assertions', async ({page}) => {
    const basicFormButton = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button')

    //General assertions
    const value = 5
    expect(value).toEqual(5)

    const text = await basicFormButton.textContent()
    expect(text).toEqual("Submit")

    //Locator assertion
    await expect(basicFormButton).toHaveText('Submit')

    //Soft Assertion
    await expect.soft(basicFormButton).toHaveText('Submit5') //Soft assertion: without stopping the execution of the test upon encountering the first failure
    await basicFormButton.click()
})



























//Group test
// test.describe('Test suite 1', () => {
//     test('The first test', () => {

//     })
//     test('The second test', () => {
        
//     })
//     test('The third test', () => {
        
//     })
//     test('The fouth test', () => {
        
//     })
// })