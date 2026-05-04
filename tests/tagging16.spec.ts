import { test } from "@playwright/test";

/**
 * Topic: Playwright Test Tagging (GREP Filtering)
 * Purpose: Run specific groups of tests in CI/CD pipelines
 */

/**
 * --------------------------------------
 * WHY TAGGING IS USED
 * --------------------------------------
 *
 * Tags help to:
 * - Run specific test groups (smoke, sanity, regression)
 * - Improve CI/CD execution speed
 * - Organize large test suites
 */

/**
 * --------------------------------------
 * RUN TESTS USING TAGS (CLI)
 * --------------------------------------
 *
 * Run only sanity tests:
 * npx playwright test --grep "@sanity"
 *
 * Run sanity AND regression:
 * npx playwright test --grep "(?=.*@sanity)(?=.*@regression)"
 *
 * Run sanity OR regression:
 * npx playwright test --grep "@sanity|@regression"
 *
 * Run sanity BUT NOT regression:
 * npx playwright test --grep "@sanity" --grep-invert "@regression"
 */

/**
 * --------------------------------------
 * METHOD 1: TAGS IN TEST NAME
 * --------------------------------------
 */

test("@sanity Login Test Case", async () => {
    console.log("Sanity test execution");
});

test("@sanity @regression Checkout Test Case", async () => {
    console.log("Multi-tag test execution");
});

/**
 * --------------------------------------
 * METHOD 2: TAGS USING OPTIONS
 * --------------------------------------
 */

test("Regression Test Case", { tag: "@regression" }, async () => {
    console.log("Regression test execution");
});

test("Smoke + Sanity Test Case", { tag: ["@smoke", "@sanity"] }, async () => {
    console.log("Multiple tag execution");
});