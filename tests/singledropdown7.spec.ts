import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: Single Dropdown Actions
 * Objective: Validate dropdown selection methods and verify dropdown values
 *            for the country selection field.
 */

test("Verify Single Dropdown Actions", async ({ page }) => {

    // Step 1: Navigate to application
    await page.goto("https://testautomationpractice.blogspot.com/");

    const countryDropdown: Locator = page.locator("#country");

    // --- Dropdown Selection Methods ---

    // 1. Select by value
    await countryDropdown.selectOption({ value: "India" });

    // 2. Select by label (visible text)
    await countryDropdown.selectOption({ label: "India" });

    // 3. Select by index
    await countryDropdown.selectOption({ index: 3 });

    // Small wait (for observation only - not recommended in real frameworks)
    await page.waitForTimeout(3000);

    // --- Validate dropdown options ---

    const options: Locator = page.locator("#country > option");

    // Validate total number of options
    await expect(options).toHaveCount(10);

    // Extract all option texts
    const optionValues: string[] = (await options.allTextContents())
        .map(text => text.trim());

    // Validate specific value exists
    expect(optionValues).toContain("Japan");

    // Log all dropdown values (debug purpose)
    console.log("Dropdown Options:");
    for (const option of optionValues) {
        console.log(option);
    }

});