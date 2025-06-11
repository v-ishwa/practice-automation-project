import { test, expect } from "@playwright/test";

import { login } from "./utils";

test("Navigate to different pages", async ({ page }) => {
  await login(page);
  await page.getByText("Courses").click();
  await expect(page).toHaveURL(/courses/);
  await expect(page.locator(".post-title")).toContainText("Courses");
});
