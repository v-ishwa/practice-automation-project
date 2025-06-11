import { test, expect } from "@playwright/test";

import { login } from "./utils.js";

test("Logout", async ({ page }) => {
  await login(page);
  await page.getByRole("link", { name: "Log Out" }).click();
  await expect(page).toHaveURL(/practice-test-login/);
  await expect(page.locator("#username")).toBeVisible();
});
