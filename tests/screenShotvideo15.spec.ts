import {test,expect, Locator} from '@playwright/test'

// another thing we can enable screen shots from config file 
// option =    1. on 
            // 2. off
            // 3. success
            // 4. failure
//             use: {
//     /* Base URL to use in actions like `await page.goto('')`. */
//     // baseURL: 'http://localhost:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//     screenshot: 'only-on-failure',
//     and for video 
//     video:'on',
//   },

const url:string = "https://demowebshop.tricentis.com/";
const savingLocation = 'screenshots/';
const format = '.png';
const currentDate: number = Date.now();
// ScreenShot
test("Take ScreenShot of a page and full Page",async({page})=>{
    await page.goto(url);
    // await page.screenshot({ path: `${savingLocation}page${format}` });

    // for full page screenshot 
    await page.screenshot({ path: `${savingLocation}page-${currentDate}${format}`,fullPage:true });

});

test.skip("take a SS for a Perticular locator like logo and other things",async({page})=>{
    await page.goto(url);
    const logo: Locator = page.locator("img[alt='Tricentis Demo Web Shop']");
    await logo.screenshot({ path: `${savingLocation}logo-${currentDate}${format}`});
});

test.only("take a SS for a Perticular feature Products",async({page})=>{
    await page.goto(url);
    const logo: Locator = page.locator(".product-grid.home-page-product-grid.");
    await logo.screenshot({ path: `${savingLocation}products-${currentDate}${format}`});
});
