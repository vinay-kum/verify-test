import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.oappsnet.com/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page.locator('iframe[title="Select a Date & Time - Calendly"]').contentFrame().locator('#root')).toContainText('Thomas Korbecki');
});