import { test, expect } from "@playwright/test";

/**
 * Topic: Test Grouping in Playwright (test.describe)
 * Purpose: Organize tests into logical groups for better structure and CI execution
 */

/**
 * --------------------------------------
 * RUN GROUP OF TESTS USING CLI
 * --------------------------------------
 *
 * Run specific group using grep:
 *
 * npx playwright test --grep "Group One"
 *
 * This will execute only tests matching "Group One"
 */

/**
 * --------------------------------------
 * GROUP ONE
 * --------------------------------------
 */

test.describe("Group One", () => {

    test("Test One - Group One", async () => {
        console.log("Executing Test One in Group One");
    });

    test("Test Two - Group One", async () => {
        console.log("Executing Test Two in Group One");
    });

    test("Test Three - Group One", async () => {
        console.log("Executing Test Three in Group One");
    });

});

/**
 * --------------------------------------
 * GROUP TWO
 * --------------------------------------
 */

test.describe("Group Two", () => {

    test("Test One - Group Two", async () => {
        console.log("Executing Test One in Group Two");
    });

    test("Test Two - Group Two", async () => {
        console.log("Executing Test Two in Group Two");
    });

    test("Test Three - Group Two", async () => {
        console.log("Executing Test Three in Group Two");
    });

});