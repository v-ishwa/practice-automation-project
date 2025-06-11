import { test, expect } from "@playwright/test";

import { login } from "./utils.js";

test("Login with valid credentials", async ({ page }) => {
  await login(page);
  await expect(page).toHaveURL(/logged-in-successfully/);
});
