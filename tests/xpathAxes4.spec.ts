import {test, expect, Locator} from '@playwright/test';


test("Verify XPath Axes", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // 1. self axis in XPath = used to select the current node or element. It is represented by a single dot (.) and is often used in conjunction with other axes to navigate through the DOM tree.
    const verifylocatorGermany: Locator = page.locator("//td[text()='Germany']/self::td"); // this will locate the td element that contains the text "Germany" and then select itself using self axis
    await expect(verifylocatorGermany).toHaveText("Germany");

    // 2. parent axis in XPath = used to select the parent node of the current node or element. It is represented by a double dot (..) and is often used to navigate up the DOM tree.
    const parentLocator: Locator = page.locator("//td[text()='Germany']/parent::tr"); // this will locate the td element that contains the text "Germany" and then select its parent tr element using parent axis
    await expect(parentLocator).toContainText("Germany");
    await expect(parentLocator).toContainText("Maria Anders Germany");
    console.log("Parent Element Text: " , await parentLocator.textContent());

    // 3. child axis in XPath = used to select the child nodes of the current node or element. It is represented by a single forward slash (/) and is often used to navigate down the DOM tree.
    const secondRowCells: Locator = page.locator("//table[@id='customers']//tr[2]/child::td"); // this will locate the second tr element of the table with id "customers" and then select its child td elements using child axis
    await expect(secondRowCells).toHaveCount(3); // this will verify that there are 3 td elements in the second row of the table
    
    // 4. ancestor axis in XPath = used to select all the ancestor nodes of the current node or element. It is represented by a double forward slash (//) followed by the ancestor axis keyword "ancestor" and is often used to navigate up the DOM tree.
    const ancestorLocator: Locator = page.locator("//td[text()='Germany']/ancestor::table"); // this will locate the td element that contains the text "Germany" and then select its ancestor table element using ancestor axis
    await expect(ancestorLocator).toHaveAttribute("id", "customers");
    console.log("Ancestor Element Tag Name: " , await ancestorLocator.evaluate(node => node.tagName)); // this will print the tag name of the ancestor element in the console

    // 5. descendant axis in XPath = used to select all the descendant nodes of the current node or element. It is represented by a double forward slash (//) followed by the descendant axis keyword "descendant" and is often used to navigate down the DOM tree.
    const descendantLocatorAllTd: Locator = page.locator("//table[@id='customers']/descendant::td"); // this will locate the table element with id "customers" and then select all its descendant td elements using descendant axis
    await expect(descendantLocatorAllTd).toHaveCount(18); // this will verify that there are 30 td elements in the table with id "customers"

    // 6. following axis in XPath = used to select all the sibling nodes that come after the current node or element. It is represented by a double forward slash (//) followed by the following-sibling axis keyword "following-sibling" and is often used to navigate horizontally in the DOM tree.
    const followingSiblingLocator: Locator = page.locator("//td[text()='Germany']/following::td");
    await expect(followingSiblingLocator).toHaveCount(15); // this will verify that there are 15 td elements that come after the td element that contains the text "Germany"

    //7. following-sibling axis in XPath = used to select all the sibling nodes that come after the current node or element. It is represented by a double forward slash (//) followed by the following-sibling axis keyword "following-sibling" and is often used to navigate horizontally in the DOM tree.
    const followingSiblingLocator2: Locator = page.locator("//td[text()='Germany']/following-sibling::td");
    await expect(followingSiblingLocator2).toHaveCount(1); // this will verify that there is 1 td element that comes after the td element that contains the text "Germany" and is a sibling of it

    // 8. preceding-sibling axis in XPath = used to select all the sibling nodes that come before the current node or element. It is represented by a double forward slash (//) followed by the preceding-sibling axis keyword "preceding-sibling" and is often used to navigate horizontally in the DOM tree.
    const precedingSiblingLocator: Locator = page.locator("//td[text()='Germany']/preceding::td");
    await expect(precedingSiblingLocator).toHaveCount(2); // this will verify that there are 2 td elements that come before the td element that contains the text "Germany" 
});