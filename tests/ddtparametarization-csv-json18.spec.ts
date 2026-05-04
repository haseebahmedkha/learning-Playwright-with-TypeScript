import { expect,test } from "@playwright/test"


// 1st DDT Aproach Using For OF Loop
const searchItems:string[] = ['laptop','Gift card','smartphone','monitors'];

// for(const searchItem of searchItems){
//     test(`test for ${searchItem}`,async({page})=>{
//         await page.goto("https://demowebshop.tricentis.com/");
//         await page.locator("#small-searchterms").fill(searchItem);
//         await page.locator("xpath=//input[@value='Search']").click();
//         await expect.soft(page.locator('h2 a').nth(0)).toContainText(searchItem,{ignoreCase:true});
//     });
// }


// 2st DDT Aproach Using For Each Loop
// searchItems.forEach((searchItem)=>{
//     test(`test for ${searchItem}`,async({page})=>{
//         await page.goto("https://demowebshop.tricentis.com/");
//         await page.locator("#small-searchterms").fill(searchItem);
//         await page.locator("xpath=//input[@value='Search']").click();
//         await expect.soft(page.locator('h2 a').nth(0)).toContainText(searchItem,{ignoreCase:true});
//     });
// })


// // 3rd DDT Aproach Using For Each Loop with Describe
test.describe("1st Group",async()=>{
    searchItems.forEach((searchItem)=>{
    test(`test for ${searchItem}`,async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("#small-searchterms").fill(searchItem);
        await page.locator("xpath=//input[@value='Search']").click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(searchItem,{ignoreCase:true});
    });
})

})

