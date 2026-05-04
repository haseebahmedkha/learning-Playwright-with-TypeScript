import {test, expect, Locator, Page} from '@playwright/test';

test("validate the BootStrap Date Picker", async ({page}) => {

    let year: string = '2026';
    let month: string = 'December';
    let day: string = '25';
    await page.goto("https://www.booking.com/");
    await page.getByTestId("searchbox-dates-container").click();

    while (true) {
        const checkInMonthYear = await page.locator('h3[class*="bui-calendar__month"]').nth(0).innerText();
        const currentMonth = checkInMonthYear.split(" ")[0];
        const currentYear = checkInMonthYear.split(" ")[1];
        if (currentYear === year && currentMonth === month) {
            break;
        }
        else {
            await page.locator('button[aria-label="Next month"]').click();
        }

    }

    let allDates = await page.locator("table.b8fcb0c66a tbody").nth(0).locator("td").all();
    let checkInDateSelected = false;
    for (let dateLocator of allDates) {
        const dateText = await dateLocator.innerText();
        if (dateText === day) {
            await dateLocator.click();
            checkInDateSelected = true;
            break;
        }

    }
    expect(checkInDateSelected).toBeTruthy();

    let checkOutYear: string = '2026';
    let checkOutMonth: string = 'December';
    let checkOutDay: string = '30';

    while (true) {
        let checkOutMonthYear = await page.locator("h3[id$='bui-calendar-month-2026-3']").nth(1).innerText();
        let currentCheckOutMonth = checkOutMonthYear.split(" ")[0];
        let currentCheckOutYear = checkOutMonthYear.split(" ")[1];
        if (currentCheckOutYear === checkOutYear && currentCheckOutMonth === checkOutMonth) {
            break;
        }
        else {
            await page.locator('button[aria-label="Next month"]').click();
        }

    }

    let allCheckOutDates = await page.locator("table.b8fcb0c66a tbody").nth(1).locator("td").all();
    let checkOutDateSelected = false;
    for (let dateLocator of allCheckOutDates) {
        const dateText = await dateLocator.innerText(); 
        if (dateText === checkOutDay) {
            await dateLocator.click();
            checkOutDateSelected = true;
            break;
        }   
    }
    expect(checkOutDateSelected).toBeTruthy();
    await page.waitForTimeout(2000);




});