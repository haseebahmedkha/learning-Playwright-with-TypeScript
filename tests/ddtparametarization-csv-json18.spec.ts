import { test, expect } from "@playwright/test";

/**
 * Topic: Data Driven Testing (DDT) in Playwright
 * ----------------------------------------------
 * Purpose:
 * Run same test with multiple input data sets
 * to validate application behavior across scenarios
 */

/**
 * --------------------------------------
 * TEST DATA (DRIVEN INPUTS)
 * --------------------------------------
 */
const searchItems: string[] = [
    "laptop",
    "gift card",
    "smartphone",
    "monitors"
];

const baseURL = "https://demowebshop.tricentis.com/";

/**
 * --------------------------------------
 * DDT USING test.describe + forEach
 * --------------------------------------
 */
test.describe("Search Functionality - DDT Suite", () => {

    searchItems.forEach((searchItem) => {

        test(`Search validation for: ${searchItem}`, async ({ page }) => {

            /**
             * STEP 1: Navigate to application
             */
            await page.goto(baseURL);

            /**
             * STEP 2: Enter search keyword
             */
            await page.locator("#small-searchterms").fill(searchItem);

            /**
             * STEP 3: Click search button
             */
            await page.locator("xpath=//input[@value='Search']").click();

            /**
             * STEP 4: Validate search result (soft assertion for stability)
             */
            await expect
                .soft(page.locator("h2 a").first())
                .toContainText(searchItem, { ignoreCase: true });
        });

    });

});