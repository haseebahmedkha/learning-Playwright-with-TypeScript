import { test, expect } from "@playwright/test";
import fs from "fs";

/**
 * Topic: JSON Data Driven Testing (DDT)
 * --------------------------------------
 * Purpose:
 * Read test data from JSON file and execute
 * login tests dynamically using Playwright
 */

/**
 * --------------------------------------
 * TEST DATA SOURCE (JSON)
 * --------------------------------------
 */
const dataPath = "testdata/testdata.json";

const url: string = "https://demowebshop.tricentis.com/login";

/**
 * Read JSON file
 */
const loginData: any[] = JSON.parse(
    fs.readFileSync(dataPath, "utf-8")
);

/**
 * --------------------------------------
 * DDT TEST SUITE
 * --------------------------------------
 */
test.describe("Login DDT Using JSON Data", () => {

    for (const { email, password, validity } of loginData) {

        test(`Login Test | ${email} | ${validity}`, async ({ page }) => {

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

    }

});