import { test, expect } from '@playwright/test';

test.describe('Playwright Website', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link navigates to intro page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/.*intro/);
  });

  test('can search documentation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByPlaceholder('Search docs')).toBeVisible();
  });
});
