import { devices, type PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout:80000,
 /* projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"] }

    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] }
    }
  ],*/
  testMatch: ["tests/pw101.test.ts"],
  use: {
    browserName:'chromium',
    headless: false,
    screenshot: "off",
    video: "off"
  },
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "always" //to open the report always after the script execution
  }]]
};

export default config;

/*import { defineConfig } from '@playwright/test';

const LT_USERNAME = process.env.LT_USERNAME || 'kddeeps';
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || 'LT_opNgaK6DmFHhSlf8PxPk8QmYPsKYbKYdkGVDzHtd9nZlxX5Y';

export default defineConfig({
  timeout: 60000,
  use: {
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
  },
  projects: [
    {
      name: 'Chromium on LambdaTest',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        launchOptions: {
          args: [],
        },
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
            browserName: 'Chrome',
            browserVersion: 'latest',
            platform: 'Windows 10',
            username: LT_USERNAME,
            accessKey: LT_ACCESS_KEY,
            build: 'Playwright Parallel Browsers',
            name: 'Chrome Test',
          }))}`,
        },
      },
    },
    {
      name: 'Firefox on LambdaTest',
      use: {
        browserName: 'firefox',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
            browserName: 'Firefox',
            browserVersion: 'latest',
            platform: 'Windows 10',
            username: LT_USERNAME,
            accessKey: LT_ACCESS_KEY,
            build: 'Playwright Parallel Browsers',
            name: 'Firefox Test',
          }))}`,
        },
      },
    },
  ],
});
*/
