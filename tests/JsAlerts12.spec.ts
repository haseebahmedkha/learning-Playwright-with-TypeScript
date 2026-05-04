import { test, expect } from "@playwright/test";

/**
 * Test Suite: JavaScript Dialog Handling
 * Objective: Validate alert, confirm, and prompt dialogs
 *            using Playwright dialog event handling.
 */

const url = "https://testautomationpractice.blogspot.com/";

/**
 * ALERT BOX
 */

test("Verify Simple Alert Dialog", async ({ page }) => {

    await page.goto(url);

    page.on("dialog", async (dialog) => {

        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("I am an alert box!");

        console.log("Alert Type:", dialog.type());
        console.log("Alert Message:", dialog.message());

        await dialog.accept();
    });

    await page.locator("#alertBtn").click();

    await page.waitForTimeout(1000);
});

/**
 * CONFIRM BOX - ACCEPT
 */

test("Verify Confirm Dialog - Accept", async ({ page }) => {

    await page.goto(url);

    page.on("dialog", async (dialog) => {

        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toBe("Press a button!");

        await dialog.accept();
    });

    await page.locator("#confirmBtn").click();

    const actualText = await page.locator("#demo").innerText();

    expect(actualText).toBe("You pressed OK!");
});

/**
 * CONFIRM BOX - CANCEL
 */

test("Verify Confirm Dialog - Cancel", async ({ page }) => {

    await page.goto(url);

    page.on("dialog", async (dialog) => {

        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toBe("Press a button!");

        await dialog.dismiss();
    });

    await page.locator("#confirmBtn").click();

    const actualText = await page.locator("#demo").innerText();

    expect(actualText).toBe("You pressed Cancel!");
});

/**
 * PROMPT BOX - ACCEPT INPUT
 */

test("Verify Prompt Dialog - Accept Input", async ({ page }) => {

    await page.goto(url);

    const inputText = "Playwright";

    page.on("dialog", async (dialog) => {

        expect(dialog.type()).toBe("prompt");
        expect(dialog.message()).toBe("Please enter your name:");

        await dialog.accept(inputText);
    });

    await page.locator("#promptBtn").click();

    const actualText = await page.locator("#demo").innerText();

    expect(actualText).toBe(
        `Hello ${inputText}! How are you today?`
    );
});

/**
 * PROMPT BOX - CANCEL
 */

test("Verify Prompt Dialog - Cancel", async ({ page }) => {

    await page.goto(url);

    page.on("dialog", async (dialog) => {

        expect(dialog.type()).toBe("prompt");
        expect(dialog.message()).toBe("Please enter your name:");

        await dialog.dismiss();
    });

    await page.locator("#promptBtn").click();

    const actualText = await page.locator("#demo").innerText();

    expect(actualText).toBe("User cancelled the prompt.");
});