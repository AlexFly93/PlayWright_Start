import { test, expect } from "@playwright/test";

// npx playwright test --run all tests
// npx playwright test folder/name of file --run all tests from the file
// npx playwright test --grep @myTag --run all tests by the tag
// npx playwright test --grep-invert @myTag --run all tests except those having @myTag
// npx playwright test --config=playwright.config.ts --project=Webkit --runs all tests using presetuped config and appropriate project config (in ex. Webkit browser)
// npx playwright test --config=playwright.config.ts --project=Webkit -

test("Simple page header validation", async ({ page }) => {
  await page.goto("https://www.example.com/");

  const pageHeader = await page.locator("h1");
  await expect(pageHeader).toContainText("Example Domain");
});

test.skip("Selectors", async ({ page }) => {
  //text
  await page.click("text=some text");
  //css-selector
  await page.click("button");
  await page.click("#id");
  await page.click(".class");
  //only visible css-selector
  await page.click(".submit-button:visible");
  //combinations
  await page.click("#username .first");
  //XPath
  await page.click("//button");
});

//Домашка: DOM - прочесть/понять
//Тест на екземпл.ком - 5шт
test("Redirect to 'more information' page(1)", async ({ page }) => {
  await page.goto("https://www.example.com/");
  await page.click("body > div:nth-child(1) > p:nth-child(3) > a");

  await expect(page).toHaveURL("https://www.iana.org/help/example-domains");
});

// test("Redirect to 'more information' page(2)", async ({ page }) => {
//   await page.goto("https://www.example.com/");
//   await page.click("body > div:nth-child(1) > p:nth-child(3) > a");

// await expect(page).('#logo')
// });

test("Redirect to 'more information' page(3)", async ({ page }) => {
  await page.goto("https://www.example.com/");
  await page.click("body > div:nth-child(1) > p:nth-child(3) > a");

  const newUrl = page.url();
  expect(newUrl).toBe("https://www.iana.org/help/example-domains");
});

test.only("Redirect to 'more information' page(4)", async ({ page }) => {
  await page.goto("https://www.example.com/");
  await page.click("body > div:nth-child(1) > p:nth-child(3) > a");

  await page.waitForNavigation();

  const newUrl = page.url();
  expect(newUrl).toContain("help");
});

test("Redirect to 'more information' page(5)", async ({ page }) => {
  await page.goto("https://www.example.com/");
  await page.click("body > div:nth-child(1) > p:nth-child(3) > a");

  const newUrl = page.url();
  expect(newUrl).toMatch(/example-domains/);
});

//проверить в гите привязан ли ссаш ключ
//найти ССАШ ключ на компе
//если этого всего нет - сгенерить ключ и привязать комп

//создать новый репозиторий в гитхабе
//привязать к моему проекту где я пишу тесты
//нужно создать ветку, запушить в нее изменения
//

