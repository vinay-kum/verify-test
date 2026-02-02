import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.oappsnet.com/');
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Oracle Cloud Financials' }).click();
});