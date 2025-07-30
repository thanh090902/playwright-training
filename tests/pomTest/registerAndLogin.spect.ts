import { test, expect } from "@playwright/test";
import HomePage from "../../pages/homepage";
import RegisterPage from "../../pages/registerPage";
import LoginPage from "../../pages/loginPage";




test("Register test_01", async ({ page, baseURL }) => {
    const registerPage = new RegisterPage(page);

    // 1. Navigate to the register page
    await page.goto(`${baseURL}route=account/register`);

    // 2. Fill in the first name, last name, email, telephone, password, confirm password
    await registerPage.enterFirstName("Thanh");
    await registerPage.enterLastName("Thai");
    await registerPage.enterEmail("thanhthai01@gmail.com");
    await registerPage.enterTelephone("0123456789");
    await registerPage.enterPassword("12345678");
    await registerPage.enterConfirmPassword("12345678");

    // 3. Click not subscribe to newsletter
    expect(registerPage.isSubscribeChecked()).toBeChecked();

    // 4. Click on the terms and conditions checkbox
    await registerPage.clickTermandConditon();

    // 5. Click on the continue button
    await registerPage.clickContinueToRegister();

    // 6. Verify the success message
    const successMessage = await registerPage.getSuccessMessage();
    await expect(successMessage).toContainText("Your Account Has Been Created!");
})



test("Login test_02", async ({ page, baseURL }) => {

    const loginPage = new LoginPage(page);

    // 1. Navigate to the login page
    await page.goto(`${baseURL}route=account/login`);

    // 2. Fill in the email and password 
    await loginPage.enterEmail("thanhthai01@gmail.com");
    await loginPage.enterLoginPassword("12345678");
    
    // 3. Click on the login button
    await loginPage.clickLoginBtn();
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the login process completes
})