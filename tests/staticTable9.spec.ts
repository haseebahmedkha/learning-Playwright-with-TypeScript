import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: Static Table Validation
 * Objective: Validate table structure, row count, column count,
 *            and specific row data from a static HTML table.
 */

test("Verify Static Table Data", async ({ page }) => {

    // Step 1: Navigate to application
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Locate table body
    const table: Locator = page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    // --- 1. Validate row count ---
    const rows: Locator = table.locator("tr");

    await expect(rows).toHaveCount(7);

    const totalRows: number = await rows.count();
    expect(totalRows).toBe(7);

    // --- 2. Validate column count ---
    const columns: Locator = rows.locator("th");

    await expect(columns).toHaveCount(4);

    const columnCount: number = await columns.count();
    expect(columnCount).toBe(4);

    // --- 3. Validate second row data ---
    const secondRowCells: Locator = rows.nth(2).locator("td");

    const secondRowData: string[] = await secondRowCells.allInnerTexts();

    expect(secondRowData).toStrictEqual([
        "Learn Java",
        "Mukesh",
        "Java",
        "500"
    ]);

    console.log("Second Row Data:", secondRowData);

    // --- 4. Print all table rows ---
    console.log("Table Data:");

    const allRows = await rows.all();

    for (const row of allRows.slice(1)) {
        const rowData: string[] = await row.locator("td").allInnerTexts();
        console.log("Row:", rowData);
    }

});