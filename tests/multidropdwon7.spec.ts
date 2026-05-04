import {test, expect, Locator} from "@playwright/test";
import { text } from "node:stream/consumers";


test("Verify Multi Dropdown Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //a. there is Four ways to select the single dropdown options
    // 1. select the option using Visible Text
    page.locator("#colors").selectOption(["Red", "Green", "Blue"]); // this will select the options with the labels "Red", "Green", "Blue"
    // 2. select the option with value
    page.locator("#colors").selectOption(["red", "green", "blue"]); // this will select the options with the values "red", "green", "blue"
    // 3. select the option with label
    page.locator("#colors").selectOption([{label: "Red"}, {label: "Green"}, {label: "Blue"}]); // this will select the options with the labels "Red", "Green", "Blue"
    // 4. select the option with index
    page.locator("#colors").selectOption([{index: 3}, {index: 4}, {index: 5}]); // this will select the options with the index 3, 4, 5

    //b. check the Number of Option in a Dropdown
    const dropdownOption: Locator = page.locator("#colors>option");
    await expect(dropdownOption).toHaveCount(7); // this will verify that there are 6 options in the dropdown

    
    //c. validate the option is in the dropdown or not
    const optionValues: string[] = (await dropdownOption.allTextContents()).map(text => text.trim());
    expect(optionValues).toContain("Green");
    
    // d. print all the options in the dropdown
    for (const option of optionValues) {
        console.log(option); // this will print all the options in the dropdown
    }
    



});
