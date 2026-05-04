// Import Playwright test runner, assertions, and Locator type
import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: Playwright Built-in Locators
 * Objective: Validate different Playwright locator strategies by interacting
 *            with elements on the nopCommerce demo website.
 */

test("Verify Playwright built-in locator strategies", async ({ page }) => {

    // Step 1: Navigate to the application under test
    await page.goto("https://demo.nopcommerce.com/");

    // --- Locator 1: getByAltText() ---
    // Validate that the website logo is visible using alt text
    const logo: Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    // --- Locator 2: getByText() ---
    // Verify that the homepage welcome message is displayed
    await expect(page.getByText("Welcome to our store")).toBeVisible();

    // --- Locator 3: getByRole() ---
    // Click on the "Register" link and validate navigation to the Register page
    await page.getByRole("link", { name: "Register" }).click();
    await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();

    // --- Locator 4: getByLabel() ---
    // Fill registration form fields using associated labels
    await page.getByLabel("First name:").fill("John");
    await page.getByLabel("Last name:").fill("Doe");
    await page.getByLabel("Email:").fill("haseebahmed.sqa.eng@gmail.com");

    // --- Locator 5: getByPlaceholder() ---
    // Interact with search input field using placeholder text
    await page.getByPlaceholder("Search store").fill("Laptop");

    // --- Locator 6: getByTitle() ---
    // Click on the logo using title attribute and verify homepage navigation
    await page.getByTitle("nopCommerce demo store").click();
    await expect(page.getByRole("heading", { name: "Welcome to our store" })).toBeVisible();

    // --- Locator 7: getByTestId() ---
    // Enter value into newsletter field using test ID
    await page.getByTestId("newsletter-email").fill("haseeb");

});