import { test, expect } from "@playwright/test";

test.describe("Login/Logout flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/");
  });

  test("negative scenario for login", async ({ page }) => {
    await page.click("#signin_button");
    await page.fill("#user_login", "userhuser");
    await page.fill("#user_password", "huyasword");
    await page.click("text=Sign in");

    const errorMessage = await page.locator(".alert-error");
    await expect(errorMessage).toContainText(
      "Login and/or password are wrong."
    );
  });
  //сделать позитивный сценарий для логина+логаута
  //ссылка для логаута http://zero.webappsecurity.com/logout.html
  test("Positive scenario for login", async ({ page }) => {
    await page.click("#signin_button");
    await page.fill("#user_login", "username");
    await page.fill("#user_password", "password");
    await page.click("text=Sign in");
    await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html");

    const element = await page.locator(".dropdown-toggle");
    await expect(element).toBeVisible();
  });
  test("Positive scenario for logout", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/logout.html");

    const signIn = await page.locator("#signin_button");
    await expect(signIn).toBeVisible();
  });
});
