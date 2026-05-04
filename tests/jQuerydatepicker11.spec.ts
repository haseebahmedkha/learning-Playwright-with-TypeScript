import {test, expect, Locator, Page} from '@playwright/test';

async function selectDate(targetYear:string,targetMonth:string,page:Page,targetDate:string,isFuture:boolean) {
    while (true) {
        const currentYear = await page.locator(".ui-datepicker-year").textContent();
        const currentMonth = await page.locator(".ui-datepicker-month").textContent();

        if (currentYear === targetYear && currentMonth === targetMonth) {
            break;
        }
        if (isFuture) {
            await page.locator(".ui-datepicker-next").click(); // future date selection
        }
        else {            
            await page.locator(".ui-datepicker-prev").click(); // past date selection
        }

        // await page.waitForTimeout(2000);
    }

    const allDatelocators = await page.locator(".ui-datepicker-calendar td").all();
    for (let dateLocator of allDatelocators) {
        const dateText = await dateLocator.innerText();
        if (dateText === targetDate) {
            await dateLocator.click();
            break;
        }    }
}

test("validate the Jquery Date Picker", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Validate the Date Picker Visibility
    const dateInput: Locator = page.locator("#datepicker");
    // expect(dateInput).toBeVisible();

    // // 1st Method to Validate the Date 
    // // formate = "mm/dd/yyyy"
    // await dateInput.click();
    // await dateInput.fill("12/25/2024");
    // expect(dateInput).toHaveValue("12/25/2024");
    // await page.waitForTimeout(2000);


    // 2nd Method to Validate the Date
    await dateInput.click();
    const year = '2027';
    const month = 'December';
    const day = '25';
    await selectDate(year, month, page, day, true);
    const expectedDate = "12/25/2027";
    await expect(dateInput).toHaveValue(expectedDate);

    

    


});