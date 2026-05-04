import { test, expect } from "@playwright/test";

/**
 * Topic: Playwright Assertions & Timeouts
 * Purpose: Understand waiting strategy and assertion types
 */

/**
 * -----------------------------
 * TIMEOUTS IN PLAYWRIGHT
 * -----------------------------
 *
 * 1. Test Timeout (default ~30s)
 *    - Applies to full test execution
 *
 * 2. Assertion Timeout (default ~5s - 10s depending config)
 *    - Applies only to expect() calls
 */

test("Validate test timeout configuration", async ({ page }) => {

    // Set timeout for entire test
    test.setTimeout(120000);

    await page.goto("https://demowebshop.tricentis.com/");

    const logo = page.locator("img[alt='Tricentis Demo Web Shop']");

    await expect(logo).toBeVisible({ timeout: 10000 });
});

/**
 * -----------------------------
 * ASSERTION TYPES
 * -----------------------------
 */

test("Playwright Assertion Demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Auto-retrying assertions (Playwright waits until condition is met)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    const searchBox = page.locator("#small-searchterms");

    await expect(searchBox).toBeVisible();

    await searchBox.fill("Laptop");

    await expect(searchBox).toHaveValue("Laptop");

    // 2. Non-retrying assertion (works on resolved value)
    const title = await page.title();

    expect(title).toContain("Demo Web Shop");

    // 3. Negative assertion
    await expect(searchBox).not.toHaveValue("Mobile");
});

/**
 * -----------------------------
 * HARD vs SOFT ASSERTIONS
 * -----------------------------
 */

test("Hard vs Soft Assertions", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
    const searchBox = page.locator("#small-searchterms");

    // HARD ASSERTION (default)
    await expect(logo).toBeVisible();

    // If above fails → test stops here

    // SOFT ASSERTION (continues execution even if failed)
    await expect.soft(searchBox).toBeVisible();

    await expect.soft(searchBox).toBeEnabled();

    // Soft assertions allow full test execution
});