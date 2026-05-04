import { test, expect } from '@playwright/test';
// this is automatically generated ny codegen and saved automatically
test('test', async ({ page }) => {
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