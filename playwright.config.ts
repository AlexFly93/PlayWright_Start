import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  retries: 2,
  testDir: "./tests",
  workers: 2,
  fullyParallel: true,
  reporter: "html",
  timeout: 3000,
  use: {
    // Здесь вы можете настроить общие параметры для всех проектов
    viewport: { width: 1366, height: 768 },
    headless: false,
    screenshot: "only-on-failure",
    video: "off",
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
