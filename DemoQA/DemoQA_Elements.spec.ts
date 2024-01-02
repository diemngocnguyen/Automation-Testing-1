import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://demoqa.com/elements')
})


////Text Box

//Verify the output after clicking con Submit button => Display the output below

