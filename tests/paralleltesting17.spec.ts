import { test } from "@playwright/test";

/**
 * Topic: Playwright Test Execution Modes
 * --------------------------------------
 * 1. Serial Execution
 *    → Tests run one after another
 *
 * 2. Parallel Execution
 *    → Tests run simultaneously (faster execution)
 *
 * --------------------------------------
 * CONFIG OPTIONS
 * --------------------------------------
 *
 * In playwright.config.ts:
 *
 * fullyParallel: true  → enables parallel execution globally
 * fullyParallel: false → disables global parallel execution
 */

/**
 * --------------------------------------
 * PARALLEL MODE (GROUP LEVEL)
 * --------------------------------------
 */
test.describe.configure({ mode: "parallel" });

test("Test One", async () => {
    console.log("1. Welcome Haseeb");
});

test("Test Two", async () => {
    console.log("2. Welcome Haseeb");
});

test("Test Three", async () => {
    console.log("3. Welcome Haseeb");
});

/**
 * --------------------------------------
 * SERIAL MODE (COMMENTED EXAMPLE)
 * --------------------------------------
 *
 * test.describe.configure({ mode: "serial" });
 *
 * Used when:
 * - tests depend on each other
 * - shared state is required
 *
 */

/**
 * --------------------------------------
 * RUN SPECIFIC PROJECT / WORKER
 * --------------------------------------
 *
 * Command:
 * npx playwright test paralleltesting17.spec.ts --project=chromium
 */