import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.oracle.com/');
  await page.getByRole('button', { name: 'Industries' }).click();
  await page.getByRole('link', { name: 'All industries' }).click();
  await page.getByRole('button', { name: 'Resources', exact: true }).click();
});