import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://demoqa.com/elements')
})


//Test Scenario 1:Check the Text Box Functionality
//1. Check the output when entering Full Name only
//2. Check the output when entering Email only
//3. Check the output when entering Current Address only
//4. Check the output when entering Permanent Address only
//5. Check the output when entering both Full Name, Email, Current Address and Permanent Address



//1. Check the output when entering Full Name only
test ('@Check the output when entering Full Name only', async ({page}) => {
    await page.locator('//span[contains(text(),"Text Box")]').click()
    await page.locator('//input[@id="userName"]').fill("Nguyen Van A")
    await page.locator('//button[@id="submit"]').click()
    await expect (await page.locator('//div[@id="output"]')).toContainText("Name:Nguyen Van A")
    await page.locator('//input[@id="userName"]').clear()
});

//2. Check the output when entering Email only
test ('@Check the output when entering Email only', async ({page}) => {
    await page.locator('//span[contains(text(),"Text Box")]').click()
    await page.locator('//input[@id="userEmail"]').fill("a@gmail.com")
    await page.locator('//button[@id="submit"]').click()
    await expect (await page.locator('//div[@id="output"]')).toContainText("Email:a@gmail.com")
    await page.locator('//input[@id="userEmail"]').clear()
});

//3. Check the output when entering Current Address only
test ('@Check the output when entering Current Address only', async ({page}) => {
    await page.locator('//span[contains(text(),"Text Box")]').click()
    await page.locator('//input[@id="currentAddress"]').fill("Da Nang")
    await page.locator('//button[@id="submit"]').click()
    await expect (await page.locator('//div[@id="output"]')).toContainText("Current Address :Da Nang")
    await page.locator('//input[@id="currentAddress"]').clear()
});

//4. Check the output when entering Permanent Address only
test ('@Check the output when entering Permanent Address only', async ({page}) => {
    await page.locator('//span[contains(text(),"Text Box")]').click()
    await page.locator('//input[@id="permanentAddress"]').fill("Ha Noi")
    await page.locator('//button[@id="submit"]').click()
    await expect (await page.locator('//div[@id="output"]')).toContainText("Permananet Address :Ha Noi")
    await page.locator('//input[@id="permanentAddress"]').clear()
});

//5. Check the output when entering both Full Name, Email, Current Address and Permanent Address
test ('@Check the output when entering both Full Name, Email, Current Address and Permanent Address', async ({page}) => {
    await page.locator('//span[contains(text(),"Text Box")]').click()
    await page.locator('//input[@id="userName"]').fill("Nguyen Van A")
    await page.locator('//input[@id="userEmail"]').fill("a@gmail.com")
    await page.locator('//input[@id="currentAddress"]').fill("Da Nang")
    await page.locator('//input[@id="permanentAddress"]').fill("Ha Noi")
    await page.locator('//button[@id="submit"]').click()
    await expect (await page.locator('//div[@id="output"]')).toContainText("Name:Nguyen Van A Email:a@gmail.com Current Address :Da Nang Permananet Address :Ha Noi")

});



//Test Scenario 2: Check the Radio Button Functionality
//1. Check the Radio button when clicking on it
//2. Check the output when checking Yes option
//3. Check the output when checking Impressive option
//4. Check the Yes option after checking Impressive option
//5. Check the Impressive option after checking Yes option
//6. Check the disability of No option


//1. Check the Radio button when clicking on it
test ('@Check the Radio button when clicking on it', async ({page}) => {
    const Yesoption = page.locator('//input[@id="yesRadio"]')
    await page.locator('//span[contains(text(),"Radio Button")]').click()
    await Yesoption.check({force: true})
    await expect (Yesoption).toBeChecked()
});

//2. Check the output when checking Yes option
test ('@Check the output when checking Yes option', async ({page}) => {
    const Yesoption = page.locator('//input[@id="yesRadio"]')
    const Impressiveoption = page.locator('//input[@id="impressiveRadio"]')
    await page.locator('//span[contains(text(),"Radio Button")]').click()
    await Yesoption.check({force: true})
    await expect (await page.locator('//p[@class="mt-3"] ')).toContainText("You have selected Yes")
    await Impressiveoption.check({force: true})
    await expect (await page.locator('//p[@class="mt-3"] ')).toContainText("You have selected Impressive")
});

//3. Check the output when checking Impressive option
test ('@Check the output when checking Impressive option', async ({page}) => {
    const Yesoption = page.locator('//input[@id="yesRadio"]')
    const Impressiveoption = page.locator('//input[@id="impressiveRadio"]')
    await page.locator('//span[contains(text(),"Radio Button")]').click()
    await Impressiveoption.check({force: true})
    await expect (await page.locator('//p[@class="mt-3"] ')).toContainText("You have selected Impressive")
});

//4. Check the Yes option after checking Impressive option
test ('@Check the Yes option after checking Impressive option', async ({page}) => {
    const Yesoption = page.locator('//input[@id="yesRadio"]')
    const Impressiveoption = page.locator('//input[@id="impressiveRadio"]')
    await page.locator('//span[contains(text(),"Radio Button")]').click()
    await Impressiveoption.check({force: true})
    await expect (await Impressiveoption.isChecked()).toBeTruthy
    await expect (await Yesoption.isChecked()).toBeFalsy
});


//5. Check the Impressive option after checking Yes option
test ('@Check the Impressive option after checking Yes option', async ({page}) => {
    const Yesoption = page.locator('//input[@id="yesRadio"]')
    const Impressiveoption = page.locator('//input[@id="impressiveRadio"]')
    await page.locator('//span[contains(text(),"Radio Button")]').click()
    await Yesoption.check({force: true})
    await expect (await Yesoption.isChecked()).toBeTruthy
    await expect (await Impressiveoption.isChecked()).toBeFalsy
});


