import {test, expect, Locator} from '@playwright/test';


test("Verify Css locatoes", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    // 1. tag with id = used to locate an element based on its tag name and unique id attribute. It is represented by the tag name followed by a hash symbol (#) and the id value.
    const searchInput = page.locator("input#small-searchterms");
    await searchInput.fill("laptop");
    await expect(searchInput).toBeVisible();
    await page.waitForTimeout(3000);

    // 2. tag with class = used to locate an element based on its tag name and class attribute. It is represented by the tag name followed by a dot (.) and the class value.
    const searchText = page.locator("input.search-box-text");
    await expect(searchText).toBeVisible();

    // 3. tag with any attribute = used to locate an element based on its tag name and any attribute value. It is represented by the tag name followed by square brackets [] containing the attribute name and value.
    await page.locator("input[name=q]").fill("laptop");
    await page.waitForTimeout(3000);


});
