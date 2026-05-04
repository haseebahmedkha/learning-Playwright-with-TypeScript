import { parse } from 'csv-parse/sync';
import { test, expect } from '@playwright/test';
import fs from 'fs';

const url: string = "https://demowebshop.tricentis.com/login";
const filePath = "testdata/data.csv";

const filecontent = fs.readFileSync(filePath, 'utf-8');
const records: any[] = parse(filecontent, {
    columns: true,
    skip_empty_lines: true
});

test.describe("test Login", () => {
    records.forEach((record, index) => {          // ✅ use forEach to get index
        const email = record.email || 'empty';
        const password = record.password || 'empty';
        const validity = record.validity;

        test(`[${index + 1}] login test for ${email}`, async ({ page }) => {  // ✅ index in title makes it always unique
            await page.goto(url);
            await page.locator("#Email").fill(record.email || '');
            await page.locator("#Password").fill(record.password || '');
            await page.locator("xpath=//input[@value='Log in']").click();

            const errorMessage = "Login was unsuccessful. Please correct the errors and try again.";
            const errorMessageLocator = page.locator("xpath=//span[contains(text(),'Login was unsuccessful. Please correct the errors ')]");
            const logout = page.locator(".ico-logout");

            if (validity.toLowerCase() === 'valid') {
                await expect(logout).toBeVisible();
                await logout.click();
            } else {
                await expect(errorMessageLocator).toHaveText(errorMessage);
                await expect(page).toHaveURL(url);
            }
        });
    });
});