import { test, expect, Frame, FrameLocator, Locator } from "@playwright/test";

/**
 * Test Suite: iFrame Handling in Playwright
 * Objective: Validate single and nested iframe interactions
 *            using Frame API and FrameLocator API.
 */

test.beforeEach(async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
});

/**
 * FRAME METHOD - Direct frame access
 */

test("Validate iframe using Frame method", async ({ page }) => {

    const frames = page.frames();

    console.log("Total Frames:", frames.length);

    const frame1: Frame | undefined = page.frame({
        url: "https://ui.vision/demo/webtest/frames/frame_1.html"
    });

    if (!frame1) throw new Error("Frame1 not found");

    const textbox = frame1.locator("input[name='mytext1']");

    await textbox.fill("Haseeb Ahmed");

    await expect(textbox).toHaveValue("Haseeb Ahmed");
});

/**
 * FRAMElOCATOR METHOD
 */

test("Validate iframe using FrameLocator method", async ({ page }) => {

    const frameLocator: FrameLocator = page.frameLocator("[src='frame_2.html']");

    const textbox: Locator = frameLocator.locator("input[name='mytext2']");

    await textbox.fill("Haseeb Ahmed");

    await expect(textbox).toHaveValue("Haseeb Ahmed");
});

/**
 * NESTED IFRAME HANDLING
 */

test("Validate nested iframe inside Frame 3", async ({ page }) => {

    const frame3: Frame | null = page.frame({
        url: "https://ui.vision/demo/webtest/frames/frame_3.html"
    });

    if (!frame3) throw new Error("Frame3 not found");

    const childFrames = frame3.childFrames();

    console.log("Child Frames Count:", childFrames.length);

    const childFrame = childFrames[0];

    const checkbox = childFrame.getByLabel("I am a human");

    await checkbox.check();

    await expect(checkbox).toBeChecked();
});

/**
 * AFTER EACH CLEANUP
 */

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
});