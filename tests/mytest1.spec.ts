// Import Playwright test runner and assertion library
import { test, expect } from "@playwright/test";

/**
 * Test Suite: Homepage Title Validation
 * Objective: Ensure that the SauceDemo application loads successfully
 *            and displays the correct page title.
 */

test("Verify SauceDemo homepage title is displayed correctly", async ({ page }) => {

    // Step 1: Navigate to the SauceDemo homepage
    await page.goto("https://www.saucedemo.com/");

    // Step 2: Retrieve the page title (useful for debugging/logging)
    const pageTitle: string = await page.title();
    console.log("Retrieved Page Title:", pageTitle);

    // Step 3: Validate that the page title matches the expected value
    await expect(page).toHaveTitle("Swag Labs");

});