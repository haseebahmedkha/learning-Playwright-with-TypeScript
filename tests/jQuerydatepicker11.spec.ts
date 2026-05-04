import { test, expect, Page } from "@playwright/test";

/**
 * Helper Function: Select Date from jQuery Date Picker
 * Objective: Navigate calendar UI and select a specific date
 */

async function selectDate(
    targetYear: string,
    targetMonth: string,
    page: Page,
    targetDate: string,
    isFuture: boolean
) {

    let maxIterations = 24; // safety guard to prevent infinite loop

    while (maxIterations > 0) {

        const currentYear = (await page.locator(".ui-datepicker-year").textContent())?.trim();
        const currentMonth = (await page.locator(".ui-datepicker-month").textContent())?.trim();

        if (currentYear === targetYear && currentMonth === targetMonth) {
            break;
        }

        if (isFuture) {
            await page.locator(".ui-datepicker-next").click();
        } else {
            await page.locator(".ui-datepicker-prev").click();
        }

        maxIterations--;
    }

    // Select target date
    const allDates = page.locator(".ui-datepicker-calendar td");

    const count = await allDates.count();

    for (let i = 0; i < count; i++) {

        const dateText = await allDates.nth(i).innerText();

        if (dateText === targetDate) {
            await allDates.nth(i).click();
            break;
        }
    }
}

/**
 * Test Suite: jQuery Date Picker Automation
 * Objective: Validate date selection using calendar navigation
 */

test("Validate jQuery Date Picker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateInput = page.locator("#datepicker");

    // Open date picker
    await dateInput.click();

    // Target date configuration
    const year = "2027";
    const month = "December";
    const day = "25";

    // Select date using helper function
    await selectDate(year, month, page, day, true);

    // Validate final selected value
    const expectedDate = "12/25/2027";
    await expect(dateInput).toHaveValue(expectedDate);

});