import {test, expect} from '@playwright/test';  

test('Alert Test', async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

  page.on("dialog", async (alert) => {
    const msg = alert.message();
    console.log(msg);
    await alert.accept("ThanhThai");
  })

  await page.locator("//button[.='Click Me']").nth(2).click();
  await page.waitForTimeout(2000)

  await expect(page.locator("//p[@id='prompt-demo']")).toContainText("ThanhThai");
  await page.waitForTimeout(4000)
  
});