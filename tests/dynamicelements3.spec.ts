import { test, expect, Locator } from "@playwright/test";
import { start } from "node:repl";


// focus on handling dynamic elements using XPath in Playwright
test("Handle Dynamic Elements Using Xpath", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    for(let i=1; i<=5; i++){
        let button: Locator = page.locator('//button[text()="STOP" or text()="START"]'); // Locate the button with text "STOP" or "START"
        // let button: Locator = page.locator('//button[@name="start"]'); // Locate the button with name attribute "start"
        // let button: Locator = page.locator('//button[@name="start" or @name="stop"]'); // Locate the button with name attribute "start" or "stop"
        // let button: Locator = page.locator('//button[contains(@name,"sta")]'); // Locate the button with name attribute that contains "sta"
        // let button: Locator = page.locator('//button[starts-with(@name,"sta")]');
        await button.click(); // Click the button to toggle its state
        await page.waitForTimeout(2000); // Wait for 2 second to observe the change in button text

    }

});


// using playwright specific method
test("Handle Dynamic Elements Using Playwright Locators", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    for(let i=1; i<=5; i++){
        let button: Locator = page.getByRole('button',{name: /START|STOP/ }); // Locate the button with text "STOP" or "START"
        await button.click(); // Click the button to toggle its state
        await page.waitForTimeout(2000); // Wait for 2 second to observe the change in button text

    }

});