// Import Playwright test runner and assertions
import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: CSS Locator Strategies
 * Objective: Validate different CSS selector approaches on the Demo Web Shop
 *            search functionality.
 */

test("Verify CSS locator strategies", async ({ page }) => {

    // Step 1: Navigate to the application
    await page.goto("https://demowebshop.tricentis.com/");

    // --- CSS 1: Tag + ID selector ---
    // Locate search input using unique ID
    const searchInput: Locator = page.locator("input#small-searchterms");
    await searchInput.fill("laptop");

    // Validate that search input is visible
    await expect(searchInput).toBeVisible();

    // NOTE: waitForTimeout is generally not recommended in real automation
    await page.waitForTimeout(3000);

    // --- CSS 2: Tag + Class selector ---
    // Validate search box using class selector
    const searchBox: Locator = page.locator("input.search-box-text");
    await expect(searchBox).toBeVisible();

    // --- CSS 3: Tag + Attribute selector ---
    // Locate search input using attribute selector
    const attributeSearch: Locator = page.locator("input[name='q']");
    await attributeSearch.fill("laptop");

    await page.waitForTimeout(3000);

});