import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: Dropdown Validations
 * Objective: Validate sorting order and duplicate values in dropdown lists
 *            for Colors and Animals dropdowns.
 */

test("Verify Colors dropdown is sorted", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Get all dropdown options
    const colorOptions: Locator = page.locator("#colors > option");

    // Extract and clean text values
    const colorText: string[] = (await colorOptions.allTextContents())
        .map(text => text.trim());

    // Copy original list
    const originalOrder: string[] = [...colorText];

    // Create sorted list
    const sortedOrder: string[] = [...colorText].sort();

    // Validate dropdown is already sorted
    expect(originalOrder).toEqual(sortedOrder);

});

test("Verify Animals dropdown is sorted", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const animalOptions: Locator = page.locator("#animals > option");

    const animalText: string[] = (await animalOptions.allTextContents())
        .map(text => text.trim());

    const originalOrder: string[] = [...animalText];
    const sortedOrder: string[] = [...animalText].sort();

    expect(originalOrder).toEqual(sortedOrder);

});

test("Verify duplicate values in Colors dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const colorOptions: Locator = page.locator("#colors > option");

    const colorText: string[] = (await colorOptions.allTextContents())
        .map(text => text.trim());

    const seen: Set<string> = new Set();
    const duplicates: string[] = [];

    for (const value of colorText) {
        if (seen.has(value)) {
            duplicates.push(value);
        } else {
            seen.add(value);
        }
    }

    console.log("Duplicate values:", duplicates);

    // Validate no duplicates exist
    expect(duplicates.length).toBe(0);

});