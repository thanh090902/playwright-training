import {test, expect} from '@playwright/test';  

test('drop down test', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("//select[@id='select-demo']",{
        // label: "Tuesday"
         value: "Monday"
        // index: 3
    })

    await page.waitForTimeout(4000)
    await expect(page.locator("//p[@class='selected-value text-size-14']")).toContainText("Monday");

    await page.locator("//select[@id='multi-select']").scrollIntoViewIfNeeded();

    await page.selectOption("//select[@id='multi-select']",[
    
    
    {label:"New Jersey"}, {value:"Ohio"},{index:6}

]

)

await page.waitForTimeout(4000)


} )