import {test,expect} from '@playwright/test';

const testData: string[][] = [['haseebahmed.sqa.eng@gmail.com','test123','valid'],
                            ['haseeb@gmail.com','test123','invalid'],
                        ['haseebahmed@gmail.com','test123','invalid'],
                    ['','','invalid']]
const url: string = "https://demowebshop.tricentis.com/login";

for(const [email,password,validity] of testData){
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