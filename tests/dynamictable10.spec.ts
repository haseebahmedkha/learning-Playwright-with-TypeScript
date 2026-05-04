import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: Dynamic Table Validation
 * Objective: Extract runtime data from a dynamic table and validate
 *            CPU usage value for a specific process.
 */

test("Verify Dynamic Table Data Extraction", async ({ page }) => {

    // Step 1: Navigate to application
    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const table: Locator = page.locator("table.table tbody");

    // Validate table is visible
    await expect(table).toBeVisible();

    const rows: Locator = table.locator("tr");

    const rowCount = await rows.count();
    console.log("Number of rows:", rowCount);

    // Validate expected number of rows (based on UI state)
    expect(rowCount).toBe(4);

    let chromeCpuLoad = "";

    // Step 2: Find Chrome process row
    for (let i = 0; i < rowCount; i++) {

        const row = rows.nth(i);

        const processName = (await row.locator("td").nth(0).innerText()).trim();

        if (processName === "Chrome") {

            chromeCpuLoad = await row.locator("td:has-text('%')").innerText();

            console.log("Chrome CPU Load:", chromeCpuLoad);

            break;
        }
    }

    // Step 3: Validate CPU value in UI indicator
    const cpuIndicator: Locator = page.locator("#chrome-cpu");

    const indicatorText = await cpuIndicator.innerText();

    console.log("CPU Indicator Text:", indicatorText);

    expect(indicatorText).toContain(chromeCpuLoad);

});