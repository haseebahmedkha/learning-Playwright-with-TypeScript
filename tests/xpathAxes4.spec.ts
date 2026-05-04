// Import Playwright test runner, assertions, and Locator type
import { test, expect, Locator } from "@playwright/test";

/**
 * Test Suite: XPath Axes Validation
 * Objective: Validate different XPath axes by navigating through
 *            table elements on the W3Schools HTML Tables page.
 */

test("Verify XPath axes using table data", async ({ page }) => {

    // Step 1: Navigate to the test page
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // --- Axis 1: self ---
    // Validate that the element containing 'Germany' can reference itself
    const germanyCell: Locator = page.locator("//td[text()='Germany']/self::td");
    await expect(germanyCell).toHaveText("Germany");

    // --- Axis 2: parent ---
    // Locate the parent row of 'Germany' and validate its content
    const parentRow: Locator = page.locator("//td[text()='Germany']/parent::tr");
    await expect(parentRow).toContainText("Germany");
    await expect(parentRow).toContainText("Maria Anders Germany");

    console.log("Parent Row Content:", await parentRow.textContent());

    // --- Axis 3: child ---
    // Validate number of child cells in the second row of the table
    const secondRowCells: Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
    await expect(secondRowCells).toHaveCount(3);

    // --- Axis 4: ancestor ---
    // Validate that the ancestor table has the correct ID
    const ancestorTable: Locator = page.locator("//td[text()='Germany']/ancestor::table");
    await expect(ancestorTable).toHaveAttribute("id", "customers");

    console.log(
        "Ancestor Element Tag:",
        await ancestorTable.evaluate(node => node.tagName)
    );

    // --- Axis 5: descendant ---
    // Validate total number of descendant <td> elements in the table
    const allTableCells: Locator = page.locator("//table[@id='customers']/descendant::td");
    await expect(allTableCells).toHaveCount(18);

    // --- Axis 6: following ---
    // Validate all elements that appear after 'Germany' in the DOM
    const followingElements: Locator = page.locator("//td[text()='Germany']/following::td");
    await expect(followingElements).toHaveCount(15);

    // --- Axis 7: following-sibling ---
    // Validate immediate sibling element after 'Germany'
    const nextSibling: Locator = page.locator("//td[text()='Germany']/following-sibling::td");
    await expect(nextSibling).toHaveCount(1);

    // --- Axis 8: preceding ---
    // Validate elements that appear before 'Germany'
    const precedingElements: Locator = page.locator("//td[text()='Germany']/preceding::td");
    await expect(precedingElements).toHaveCount(2);

});