import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: Pagination Table Handling
 * Objective: Validate pagination, page size filtering,
 *            and search functionality in DataTables.
 */

test("Verify Pagination Table Data", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    let hasNextPage = true;

    while (hasNextPage) {

        const rows: Locator = page.locator("#example tbody tr");

        const rowCount = await rows.count();

        for (let i = 0; i < rowCount; i++) {
            console.log(await rows.nth(i).innerText());
        }

        await page.waitForTimeout(2000);

        const nextButton: Locator = page.locator("button[aria-label='Next']");

        const isDisabled = await nextButton.getAttribute("class");

        if (isDisabled?.includes("disabled")) {
            hasNextPage = false;
        } else {
            await nextButton.click();
        }
    }

});

test("Verify pagination table with page size filter (25 rows)", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const dropdown: Locator = page.locator("#dt-length-0");

    await dropdown.selectOption({ label: "25" });

    const rows: Locator = page.locator("#example tbody tr");

    await expect(rows).toHaveCount(25);

});

test("Verify search functionality in pagination table", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const searchBox: Locator = page.locator("#dt-search-0");

    await searchBox.fill("Bruno Nash");

    await page.waitForTimeout(2000);

    const rows: Locator = page.locator("#example tbody tr");

    const rowCount = await rows.count();

    expect(rowCount).toBe(1);

    if (rowCount > 0) {

        const rowText = await rows.first().innerText();

        expect(rowText).toContain("Bruno Nash");

        console.log("Match Found:", rowText);

    } else {

        console.log("No matching data found");
    }

});