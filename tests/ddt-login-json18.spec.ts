import {test,expect} from '@playwright/test';
import fs from 'fs';



const dataPath = 'testdata/testdata.json';
const url:string = "https://demowebshop.tricentis.com/login"; 
// reading data from JSON File
const logindata : any = JSON.parse(fs.readFileSync(dataPath,'utf-8'));
for(const {email,password,validity} of logindata){
    test.describe("test Login",async ()=>{
        test(`login test for ${email} and ${password}`,async({page})=>{
            await page.goto(url);
            await page.locator("#Email").fill(email);
            await page.locator("#Password").fill(password)
            page.locator("xpath=//input[@value='Log in']").click()
            const errorMessage:string = "Login was unsuccessful. Please correct the errors and try again.";
            const errorMessageLocator = page.locator("xpath=//span[contains(text(),'Login was unsuccessful. Please correct the errors ')]");
            const logout = page.locator(".ico-logout");
            if(validity.toLowerCase() === 'valid'){
                await expect(logout).toBeVisible()
                await logout.click();
            }
            else{
                expect(errorMessageLocator).toHaveText(errorMessage);
                expect(page).toHaveURL(url);
            }

        })
    })
}