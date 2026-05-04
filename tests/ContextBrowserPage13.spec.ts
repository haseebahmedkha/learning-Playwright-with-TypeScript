import {test,expect,chromium} from '@playwright/test';
import path from 'node:path';



test.skip("Browser --> Context --> page",async()=>{
    // without Context you can never open new Page for multiple testing
    // without Context you cant Create a page 
    // first launch Brower --> then Context --> pages
    // playwrght buildin mechasim to launch pages when you pass your fixtures into the arrow funcion
    // without arrow function we can use like this manually
    // context support = pages --> newtab,newwindow,popus
    // why we use this concept working on a multiple projects 
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const playwright = await page1.goto("https://playwright.dev/dotnet/");
    const github = await page2.goto("https://www.selenium.dev/");
    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright .NET");
    await expect(page2).toHaveTitle("Selenium")
});


// 1. for pages we use event name called pages
// --> Promise.all([page.waitForEvent('page'),('the locator which you clicked')])
// 2. for popus we use event name called popup
// Promise.all([page.waitForEvent('popup'),('The locator which you clikcked)])

test("Validate the Popups using Context",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    // the method to handle the multiple popups

    await Promise.all([page.waitForEvent('popup'),(page.locator('#PopUp').click())]);
    const allPopuspages = context.pages();
    console.log("total number of open pages into a Context", allPopuspages.length);
    console.log(allPopuspages[0].url());
    console.log(allPopuspages[1].url());
    for(let pw of allPopuspages){
        const title = await pw.title();
        if (title === 'Playwright'){
            await pw.locator('.getStarted_Sjon').click();
            await pw.waitForTimeout(5000);
            await pw.close();
        }
            
    }
    await page.waitForTimeout(12000

    );


});

test.skip("validate the newpage using Context",async ({browser})=>{
    const context= await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    await Promise.all([context.waitForEvent('page'),page.locator("xpath=//button[normalize-space()='New Tab']").click()]);
    const totalPages = context.pages();
    console.log("total pages:",totalPages.length);

    // get the title of pages 
    console.log("first page web title:",totalPages[0].url());
    console.log("first page web title:",totalPages[1].url());
    await page.waitForTimeout(5000);
});

test("validate Authentication popop using context",async ({browser})=>{
    // the preferable Method
    const context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
    const page = await context.newPage();
    await page.goto("url");
    // wait for loading a page
    await page.waitForLoadState();
    await expect(page.locator('')).toBeVisible();
    await page.waitForTimeout(5000);

});