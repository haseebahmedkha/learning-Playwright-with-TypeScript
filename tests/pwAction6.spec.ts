// Import Playwright test utilities and Locator type
import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: Input Field Actions
 * Objective: Validate text input behavior including visibility,
 *            state validation, attribute checks, and value handling.
 */

test("Verify Text Input Actions", async ({ page }) => {

    // Step 1: Navigate to test application
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Locate name input field
    const nameField: Locator = page.locator("#name");

    // Validate field is visible and editable
    await expect(nameField).toBeVisible();
    await expect(nameField).toBeEnabled();

    // Validate max length attribute
    const maxLength = await nameField.getAttribute("maxlength");
    expect(maxLength).toBe("15");

    // Enter text into input field
    await nameField.fill("John Doe");

    // Validate entered value
    const enteredValue = await nameField.inputValue();
    expect(enteredValue).toBe("John Doe");

});

/**
 * Test Suite: Radio Button Actions
 * Objective: Validate selection behavior of radio buttons.
 */

test("Verify Radio Button Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleRadio: Locator = page.locator("#male");

    // Validate radio button state
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false);

    // Select radio button
    await maleRadio.check();

    // Validate selection
    await expect(maleRadio).toBeChecked();

});

/**
 * Test Suite: Checkbox Actions
 * Objective: Validate single, multiple, loop-based,
 *            and conditional checkbox interactions.
 */

test("Verify Checkbox Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // List of weekdays
    const daysOfWeek: string[] = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    // Create checkbox locators
    const checkboxes: Locator[] = daysOfWeek.map(day =>
        page.getByLabel(day)
    );

    // Validate total checkboxes
    expect(checkboxes.length).toBe(7);

    // Step 1: Check all checkboxes
    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    // Step 2: Uncheck last 3 checkboxes
    for (const checkbox of checkboxes.slice(-3)) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }

    // Step 3: Toggle behavior (check/uncheck based on state)
    for (const checkbox of checkboxes) {
        if (await checkbox.isChecked()) {
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        } else {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

    // Step 4: Select specific indexes
    const indexes = [1, 2, 4];
    for (const i of indexes) {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }

    // Step 5: Select Friday using label
    const friday: Locator = page.getByLabel("Friday");
    await friday.check();
    await expect(friday).toBeChecked();

});