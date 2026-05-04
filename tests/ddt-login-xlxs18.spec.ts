import { test } from "@playwright/test";
import * as XLSX from "xlsx";

/**
 * Topic: Excel Data Driven Testing (DDT)
 * --------------------------------------
 * Purpose:
 * Read test data from Excel file and execute
 * login tests dynamically in Playwright
 */

/**
 * --------------------------------------
 * READ EXCEL FILE
 * --------------------------------------
 */
const filePath = "test-data/loginData.xlsx";

const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

/**
 * Convert Excel → JSON
 */
const loginData: any[] = XLSX.utils.sheet_to_json(worksheet);

/**
 * --------------------------------------
 * DDT TEST SUITE
 * --------------------------------------
 */
test.describe("Login DDT Using Excel Data", () => {

    for (const { email, password, validity } of loginData) {

        test(`Login Test | ${email} | ${validity}`, async ({ page }) => {

            /**
             * STEP 1: Open application
             */
            await page.goto("https://demowebshop.tricentis.com/login");

            /**
             * STEP 2: Enter credentials from Excel
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
             * STEP 5: Validation
             */
            if (validity.toLowerCase() === "valid") {

                await test.expect(logoutBtn).toBeVisible();

                await logoutBtn.click();

            } else {

                await test.expect(errorMsg).toContainText(
                    "Login was unsuccessful"
                );

                await test.expect(page).toHaveURL(/login/);
            }

        });

    }

});