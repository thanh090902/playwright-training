
// Sample Playwright configuration file
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/pomTest/registerAndLogin.spect.ts"],

  use: {
    headless: false, // Run tests in headful mode
    baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?',
    screenshot: 'only-on-failure', // Take screenshots only on test failure
    video: 'retain-on-failure', // Record video only on test failure
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // retries: 1, // Retry failed tests once
  timeout: 30000, // Set a global timeout of 30 seconds for each test
  reporter: [["dot"],
  ["json", { outputFile: "Test-rs/test-results.json" }],
  ["html", { open: "always" }]
  ],
};

export default config;  
