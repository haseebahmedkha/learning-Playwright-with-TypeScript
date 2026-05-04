import {test, expect, Locator} from "@playwright/test";
import { text } from "node:stream/consumers";

test("Verify colors dropdown is sorted",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const colorsdropdownoptions: Locator = page.locator("#colors>option");
    const colorsoptionText:string[] = (await colorsdropdownoptions.allTextContents()).map(text => text.trim());
    const colorsorigionalDropdownOptions: string[] = [...colorsoptionText];
    const colorssortedDropdownOptions: string[] = [...colorsoptionText.sort()];
    // console.log(colorsorigionalDropdownOptions);
    // console.log(colorssortedDropdownOptions);
    expect(colorsorigionalDropdownOptions).toEqual(colorssortedDropdownOptions); // this will verify that the dropdown options are sorted in ascending order
    await page.waitForTimeout(3000);
});

test("Verify Animals dropdown is sorted",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const animalsdropdownoptions: Locator = page.locator("#animals>option");
    const animalsoptionText:string[] = (await animalsdropdownoptions.allTextContents()).map(text => text.trim());
    const animalsorigionalDropdownOptions: string[] = [...animalsoptionText];
    const animalssortedDropdownOptions: string[] = [...animalsoptionText.sort()]; 
    // console.log(animalsorigionalDropdownOptions);
    // console.log(animalssortedDropdownOptions);  
    expect(animalsorigionalDropdownOptions).toEqual(animalssortedDropdownOptions); // this will verify that the dropdown options are not sorted in ascending order
    await page.waitForTimeout(3000);
});

test("verify duplicate options in colors dropdown", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const colorsdropdownoptions: Locator = page.locator("#colors>option");
    const colorsoptionText:string[] = (await colorsdropdownoptions.allTextContents()).map(text => text.trim());
    const myset: Set<string> = new Set();
    const duplicates: string[] = [];
    for (const option of colorsoptionText) {
        if (myset.has(option)) {
            duplicates.push(option); // this will add the duplicate options to the duplicates array
        } else {
            myset.add(option); // this will add the unique options to the myset set
        }
    }

    console.log("dublicates values --->",duplicates);
    expect(duplicates).toBe(0); // this will print the duplicate options in the dropdown
});
