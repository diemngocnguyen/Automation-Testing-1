import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://demoqa.com/elements')
})


////Text Box

//Verify the output after clicking con Submit button => Display the output with exact value below
test ('@Textbox', async ({page}) => {
    await page.locator('//span[contains(text(),"Text Box")]').click()
    await page.locator('//input[@id="userName"]').fill("Nguyen Van A")
    //await page.locator('//input[@id="userEmail"]').fill("A@gmail.com")
    await page.locator('//button[@id="submit"]').click()
    await expect (await page.locator('//div[@id="output"]')).toContainText("Name:Nguyen Van A")
    
});


////Check Box
//Verify the checkbox when clicking on it => Checkbox is checked
test ('@Checkbox', async ({page}) => {
    const ParentCheckbox = await page.locator('//span[@class="rct-checkbox"]')
    await page.locator('//span[contains(text(),"Check Box")]').click()
    await ParentCheckbox.check()
    await expect (ParentCheckbox).toBeChecked()
    
});

////Radio Button
//Verify the radio button when clicking on it => Is checked
test ('@Radio button', async ({page}) => {
    const Yesoption = page.locator('//input[@id="yesRadio"]')
    await page.locator('//span[contains(text(),"Radio Button")]').click()
    await Yesoption.check({force: true})
    await expect (Yesoption).toBeChecked()

// Verify the Yes option will not be checked after checking Impressive Option
    const Impressiveoption = page.locator('//input[@id="impressiveRadio"]')
    await Impressiveoption.check({force: true})
    await expect (await Impressiveoption.isChecked()).toBeTruthy
    await expect (await Yesoption.isChecked()).toBeFalsy

//Verify the No option is disabble
    const Nooption = page.locator('//input[@id="noRadio"]')
    await expect (Nooption).toBeDisabled()

//Verify display the "You have selected Yes" when checking Yes option
    await Yesoption.check({force: true})
    await expect (await page.locator('//p[@class="mt-3"] ')).toContainText("You have selected Yes")
    await Impressiveoption.check({force: true})
    await expect (await page.locator('//p[@class="mt-3"] ')).toContainText("You have selected Impressive")
});


////Web Tables
test ('Web table', async ({page}) => {
await page.locator('//span[contains(text(),"Web Tables")]').click()
//Verify the Add button when clicking on it
//Verify the Registration Form when clicking on Add button
const FirstName = await page.locator('//input[@id="firstName"]')
const LastName = await page.locator('//input[@id="lastName"]')
const Email = await page.locator('//input[@id="userEmail"]')
const Age = await page.locator('//input[@id="age"]')
const Salary = await page.locator('//input[@id="salary"]')
const Department = await page.locator('//input[@id="department"]')
await page.locator('//button[@id="addNewRecordButton"]').click()
await expect (await page.locator('//div[@class="modal-content"]')).toBeVisible()
await expect (FirstName).toBeVisible()
await expect (LastName).toBeVisible()
await expect (Email).toBeVisible()
await expect (Age).toBeVisible()
await expect (Salary).toBeVisible()
await expect (Department).toBeVisible()
//Verify the close icon of Registration form
await page.locator('//button[@class="close"]').click()
//Verify display the new value on the table after registering
// await FirstName.fill("Mai")
// await LastName.fill("Le")
// await Email.fill("maile@g.com")
// await Age.fill("25")
// await Salary.fill("1500")
// await Department.fill("Dev")
// await page.locator('//button[@id="submit"]').click()
// await expect 

//Verify the Register form when clicking on Edit icon
await page.locator('//span[@id="edit-record-1"]').click()
await expect (FirstName).toHaveText("Cierra")
await expect (LastName).toHaveText("Vega")
await expect (Email).toHaveText("cierra@example.com")
await expect (Age).toHaveText("39")
await expect (Salary).toHaveText("10000")
await expect (Department).toHaveText("Insurance")




});

////Buttons
test ('@Buttons', async ({page}) => {
    await page.locator('//span[contains(text(),"Buttons")]').click()
//Verify the message after clicking on each button
    const DoubleClickMeButton = await page.locator('//button[@id="doubleClickBtn"]')
    const RightClickMeButton = await page.locator('//button[@id="rightClickBtn"]')
    const ClickMeButton = await page.locator('//div[@class="mt-4"] //button[text() = "Click Me"] ')
    
    await DoubleClickMeButton.dblclick()
    await expect (await page.locator('//p[@id="doubleClickMessage"]')).toContainText("You have done a double click")
    
    await RightClickMeButton.click({button: 'right'})
    await expect (await page.locator('//p[@id="rightClickMessage"]')).toContainText("You have done a right click")
    
    await ClickMeButton.click({button: 'left'})
    await expect(await page.locator('//p[@id="dynamicClickMessage"]')).toContainText("You have done a dynamic click")

//Verify the value when clicking on its delete icon
    await page.locator('//span[@id="delete-record-3"]').click()
    await expect 


});



