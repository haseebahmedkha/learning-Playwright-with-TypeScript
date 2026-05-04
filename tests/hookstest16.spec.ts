import { test, expect } from "@playwright/test";

/**
 * Topic: Playwright Hooks
 * Purpose: Setup and teardown control for test execution
 */

/**
 * --------------------------------------
 * TYPES OF HOOKS
 * --------------------------------------
 *
 * 1. beforeAll    → runs once before all tests
 * 2. afterAll     → runs once after all tests
 * 3. beforeEach   → runs before every test
 * 4. afterEach    → runs after every test
 */

/**
 * --------------------------------------
 * TEST GROUP (BEST PRACTICE)
 * --------------------------------------
 */

test.describe("Group One - Hooks Demo", () => {

    test.beforeAll(async () => {
        console.log("Before ALL tests in Group One");
    });

    test.afterAll(async () => {
        console.log("After ALL tests in Group One");
    });

    test.beforeEach(async () => {
        console.log("Before EACH test in Group One");
    });

    test.afterEach(async () => {
        console.log("After EACH test in Group One");
    });

    test("Test One", async () => {
        console.log("Executing Test One");
    });

    test("Test Two", async () => {
        console.log("Executing Test Two");
    });

    test("Test Three", async () => {
        console.log("Executing Test Three");
    });
});