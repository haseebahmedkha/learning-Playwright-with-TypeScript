import { test, expect } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";

/**
 * Topic: CSV Data Driven Testing (DDT)
 * --------------------------------------
 * Purpose:
 * Read test data from CSV file and execute
 * login tests dynamically using Playwright
 */

/**
 * --------------------------------------
 * TEST DATA SOURCE (CSV)
 * --------------------------------------
 */
const url: string = "https://demowebshop.tricentis.com/login";
const filePath = "testdata/data.csv";

/**
 * Read CSV file
 */
const fileContent = fs.readFileSync(filePath, "utf-8");

const records: any[] = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
});

/**
 * --------------------------------------
 * DDT TEST SUITE
 * --------------------------------------
 */
test.describe("Login DDT Using CSV Data", () => {

    records.forEach((record, index) => {

        const email = record.email || "";
        const password = record.password || "";
        const validity = record.validity || "invalid";

        test(`[${index + 1}] Login Test | ${email || "empty email"}`, async ({ page }) => {

            /**
             * STEP 1: Navigate to login page
             */
            await page.goto(url);

            /**
             * STEP 2: Enter credentials
             */
            await page.locator("#Email").fill(email);
            await page.locator("#Password").fill(password);

            /**
             * STEP 3: Click login button
             */
            await page.locator("input[value='Log in']").click();

            /**
             * STEP 4: Locators
             */
            const logoutBtn = page.locator(".ico-logout");
            const errorMsg = page.locator(".message-error");

            /**
             * STEP 5: Validation logic
             */
            if (validity.toLowerCase() === "valid") {

                await expect(logoutBtn).toBeVisible();

                await logoutBtn.click();

            } else {

                await expect(errorMsg).toContainText(
                    "Login was unsuccessful"
                );

                await expect(page).toHaveURL(url);
            }

        });

    });

});