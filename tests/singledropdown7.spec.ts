import {test, expect, Locator} from "@playwright/test";
import { text } from "node:stream/consumers";


test("Verify Single Dropdown Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //a. there is Four ways to select the single dropdown options
    // 1. select the option with id
    page.locator("#country").selectOption("#country");
    // 2. select the option with value
    page.locator("#country").selectOption({value: "India"});
    // 3. select the option with label
    page.locator("#country").selectOption({label: "India"});
    // 4. select the option with index
    page.locator("#country").selectOption({index: 3});

    page.waitForTimeout(3000);

    //b. validate the selected option
    const dropdownOption: Locator = page.locator("#country>option");
    await expect(dropdownOption).toHaveCount(10); // this will verify that there are 10 options in the dropdown
    
    //c. validate the option is in the dropdown or not
    const optionValues: string[] = (await dropdownOption.allTextContents()).map(text => text.trim());
    expect(optionValues).toContain("Japan"); // this will verify that the option with the label "Japan" is in the dropdown
    console.log(optionValues);

    // d. print all the options in the dropdown
    for(const option of optionValues) {
        console.log(option); // this will print all the options in the dropdown
    }



});
