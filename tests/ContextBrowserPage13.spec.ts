import { test, expect, chromium } from "@playwright/test";

/**
 * Test Suite: Browser Context & Multi-Page Handling
 * Objective: Demonstrate browser context usage, popup handling,
 *            new tab handling, and authentication handling.
 */

/**
 * MANUAL BROWSER CONTEXT (DEMO ONLY)
 */

test.skip("Browser → Context → Page (Manual Control)", async () => {

    const browser = await chromium.launch();

    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto("https://playwright.dev/");
    await page2.goto("https://www.selenium.dev/");

    await expect(page1).toHaveTitle(/Playwright/);
    await expect(page2).toHaveTitle(/Selenium/);

    await browser.close();
});

/**
 * POPUP HANDLING USING CONTEXT
 */

test("Handle Popup Windows using Context", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    const [popup] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("#PopUp").click()
    ]);

    const pages = context.pages();

    console.log("Total pages:", pages.length);

    for (const p of pages) {

        console.log("URL:", p.url());

        const title = await p.title();

        if (title.includes("Playwright")) {

            await p.click(".getStarted_Sjon"); // verify selector in real UI

            await p.close();
        }
    }
});

/**
 * NEW TAB HANDLING
 */

test.skip("Handle New Tab using Context", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("button:has-text('New Tab')").click()
    ]);

    const pages = context.pages();

    console.log("Total pages:", pages.length);

    for (const p of pages) {
        console.log("URL:", p.url());
    }
});

/**
 * BASIC AUTHENTICATION USING CONTEXT
 */

test("Handle Authentication using Context", async ({ browser }) => {

    const context = await browser.newContext({
        httpCredentials: {
            username: "admin",
            password: "admin"
        }
    });

    const page = await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("h3")).toBeVisible();
});