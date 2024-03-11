import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  retries: 1,
  testDir: "tests/e2e",
  workers: 2,
  fullyParallel: true,
  reporter: "html",
  timeout: 60000,
  use: {
    // Здесь вы можете настроить общие параметры для всех проектов
    viewport: { width: 1366, height: 768 },
    headless: true,
    screenshot: "only-on-failure",
    video: "off",
    ignoreHTTPSErrors: true,
    actionTimeout: 10000,
  },
  projects: [
    {
      name: "chrome",
      use: { browserName: "chromium" },
    },
    {
      name: "firefox",
      use: { browserName: "firefox" },
    },
  ],
};

export default config;
