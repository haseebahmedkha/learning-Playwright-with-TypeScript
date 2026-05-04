import { test, expect, Locator } from "@playwright/test";

/**
 * ===============================
 * HANDLE DYNAMIC ELEMENTS (XPath)
 * ===============================
 * This test demonstrates how to handle elements
 * whose text or state changes dynamically (START ↔ STOP)
 */

test("Handle Dynamic Elements Using XPath", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Loop to interact multiple times with dynamic button
    for (let i = 1; i <= 5; i++) {

        // XPath supports OR condition to handle dynamic text changes
        const button: Locator = page.locator(
            '//button[text()="STOP" or text()="START"]'
        );

        // Click toggles between START and STOP
        await button.click();

        // Wait to observe UI state change
        await page.waitForTimeout(2000);
    }
});

/**
 * ==========================================
 * HANDLE DYNAMIC ELEMENTS (PLAYWRIGHT WAY)
 * ==========================================
 * Preferred approach using getByRole with regex
 * More stable than XPath and future-proof
 */

test("Handle Dynamic Elements Using Playwright Locators", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    for (let i = 1; i <= 5; i++) {

        // Regex handles both START and STOP dynamically
        const button: Locator = page.getByRole('button', {
            name: /START|STOP/
        });

        await button.click();

        // Small delay to observe state change
        await page.waitForTimeout(2000);
    }
});