export async function login(page) {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("#username").fill("student");
  await page.locator("#password").fill("Password123");
  await page.getByRole("button", { name: "Submit" }).click();
}
