// Playwright is a Module that provides a high-level API to control headless browsers over the DevTools Protocol. It is built by the same team that developed Puppeteer and is designed to be more reliable and faster than its predecessor.
import { test, expect } from "@playwright/test";


// test and expect are the two main functions provided by Playwright for writing tests. The test function is used to define a test case, while the expect function is used to make assertions about the state of the application being tested.
// expect used for assertions in Playwright tests. It allows you to check if certain conditions are met, such as whether an element is visible, whether a value is equal to an expected value, or whether a certain event has occurred. The expect function can be used in conjunction with various matchers to perform different types of assertions, such as toBeVisible(), toEqual(), toContain(), and many more. By using expect, you can ensure that your tests are validating the expected behavior of your application and catching any issues or bugs that may arise.

// syntax for test

// test("title of the test", () => {
//     // test code goes here
//     // step 1: navigate to the website
//     // step 2: perform some actions
//     // step 3: make assertions
// });

// page is Fixture like page, broweser, context, etc. that are provided by Playwright to interact with the web application being tested. The page fixture represents a single tab or window in the browser and provides methods for navigating to URLs, interacting with elements on the page, and making assertions about the state of the page. By using the page fixture, you can write tests that simulate user interactions with the web application and validate that it behaves as expected.
// async = Asynchronous programming is a programming paradigm that allows for non-blocking operations, meaning that the program can continue to execute other tasks while waiting for a long-running operation to complete. In JavaScript, asynchronous programming is typically achieved using callbacks, promises, or async/await syntax. Asynchronous programming is particularly useful in scenarios where there are I/O operations, such as network requests or file system access, that can take a significant amount of time to complete. By using asynchronous programming techniques, developers can improve the performance and responsiveness of their applications.
// await is a keyword in JavaScript that is used to pause the execution of an asynchronous function until a promise is resolved. It can only be used inside an async function and allows you to write asynchronous code in a more synchronous-looking manner. When the await keyword is encountered, the function will wait for the promise to resolve before continuing with the next line of code. This can help improve the readability and maintainability of your code by avoiding nested callbacks and making it easier to handle errors.

// soft assertion = one assertion used in one function
// hard assertion = multiple assertion used in one function = bad practise



// 1. validate a title of the page
test("validate the title of the page",async({ page }) => {
    // step 1: navigate to the website
    await page.goto("https://www.saucedemo.com/");
    let title: string = await page.title();
    console.log("the title of the page is: " + title);
    await expect(page).toHaveTitle("Swag Labs");
});



