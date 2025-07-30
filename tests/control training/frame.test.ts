import { test } from "@playwright/test";

test('Frame Test', async ({ page }) => {

    // Navigate to the page with frames
    await page.goto("https://letcode.in/frame");

    // Wait for the frame to load
    const frame = page.frameLocator("//iframe[@id='firstFr']");

    // Interact with the frame
    await frame.locator("//input[@name='fname']").fill("Thai");
    await frame.locator("//input[@name='lname']").fill("Thanh");

    // Wait to observe
    await page.waitForTimeout(5000);

    // Interact with inner frame
    const innerFrame = frame.frameLocator("//iframe[@src='innerframe']");
    await innerFrame.locator("//input[@name='email']").fill("thanhthai@gmail.com");
});
