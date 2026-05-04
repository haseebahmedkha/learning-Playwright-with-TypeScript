import { test, expect, Locator } from "@playwright/test";

/**
 * Topic: Playwright Screenshots & Visual Debugging
 * Purpose: Capture full-page and element-level screenshots
 */

/**
 * --------------------------------------
 * SCREENSHOT CONFIGURATION (PLAYWRIGHT CONFIG)
 * --------------------------------------
 *
 * screenshot options:
 *
 * 1. "on"               → always capture
 * 2. "off"              → disable screenshots
 * 3. "only-on-failure"  → capture only when test fails
 * 4. "on-first-retry"   → capture on retry
 *
 * Example config:
 *
 * use: {
 *   screenshot: "only-on-failure",
 *   video: "on",
 *   trace: "on-first-retry"
 * }
 */

const url: string = "https://demowebshop.tricentis.com/";

const screenshotPath = "screenshots/";
const format = ".png";
const timestamp = Date.now();

/**
 * --------------------------------------
 * FULL PAGE SCREENSHOT
 * --------------------------------------
 */

test("Capture full page screenshot", async ({ page }) => {

    await page.goto(url);

    await page.screenshot({
        path: `${screenshotPath}fullpage-${timestamp}${format}`,
        fullPage: true
    });
});

/**
 * --------------------------------------
 * ELEMENT SCREENSHOT (LOGO)
 * --------------------------------------
 */

test("Capture logo screenshot", async ({ page }) => {

    await page.goto(url);

    const logo: Locator = page.locator("img[alt='Tricentis Demo Web Shop']");

    await expect(logo).toBeVisible();

    await logo.screenshot({
        path: `${screenshotPath}logo-${timestamp}${format}`
    });
});

/**
 * --------------------------------------
 * FEATURE PRODUCTS SCREENSHOT
 * --------------------------------------
 */

test("Capture featured products section screenshot", async ({ page }) => {

    await page.goto(url);

    const productsSection: Locator = page.locator(".product-grid.home-page-product-grid");

    await expect(productsSection).toBeVisible();

    await productsSection.screenshot({
        path: `${screenshotPath}products-${timestamp}${format}`
    });
});