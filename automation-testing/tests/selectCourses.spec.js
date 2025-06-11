import { test, expect } from "@playwright/test";

import { login } from "./utils";

test("Redirects to Udemy after selecting course", async ({ page, context }) => {
  await login(page);

  await page.getByText("Courses").click();
  await expect(page).toHaveURL(/courses/);

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page
      .getByText("Selenium WebDriver: Selenium Automation Testing with Java")
      .click(),
  ]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL(/udemy\.com/);
});
