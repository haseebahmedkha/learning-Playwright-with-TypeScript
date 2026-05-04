import {test, expect} from '@playwright/test';


// there two type of Auto wait
// one is for Test which is default by 3 seconds (30000 miliseonds)
// second for assertion like Expect = 10000 miliseconds 
test("Validate the test.........",async({page})=>{

    // you can set manually like this 
    test.setTimeout(120000);
    expect(page.locator).toBeVisible({ timeout: 10_000 })


});


// Now there is another thing that one is Auto Retriveing and no Auto

// 1. auto retrieving Assertion is used for to get any promise and work with await 
await expect(loacator).toBeChecked();
// 2. non retring Assertion and without no need to wait for return any promise
expect(locator).toBe();


test("Playwright Assertion Demo",async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    // 1. Auto-retrying Assertion
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect(page.locator("")).toBeVisible();
    await expect(page.locator("")).toHaveText("any visible Text");

    // 2. Non-retrying Assertion
    const title = await page.title();
    expect(page.locator("")).toBe("");

    // 3. Negative retrying Assetion (not) applicable for both auto or non auto
    const titleOofthewebsite = await page.title();
    expect(page.locator("")).not.toBe("");

});


test("Hard and Soft Assertion",async({page})=>{
    // hard Assertion 
    // when the first assertion got failed others assertion not executes
    await page.goto("");
    await expect(page.locator("")).toBeVisible(); // if failed
    expect(page.locator("")).toBeTruthy; // this assertion show showing and not executed

    // soft Assertion
    // when first assertion got failed the others are excuted
    // so we Soft Keyword for this like below
    await expect.soft(page.locator("")).toBeVisible(); // if failed
    expect.soft(page.locator("")).toBeTruthy; // this will work
    

    

});