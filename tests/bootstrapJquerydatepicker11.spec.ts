import { test, expect } from "@playwright/test";

/**
 * Test Suite: Bootstrap/Booking Date Picker Automation
 * Objective: Validate check-in and check-out date selection
 *            using dynamic calendar navigation.
 */

async function selectBookingDate(
    page: any,
    targetYear: string,
    targetMonth: string,
    targetDay: string,
    monthHeaderSelector: string,
    dateTableSelector: string
) {

    let maxAttempts = 24; // safety guard

    while (maxAttempts > 0) {

        const monthYearText = (await page.locator(monthHeaderSelector).first().innerText()).trim();

        const [currentMonth, currentYear] = monthYearText.split(" ");

        if (currentMonth === targetMonth && currentYear === targetYear) {
            break;
        }

        await page.locator('button[aria-label="Next month"]').click();

        maxAttempts--;
    }

    const dates = page.locator(`${dateTableSelector} td`);

    const count = await dates.count();

    let isSelected = false;

    for (let i = 0; i < count; i++) {

        const dateText = await dates.nth(i).innerText();

        if (dateText.trim() === targetDay) {
            await dates.nth(i).click();
            isSelected = true;
            break;
        }
    }

    expect(isSelected).toBeTruthy();
}

/**
 * Test: Booking.com Date Selection
 */

test("Validate Booking.com Check-in and Check-out Date Picker", async ({ page }) => {

    await page.goto("https://www.booking.com/");

    await page.getByTestId("searchbox-dates-container").click();

    // ---------------- CHECK-IN ----------------
    await selectBookingDate(
        page,
        "2026",
        "December",
        "25",
        "h3",
        "table"
    );

    // ---------------- CHECK-OUT ----------------
    await selectBookingDate(
        page,
        "2026",
        "December",
        "30",
        "h3",
        "table"
    );

    await page.waitForTimeout(2000);
});