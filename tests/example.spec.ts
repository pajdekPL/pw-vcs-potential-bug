import { test, expect } from "@playwright/test";
import { testUser } from "../src/user.data";
import { log } from "console";

test("has title", async ({ page }) => {
  const userLogin = testUser.login;
  console.log(userLogin);
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
