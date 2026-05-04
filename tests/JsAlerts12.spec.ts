import {test, expect, Locator} from '@playwright/test';
import { asyncWrapProviders } from 'node:async_hooks';

// by default, Playwright automatically handles JavaScript alerts, confirms, and prompts by accepting them. However, you can listen for dialog events to perform custom actions or assertions when these dialogs appear.
// playwrright dismisses the alert by default, but you can listen for the 'dialog' event and choose to accept or dismiss it based on your test requirements. In this example, we are accepting the alert, but you can modify it to dismiss if needed.

const url: string = "https://testautomationpractice.blogspot.com/";

test("Verify Simple Dialog Alert Box",async({page},)=>{
    await page.goto(url)
    // Listen for the 'dialog' event to handle the alert
    page.on('dialog',(dialog) => {
        console.log("the Type of the Dialog is: " + dialog.type()); // alert, confirm, prompt
        expect(dialog.type()).toBe("alert"); // Assert that the dialog is an alert
        console.log("the Message in the Dialog is: " + dialog.message()); // I am an alert box!
        expect(dialog.message()).toBe("I am an alert box!"); //
        dialog.accept()
    });
    page.locator("#alertBtn").click();
    await page.waitForTimeout(2000);
});

test("validate the confirm Dialog Box with confirm button", async ({page}) => {
    await page.goto(url);
    page.on('dialog', (dialog) => {
        console.log("the Type of the Dialog is: " + dialog.type());
        expect(dialog.type()).toBe("confirm"); // Assert that the dialog is a confirm
        console.log("the Message in the Dialog is: " + dialog.message());
        expect(dialog.message()).toBe("Press a button!");   
        dialog.accept(); // Accept the confirm dialog (you can also choose to dismiss it if needed)
    });
    await page.locator("#confirmBtn").click();
    const ActualText : string = "You pressed OK!";
    const expectedText : string = await page.locator("#demo").innerText();
    expect(expectedText).toBe(ActualText); // Assert the result of accepting the confirm dialog
});


test("validate the confirm Dialog Box with cancel button", async ({page}) => {
    await page.goto(url);
    page.on('dialog', (dialog) => {
        console.log("the Type of the Dialog is: " + dialog.type());
        expect(dialog.type()).toBe("confirm"); // Assert that the dialog is a confirm
        console.log("the Message in the Dialog is: " + dialog.message());
        expect(dialog.message()).toBe("Press a button!");   
        dialog.dismiss(); // Accept the cancel dialog (you can also choose to dismiss it if needed)
    });
    await page.locator("#confirmBtn").click();
    const ActualText : string = "You pressed Cancel!";
    const expectedText : string = await page.locator("#demo").innerText();
    expect(expectedText).toBe(ActualText); // Assert the result of accepting the confirm dialog
});

test("validate the confirm Dialog Box with Promt button", async ({page}) => {
    await page.goto(url);
    const inputText : string = "Playwright";    
    page.on('dialog', (dialog) => {
        console.log("the Type of the Dialog is: " + dialog.type());
        expect(dialog.type()).toBe("prompt"); // Assert that the dialog is a prompt
        console.log("the Message in the Dialog is: " + dialog.message());
        expect(dialog.message()).toBe("Please enter your name:");   
        dialog.accept(inputText); // Accept the prompt dialog with input text (you can also choose to dismiss it if needed)
    });
    await page.locator("#promptBtn").click();
    const ActualText : string = "Hello " + inputText + "! How are you today?";
    const expectedText : string = await page.locator("#demo").innerText();
    expect(expectedText).toBe(ActualText); // Assert the result of accepting the prompt dialog with input text
});


test("validate the confirm Dialog Box with Promt button with cancel", async ({page}) => {
    await page.goto(url);
    page.on('dialog', (dialog) => {
        console.log("the Type of the Dialog is: " + dialog.type()); 
        expect(dialog.type()).toBe("prompt"); // Assert that the dialog is a prompt
        console.log("the Message in the Dialog is: " + dialog.message());
        expect(dialog.message()).toBe("Please enter your name:");   
        dialog.dismiss(); // Dismiss the prompt dialog (you can also choose to accept it with input text if needed)
    });
    await page.locator("#promptBtn").click();
    const ActualText : string = "User cancelled the prompt.";
    const expectedText : string = await page.locator("#demo").innerText();
    expect(expectedText).toBe(ActualText); // Assert the result of dismissing the prompt dialog
});