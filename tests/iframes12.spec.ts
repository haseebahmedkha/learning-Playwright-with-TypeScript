import {test, expect, Frame, FrameLocator, Locator} from '@playwright/test';
import { text } from 'node:stream/consumers';


test.beforeEach(async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
});



test("validate the Iframe handling with frame method ", async ({page}) => {
    // frame method only works with link or name or id of the frame
    const frame = page.frames();
    console.log("Total Number of Frames in the Page: " + frame.length);
    expect(frame.length).toBe(7); // Assert that there are 3 frames in the page


    const firstframe: Frame | any = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    const textbox = firstframe.locator("xpath=//input[@name='mytext1']");
    textbox.fill("Haseeb Ahmed");
    const actualText : any = await textbox.textContent();
    const expectedText : any = "Frame1";
    expect(actualText).toBe(expectedText); // Assert the text in the first frame
    await page.waitForTimeout(2000);


});


test("validate the Iframe handling with frameLocator method ", async ({page}) => {
    // frameLocator method works with any selector for the frame
    const frameLocator: FrameLocator = page.frameLocator("[src='frame_2.html']");
    const textbox: Locator = frameLocator.locator("xpath=//input[@name='mytext2']");
    await textbox.fill("Haseeb Ahmed");

});

test.only("Validate the Iframe of Child Iframe with Frame method or FrameLocator",async({page})=>{
    const frame3: Frame | null = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    const howManyFramesInside = frame3?.childFrames();
    // to fing how many child iframes 
    console.log("Total number of Frames inside Frame3:",howManyFramesInside?.length)

    // validate the checkbox of child iframe of iframe3
    const radio = howManyFramesInside?.[0].getByLabel("I am a human");
    const checked = await radio?.check();
    expect(radio).toBe(checked)



});



test.afterEach(async ({page}) => {
    await page.waitForTimeout(2000);
    page.close();
});


