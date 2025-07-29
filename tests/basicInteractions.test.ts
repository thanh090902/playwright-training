import { test, expect } from '@playwright/test';

test('Basic Interactions Test', async ({ page }) => {

  // Truy cập trang demo của LambdaTest
  await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

  // Lấy ô input theo XPath
  const inputField = page.locator("//input[@id='user-message']");

  // Lấy giá trị hiện tại trước khi nhập
  const valueBefore = await inputField.inputValue();
  console.log("Input Field before: ", valueBefore);

  // Lấy nội dung hiển thị trong thẻ <p> trước khi nhập liệu
  const messageBefore = await page.locator("//p[@id='message']").textContent();
  console.log("Message before: ", messageBefore);

  // Nhập nội dung vào ô input
  await inputField.fill("Hello, Playwright!");

  // Nhấn nút để hiển thị nội dung vừa nhập
  await page.click("//button[.='Get Checked Value']");

  // Tạm dừng 4 giây để quan sát (chỉ dùng để debug)
  await page.waitForTimeout(4000);

  // Lấy nội dung trong thẻ <p> sau khi nhấn nút
  const messageAfter = await page.locator("//p[@id='message']").textContent();
  console.log("Message after: ", messageAfter);

  // Lấy giá trị trong ô input sau khi nhập
  const valueAfter = await inputField.inputValue();
  console.log('Giá trị input after:', valueAfter);

  // Kiểm tra input đã có giá trị đúng như mong muốn
  await expect(inputField).toHaveValue('Hello, Playwright!');
});

test("Sum", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("#sum1")
    const sum2input = page.locator("#sum2")
    const getValuesBtn = page.locator("//button[.='Get Sum']")
    
    let num1 = 121;
    let num2 = 546
    await sum1input.fill("" + num1);
    await sum2input.fill("" + num2);
    await getValuesBtn.click()
    const result = page.locator("//p[@id='addmessage']")
    console.log("result: ",await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult)

});

test.only("Checkbox", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const singleCheckbox = page.locator("//label[contains(.,'Click on check box')]/input")
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
});
