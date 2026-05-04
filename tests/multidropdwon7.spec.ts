import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: Multi-Select Dropdown Actions
 * Objective: Validate multi-select dropdown behavior, option count,
 *            and value presence in the Colors dropdown.
 */

test("Verify Multi-Select Dropdown Actions", async ({ page }) => {

    // Step 1: Navigate to application
    await page.goto("https://testautomationpractice.blogspot.com/");

    const colorsDropdown: Locator = page.locator("#colors");

    // --- Multi-select using different approaches ---

    // Select by visible text
    await colorsDropdown.selectOption(["Red", "Green", "Blue"]);

    // Select by value attribute
    await colorsDropdown.selectOption(["red", "green", "blue"]);

    // Select by label object
    await colorsDropdown.selectOption([
        { label: "Red" },
        { label: "Green" },
        { label: "Blue" }
    ]);

    // Select by index
    await colorsDropdown.selectOption([
        { index: 3 },
        { index: 4 },
        { index: 5 }
    ]);

    // Step 2: Validate dropdown options count
    const options: Locator = page.locator("#colors > option");
    await expect(options).toHaveCount(7);

    // Step 3: Extract option values
    const optionValues: string[] = (await options.allTextContents())
        .map(text => text.trim());

    // Step 4: Validate specific option exists
    expect(optionValues).toContain("Green");

    // Step 5: Log all options (debug purpose)
    console.log("Dropdown Options:");
    for (const option of optionValues) {
        console.log(option);
    }

});