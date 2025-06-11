import { test, expect } from "@playwright/test";

const loginUrl = "https://practicetestautomation.com/practice-test-login/";

test.describe("Negative Login Tests", () => {
  test("Login with invalid credentials", async ({ page }) => {
    await page.goto(loginUrl);

    await page.locator("#username").fill("student");
    await page.locator("#password").fill("wrongpass");
    await page.locator("#submit").click();

    await expect(page.locator("#error")).toContainText(
      "Your password is invalid!"
    ); // failed - a bug
  });

  test("Login with empty username and password", async ({ page }) => {
    await page.goto(loginUrl);

    await page.locator("#submit").click();

    await expect(page.locator("#error")).toBeVisible();
    await expect(page.locator("#error")).toContainText(
      "Username and Password shouldn't be empty"
    );
  }); // failed - a bug

  test("Login with special characters", async ({ page }) => {
    await page.goto(loginUrl);

    await page.locator("#username").fill("@@@###");
    await page.locator("#password").fill("$$$%%%");
    await page.locator("#submit").click();

    await expect(page.locator("#error")).toBeVisible();
    await expect(page.locator("#error")).toContainText(
      "No special characters are allowed"
    );
  });  // failed - a bug
});
