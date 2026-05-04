// Import Playwright test runner, assertions, and Locator type
import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: XPath Locator Strategies
 * Objective: Validate different XPath techniques by locating and interacting
 *            with elements on the Demo Web Shop application.
 */

test("Verify XPath locator strategies in Demo Web Shop", async ({ page }) => {

    // Step 1: Navigate to the application
    await page.goto("https://demowebshop.tricentis.com/");

    // --- XPath 1: Basic Attribute Locator ---
    // Validate that the website logo is visible using XPath with attribute
    const absoluteLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(absoluteLogo).toBeVisible();

    // --- XPath 2: Relative XPath (recommended approach) ---
    // Using flexible XPath to locate the same logo
    const relativeLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativeLogo).toBeVisible();

    // --- XPath 3: contains() ---
    // Locate products where href contains 'computer'
    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const productCount: number = await products.count();

    console.log("Number of computer-related products:", productCount);

    // Log sample product names for verification/debugging
    console.log("First Product:", await products.first().textContent());
    console.log("Last Product:", await products.last().textContent());
    console.log("Second Product:", await products.nth(2).textContent());

    // Capture and log all product titles
    const productTitles: string[] = await products.allTextContents();
    for (const title of productTitles) {
        console.log("Product:", title);
    }

    // --- XPath 4: starts-with() ---
    // Locate elements where href starts with '/build'
    const buildingProducts: Locator = page.locator("//h2/a[starts-with(@href,'/build')]");
    const buildingProductCount: number = await buildingProducts.count();

    // Validate at least one matching product exists
    await expect(buildingProductCount).toBeGreaterThan(0);

    // --- XPath 5: text() ---
    // Validate visibility of Register link using exact text match
    const registerLink: Locator = page.locator("//a[text()='Register']");
    await expect(registerLink).toBeVisible();

    // --- XPath 6: last() ---
    // Locate and validate the last social media link in "Follow Us" section
    const lastItem: Locator = page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(lastItem).toBeVisible();
    console.log("Last Social Media Link:", await lastItem.textContent());

    // --- XPath 7: position() ---
    // Locate and validate the second social media link
    const secondItem: Locator = page.locator("//div[@class='column follow-us']//li[position()=2]");
    await expect(secondItem).toBeVisible();
    console.log("Second Social Media Link:", await secondItem.textContent());

});