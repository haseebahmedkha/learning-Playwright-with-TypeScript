import { test, expect } from "@playwright/test";

/**
 * Topic: Data Driven Login Testing (DDT)
 * --------------------------------------
 * Purpose:
 * Validate login functionality with multiple datasets
 * (valid + invalid scenarios)
 */

/**
 * --------------------------------------
 * TEST DATA SET
 * --------------------------------------
 */
const testData: string[][] = [
    ["haseebahmed.sqa.eng@gmail.com", "test123", "valid"],
    ["haseeb@gmail.com", "test123", "invalid"],
    ["haseebahmed@gmail.com", "test123", "invalid"],
    ["", "", "invalid"]
];

const url: string = "https://demowebshop.tricentis.com/login";

/**
 * --------------------------------------
 * DDT LOGIN TEST SUITE
 * --------------------------------------
 */

test.describe("Login Functionality - DDT Suite", () => {

    for (const [email, password, validity] of testData) {

        test(`Login Test | ${email || "empty email"} | ${validity}`, async ({ page }) => {

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
             * STEP 4: Define locators
             */
            const logoutButton = page.locator(".ico-logout");
            const errorMessage = page.locator(".message-error");

            /**
             * STEP 5: Validation logic
             */
            if (validity.toLowerCase() === "valid") {

                await expect(logoutButton).toBeVisible();

                await logoutButton.click();

            } else {

                await expect(errorMessage).toContainText(
                    "Login was unsuccessful"
                );

                await expect(page).toHaveURL(url);
            }

        });

    }

});