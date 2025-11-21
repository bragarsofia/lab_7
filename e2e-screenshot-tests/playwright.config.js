import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests', 
  reporter: 'html', 
  use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: 'http://localhost:3000',

        // Collect trace when retrying the failed test.
        trace: 'on-first-retry',

        // Run browser in headless mode.
        headless: true,
    },

  projects: [
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'] },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
  webServer: {
    command: 'npm run start', 
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});