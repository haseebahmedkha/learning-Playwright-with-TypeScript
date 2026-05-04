// focus on Build In locators in Playwright

// Locators = to find web elements on the web page 
// Dom = Document Object Model, a programming interface for web documents. It represents the structure of a web page as a tree-like structure, where each node in the tree corresponds to an element on the page. The DOM allows developers to manipulate the content and structure of a web page using JavaScript, making it possible to create dynamic and interactive web applications. By using the DOM, developers can access and modify elements on the page, respond to user events, and create animations and other effects. Understanding the DOM is essential for web development and is a fundamental part of working with web technologies.


// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

import {test, expect, Locator} from "@playwright/test";

// Syntax of Test
// test("Test name", async({fixture}) => (
//     // test code goes here
//     // step 1: navigate to the website
//     // step 2: perform some actions
//     // step 3: make assertions
// ));

test("Verify Playwright Locators", async ({ page }) => {

    // 1.getByAltText() to locate an element, usually image, by its text alternative.
    await page.goto("https://demo.nopcommerce.com/");
    const logo: Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    // 2. getByText() to locate by text content.
    await expect(page.getByText("Welcome to our store")).toBeVisible();

    // 3. getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole("link", { name: "Register" }).click();
    await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();


    // 4. getByLabel() to locate a form control by associated label's text. like signup form, login form, etc.
    await page.getByLabel("First name:").fill("John");
    await page.getByLabel("Last name:").fill("Doe");
    await page.getByLabel("Email:").fill("haseebahmed.sqa.eng@gmail.com");

    // 5. getByPlaceholder() to locate an input by placeholder. for example, dont have labels like search box, etc. which has placeholder attribute in the html code.
    await page.getByPlaceholder("Search store").fill("Laptop");

    // 6. getByTitle() to locate an element by its title attribute.

    page.getByTitle("nopCommerce demo store").click();
    await expect(page.getByRole("heading", { name: "Welcome to our store" })).toBeVisible();

    // 7. getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    await page.getByTestId("newsletter-email").fill("haseeb");

})