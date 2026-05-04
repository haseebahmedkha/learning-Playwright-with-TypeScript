import { test } from "@playwright/test";

/**
 * Topic: Playwright Test Annotations
 * Purpose: Control test execution behavior
 *
 * --------------------------------------
 * TYPES OF ANNOTATIONS
 * --------------------------------------
 *
 * 1. test.only()   → run ONLY this test
 * 2. test.skip()   → skip test execution
 * 3. test.fail()   → expect test to fail
 * 4. test.fixme()  → known issue, skip for now
 * 5. test.slow()   → increases timeout for slow tests
 */

/**
 * --------------------------------------
 * ONLY
 * --------------------------------------
 * Runs only this test (used for debugging)
 */
test.only("Only - Debug Test", async () => {
    console.log("This is the only running test");
});

/**
 * --------------------------------------
 * SKIP
 * --------------------------------------
 * Skips execution of this test
 */
test.skip("Skip - Not Ready Test", async () => {
    console.log("This test will be skipped");
});

/**
 * --------------------------------------
 * FAIL
 * --------------------------------------
 * Marks test as expected to fail
 */
test.fail("Fail - Known Bug Test", async () => {
    console.log("This test is expected to fail");
});

/**
 * --------------------------------------
 * FIXME
 * --------------------------------------
 * Used for incomplete / broken tests
 */
test.fixme("Fixme - Work in Progress Test", async () => {
    console.log("This test is marked as fixme and will not run");
});

/**
 * --------------------------------------
 * SLOW
 * --------------------------------------
 * Increases timeout for this test (slow execution allowed)
 */
test("Slow - Heavy Test", async ({ page }) => {
    test.slow();

    console.log("This test will run with extended timeout");
});