import { test,chromium } from "@playwright/test";

test('Login test demo meo meo', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(); 
    const page = await context.newPage();
    // Navigate to the login page
    await page.goto('https://testarchitect-training-website-pi.vercel.app/login');
    await page.hover("//input[contains(@class,'w-full pl-12 pr-4')]");
    await page.fill("//input[contains(@class,'w-full pl-12 pr-4')]", "admin.test1@testarchitect.com");
    await page.fill("//input[contains(@class,'w-full pl-12 pr-12')]", "Admin123");
    await page.click("//button[contains(@class,'w-full bg-blue-600')]");


    // Wait for navigation to the dashboard or home page
    await page.waitForTimeout(10000); // Adjust the timeout as needed


    const newContext = await browser.newContext();
    const page2 = await context.newPage();
    await page2.goto('https://testarchitect-training-website-pi.vercel.app/dashboard');
    await page2.waitForTimeout(10000); // Adjust the timeout as needed
});