import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.oappsnet.com/');
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
});