//6. Check the disability of No option
test ('@Check the disability of No option', async ({page}) => {
    const Nooption = page.locator('//input[@id="noRadio"]')
    await page.locator('//span[contains(text(),"Radio Button")]').click()
    await expect (Nooption).toBeDisabled()
});



//Test Scenario 3: Check the Buttons Functionality
//1. Check the output when double clicking on "Double Click Me" button
//2. Check the output when right clicking on "Double Click Me" button
//3. Check the output when clicking on "Double Click Me" button
//4. Check the output when double clicking on "Right Click Me" button
//5. Check the output when righ clicking on "Right Click Me" button
//6. Check the output when clicking on "Right Click Me" button
//7. Check the output when double clicking on "Click Me" button
//8. Check the output when right clicking on "Click Me" button
//9. Check the output when clicking on "Click Me" button

//1. Check the output when double clicking on "Double Click Me" button
test ('@Check the output when double clicking on "Double Click Me" button', async ({page}) => {
    const DoubleClickMeButton = await page.locator('//button[@id="doubleClickBtn"]')
    await page.locator('//span[contains(text(),"Buttons")]').click()
    await DoubleClickMeButton.dblclick()
    await expect (await page.locator('//p[@id="doubleClickMessage"]')).toContainText("You have done a double click")
});

//2. Check the output when right clicking on "Double Click Me" button
test ('@Check the output when right clicking on "Double Click Me" button', async ({page}) => {
    const DoubleClickMeButton = await page.locator('//button[@id="doubleClickBtn"]')
    await page.locator('//span[contains(text(),"Buttons")]').click()
    await DoubleClickMeButton.click({button: 'right'})
    await expect (await page.locator('//div[@class="col-12 mt-4 col-md-6"]')).not.toContainText("You have done a double click")

});

//3. Check the output when clicking on "Double Click Me" button
test ('@Check the output when clicking on "Double Click Me" button', async ({page}) => {
    const DoubleClickMeButton = await page.locator('//button[@id="doubleClickBtn"]')
    await page.locator('//span[contains(text(),"Buttons")]').click()
    await DoubleClickMeButton.click()
    await expect (await page.locator('//div[@class="col-12 mt-4 col-md-6"]')).not.toContainText("You have done a double click")

});

//4. Check the output when double clicking on "Right Click Me" button
test ('@Check the output when double clicking on "Right Click Me" button', async ({page}) => {
    const RightClickMeButton = await page.locator('//button[@id="rightClickBtn"]')
    await page.locator('//span[contains(text(),"Buttons")]').click()
    await RightClickMeButton.dblclick()
    await expect (await page.locator('//div[@class="col-12 mt-4 col-md-6"]')).not.toContainText("You have done a right click")

});

//5. Check the output when righ clicking on "Right Click Me" button
test ('@BCheck the output when righ clicking on "Right Click Me" button', async ({page}) => {
    const RightClickMeButton = await page.locator('//button[@id="rightClickBtn"]')
    await page.locator('//span[contains(text(),"Buttons")]').click()
    await RightClickMeButton.click({button: 'right'})
    await expect (await page.locator('//p[@id="rightClickMessage"]')).toContainText("You have done a right click")
    
});

//6. Check the output when clicking on "Right Click Me" button
test ('@Check the output when clicking on "Right Click Me" button', async ({page}) => {
    const RightClickMeButton = await page.locator('//button[@id="rightClickBtn"]')
    await page.locator('//span[contains(text(),"Buttons")]').click()
    await RightClickMeButton.click()
    await expect (await page.locator('//div[@class="col-12 mt-4 col-md-6"]')).not.toContainText("You have done a right click")

});

//7. Check the output when double clicking on "Click Me" button
test ('@Check the output when double clicking on "Click Me" button', async ({page}) => {
    const ClickMeButton = await page.locator('//div[@class="mt-4"] //button[text() = "Click Me"] ')
    await page.locator('//span[contains(text(),"Buttons")]').click()
    await ClickMeButton.dblclick()
    await expect(await page.locator('//div[@class="col-12 mt-4 col-md-6"]')).not.toContainText("You have done a dynamic click")

});

//8. Check the output when right clicking on "Click Me" button
test ('@Check the output when right clicking on "Click Me" button', async ({page}) => {
    const ClickMeButton = await page.locator('//div[@class="mt-4"] //button[text() = "Click Me"] ')
    await page.locator('//span[contains(text(),"Buttons")]').click()
    await ClickMeButton.click({button: 'right'})
    await expect(await page.locator('//div[@class="col-12 mt-4 col-md-6"]')).not.toContainText("You have done a dynamic click")

});

//9. Check the output when clicking on "Click Me" button
test ('@Check the output when clicking on "Click Me" button', async ({page}) => {
    const ClickMeButton = await page.locator('//div[@class="mt-4"] //button[text() = "Click Me"] ')
    await page.locator('//span[contains(text(),"Buttons")]').click()
    await ClickMeButton.click({button: 'left'})
    await expect(await page.locator('//p[@id="dynamicClickMessage"]')).toContainText("You have done a dynamic click")
});


    
    
  


//Test Scenario 4: Check the Check Box Functionality
//1. Check the Check box when checking on it
//2. Check the Check box when unchecking on it


    







////Check Box
//Verify the checkbox when clicking on it => Checkbox is checked
test ('@Checkbox', async ({page}) => {
    const ParentCheckbox = await page.locator('//span[@class="rct-checkbox"]')
    await page.locator('//span[contains(text(),"Check Box")]').click()
    await ParentCheckbox.check()
    await expect (ParentCheckbox).toBeChecked()
    
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











