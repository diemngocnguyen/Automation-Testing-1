import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://www.google.com/')
})

//INPUT FIELDS
test.describe('Form Layouts page', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Form').click()
        await page.getByText('Form Layouts').click()
    })

    test('input fields', async({page}) => {
        const usingTheGridEmailInput = page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:"Email"})
        
        await usingTheGridEmailInput.fill('test@test.com')
        await usingTheGridEmailInput.clear() //clear the input
        await usingTheGridEmailInput.pressSequentially('test2@test.com', {delay:500})//fill out the input field (same as fill) and make it slow

        //genetic assertion
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect (inputValue).toEqual('test2@test.com')

        //locator assertion
        await expect(usingTheGridEmailInput).toHaveValue('test2@test.com')
    })
})

//RADIO BUTTONS
    test ('radio buttons', async({page}) => {
        const usingTheGridForm = page.locator('nb-card', {hasText:"Using the Grid"})
        
        //await usingTheGridForm.getByLabel('Option 1')
        await usingTheGridForm.getByRole('radio', {name:"Option 1"}).check()
        await usingTheGridForm.getByRole('radio', {name:"Option 1"}).check({force: true}) //using command force to bypass playwright
        const radioStatus = await usingTheGridForm.getByRole('radio', {name:"Option 1"}).isChecked()
        expect(radioStatus).toBeTruthy()
        await expect(await usingTheGridForm.getByRole('radio', {name:"Option 1"})).toBeChecked()
        
        //Verify the Option 1 will not be checked after checking Option 2
        await usingTheGridForm.getByRole('radio', {name:"Option 2"}).check()
        expect(await usingTheGridForm.getByRole('radio', {name:"Option 1"}).isChecked()).toBeFalsy()
        expect(await usingTheGridForm.getByRole('radio', {name:"Option 2"}).isChecked()).toBeTruthy()

    })


//CHECKBOXES
test ('Checkboxes', async({page}) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    await page.getByRole('checkbox', {name: "Hide on click"}).check({force: true})
    await page.getByRole('checkbox', {name: "Show toát with icon"}).uncheck({force: true})

    //Select/ Unselect all checkboxes
    const allBoxes = page.getByRole('checkbox')
    for(const box of await allBoxes.all()) { //".all" will create an array to loop through the elements
        await box.check({force: true})
        expect(await box.isChecked()).toBeTruthy()
    }
})


//LISTS AND DROPDOWNS
test ('Lists and Dropdowns', async({page}) => {
    const dropDownMenu = page.locator ('ngx-header nb-select')
    await dropDownMenu.click()

    //get the list or listitem
    page.getByRole('list') //when the list has a UL tag
    page.getByRole('listitem') //when the list has a LI tag

    //const optionList = page.getByRole('list').locator('nb-option') 
    const optionList = page.locator('nb-option-list nb-option')
    await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])
    await optionList.filter({hasText: "Cosmic"}).click()
    const header = page.locator ('nb-layout-header')
    await expect (header).toHaveCSS('background-color', 'rgb(50, 50, 89)')

    const colors = {
        "Light": "rbg(255, 255, 255)",
        "Dark": "rbg(34, 43, 69)",
        "Cosmic": "rbg(50, 50, 89)",
        "Corporate": "rbg(255, 255, 255)"
    }
    await dropDownMenu.click()
    for(const color in colors) {
        await optionList.filter({hasText: color}).click()
        await expect(header).toHaveCSS('background-color', colors[color])
        if(color != "Corporate")
            await dropDownMenu.click()
    }
})


//TOOLTIPS
test('Tooltips', async ({page}) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()

    const toolTipCard = page.locator('nb-card', {hasText: "Tooltip Placements"})
    await toolTipCard.getByRole('button', {name:"Top"}).hover()

    page.getByRole('tooltip') //if you have a role tooltip created
    const tooltip = await page.locator('nb-tooltip').textContent()
    expect(tooltip).toEqual('This is a tooltip')
})


//DIALOG BOXES
test ('dialog box', async({page}) => {
    await page.getByText('Table & Data').click()
    await page.getByText('Smart Table').click()

    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Are you sure you want to delete?')
        dialog.accept()
    })

    await page.getByRole('table').locator('tr', {hasText: "mdo@gmail.com"}).locator('.nb-trash').click()
    await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')
})


//WEB TABLES
test ('web table', async({page}) => {
    await page.getByText('Table & Data').click()
    await page.getByText('Smart Table').click()

    //1 Get the row by any test in this row
    const targetRow = page.getByRole('row', {name: "twitter@outlook.com"})
    await targetRow.locator('nb-edit').click()
    await page.locator('input-editor').getByPlaceholder('Age').clear()
    await page.locator('input-editor').getByPlaceholder('Age').fill('35')
    await page.locator('.nb-checkmark').click()

    //2 get the row based on the value in the specific column

})
















