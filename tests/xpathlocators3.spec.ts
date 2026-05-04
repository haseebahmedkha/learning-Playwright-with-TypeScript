import {test, expect, Locator} from "@playwright/test";


// focus on XPath locators in Playwright

test("Verify XPath Locators", async ({ page }) => {

    // 1. Absolute XPath = starts with a single forward slash (/) and specifies the path from the root element to the target element. It is not recommended to use absolute XPath as it is brittle and can break easily if there are any changes in the DOM structure.
    await page.goto("https://demowebshop.tricentis.com/");

    const absolutelogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(absolutelogo).toBeVisible();

    // 2. Relative XPath = starts with a double forward slash (//) and allows you to locate elements based on their attributes, text content, or position in the DOM. It is more flexible than absolute XPath and is recommended to use in most cases.
    const relativelogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativelogo).toBeVisible();

    // 3. contains() function in XPath = used to locate elements that contain a specific text or attribute value. It is useful when the exact value of the attribute or text is not known, but you want to find elements that contain a certain keyword or phrase.
    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const productCount: number = await products.count();
    console.log("Number of products found: " , productCount);
    // expect(productCount).toBeGreaterThan(0);

    // capture the text of the first product and print it in the console
    console.log("First Computer Product:" , await products.first().textContent());

    // capture the text of the last product and print it in the console
    console.log("Last Computer Product:" , await products.last().textContent());
    
    // capture the text of the second product and print it in the console
    console.log("Second Computer Product:" , await products.nth(2).textContent());
    

    // capture the text of all the products and print it in the console
    let productsTitle: string[] = await products.allTextContents();
    for(let pt of productsTitle)
    {
        console.log(pt)
    }


    // 4. starts-with() function in XPath = used to locate elements that start with a specific text or attribute value. It is useful when you want to find elements that have a common prefix in their attribute values or text content.
    const buildingProducts: Locator = page.locator("//h2/a[starts-with(@href,'/build')]") // this will locate all the products that start with /build in their href attribute
    const numberofBuildingProducts: number = await buildingProducts.count();
    expect(numberofBuildingProducts).toBeGreaterThan(0);

    // 5. text() function in XPath = used to locate elements based on their text content. It is useful when you want to find elements that have a specific text value.
    const reglink: Locator = page.locator("//a[text()='Register']")
    await expect(reglink).toBeVisible();

    // 6. last() function in XPath = used to locate the last element in a set of elements. It is useful when you want to find the last occurrence of an element that matches a certain criteria.
    const lastItem:Locator = page.locator("//div[@class='column follow-us']//li[last()]") // this will locate the last social media link in the follow us section
    await expect(lastItem).toBeVisible();
    console.log("Last Social Media Link: " , await lastItem.textContent());

    // 7. position() function in XPath = used to locate elements based on their position in a set of elements. It is useful when you want to find the nth occurrence of an element that matches a certain criteria.
    const secondItem:Locator = page.locator("//div[@class='column follow-us']//li[position()=2]") // this will locate the second social media link in the follow us section
    await expect(secondItem).toBeVisible();
    console.log("Second Social Media Link: " , await secondItem.textContent());
});