import { test, expect } from "@playwright/test";

/**
 * Topic: Playwright Codegen & Inspector
 * Purpose: Understanding auto test generation and debugging tools
 */

/**
 * -----------------------------
 * PLAYWRIGHT CODEGEN
 * -----------------------------
 *
 * Codegen is a built-in Playwright tool that:
 * - Automatically generates test scripts
 * - Records user actions in browser
 * - Helps beginners and QA engineers speed up automation
 *
 * Command:
 *
 * npx playwright codegen
 *
 * Save generated test to file:
 *
 * npx playwright codegen -o tests/codegenexample.spec.ts
 *
 * Run in specific browser:
 *
 * npx playwright codegen --browser chromium
 *
 * Run on mobile device simulation:
 *
 * npx playwright codegen --device="iPhone 15"
 *
 * Run with custom viewport:
 *
 * npx playwright codegen --viewport-size="1280,720"
 */

/**
 * -----------------------------
 * PLAYWRIGHT INSPECTOR
 * -----------------------------
 *
 * Playwright Inspector helps in:
 *
 * 1. Debugging test step-by-step
 * 2. Pausing execution using --debug mode
 * 3. Viewing auto-generated locators
 * 4. Recording actions visually
 * 5. Copying stable selectors
 *
 * Debug command:
 *
 * npx playwright test --debug
 *
 * Key benefit:
 * - Helps identify flaky locators
 * - Speeds up test development
 * - Improves test reliability
 */

test("Codegen and Inspector Learning Note", async () => {
    console.log("This file is for learning Playwright tools (Codegen & Inspector)");
});