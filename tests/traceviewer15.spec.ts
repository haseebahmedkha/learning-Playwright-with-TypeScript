import { test } from "@playwright/test";

/**
 * Topic: Playwright Trace Viewer & Flaky Test Handling
 * Purpose: Understanding debugging tools and test stability strategies
 */

/**
 * --------------------------------------
 * TRACE VIEWER (DEBUGGING TOOL)
 * --------------------------------------
 *
 * Trace Viewer is used to debug failed Playwright tests.
 * It records:
 * - Actions performed
 * - DOM snapshots
 * - Network calls
 * - Screenshots
 * - Console logs
 *
 * 👉 Very useful for analyzing test failures visually
 */

/**
 * --------------------------------------
 * WAYS TO ENABLE TRACE
 * --------------------------------------
 *
 * 1. Using Playwright Config (recommended)
 *
 *    trace: "on" | "retain-on-failure"
 *
 * 2. Using CLI
 *
 *    npx playwright test mytest.spec.ts --trace on
 *
 * 3. Programmatically (advanced)
 *
 *    const context = await browser.newContext();
 *    await context.tracing.start({ screenshots: true, snapshots: true });
 *
 *    // test steps
 *
 *    await context.tracing.stop({ path: "trace.zip" });
 */

/**
 * --------------------------------------
 * VIEW TRACE FILE
 * --------------------------------------
 *
 * 1. HTML Report
 *    npx playwright show-report
 *
 * 2. CLI Viewer
 *    npx playwright show-trace trace.zip
 *
 * 3. Online Tool
 *    https://trace.playwright.dev/
 *    (drag and drop trace.zip file)
 */

/**
 * --------------------------------------
 * FLAKY TESTS
 * --------------------------------------
 *
 * Flaky tests = tests that sometimes pass and sometimes fail
 *
 * Causes:
 * - Network delays
 * - Slow UI rendering
 * - Timing issues
 * - Unstable environment
 *
 * --------------------------------------
 * RETRY MECHANISM
 * --------------------------------------
 *
 * Playwright supports automatic retries:
 *
 * In config file:
 *
 * retries: process.env.CI ? 2 : 0
 *
 * For local environment:
 *
 * retries: 3
 *
 * CLI usage:
 *
 * npx playwright test test.spec.ts --retries=3
 */

/**
 * Dummy test file (documentation purpose only)
 */
test("Trace and Flaky Test Notes", async () => {
    console.log("This file documents Playwright Trace Viewer & Flaky test handling");
});