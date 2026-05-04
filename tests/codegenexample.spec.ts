import { test, expect } from '@playwright/test';


/**
 * Test Suite: Demo Web Shop - Codegen Refined Test
 * Purpose: Validate basic UI elements using Playwright best practices
 */

test("Verify Demo Web Shop homepage and login elements", async ({ page }) => {

    // Navigate to application
    await page.goto("https://demowebshop.tricentis.com/");

    // Validate homepage logo (stable role-based locator)
    await expect(
        page.getByRole("link", { name: "Tricentis Demo Web Shop" })
    ).toBeVisible();

    // Validate search input visibility
    const searchBox = page.locator("#small-searchterms");
    await expect(searchBox).toBeVisible();

    // Validate login navigation
    await page.getByRole("link", { name: "Log in" }).click();

    // Validate login page elements
    await expect(page.getByRole("textbox", { name: "Email:" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Password:" })).toBeVisible();

    // Validate login button
    await expect(page.getByRole("button", { name: "Log in" })).toBeVisible();

    // Validate remember me checkbox label
    await expect(page.getByText("Remember me?")).toBeVisible();
});


// this is automatically generated ny codegen and saved automatically
test('test by codegen', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  await page.locator('#small-searchterms').click();
  await expect(page.locator('input[type="submit"]')).toContainText('Search');
  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('textbox', { name: 'Email:' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password:' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
  await expect(page.getByText('Remember me?')).toBeVisible();
});