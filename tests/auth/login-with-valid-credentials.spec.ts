import { test, expect } from '@playwright/test';

/**
 * Login with valid credentials
 * Module: Auth
 *
 * This test was recorded with Playwright and structured by FlowProof.
 */
test.describe('Auth @auth', () => {
  test('Login with valid credentials @smoke', async ({ page }) => {
  await page.goto('https://www.oappsnet.com/');
  await page.getByRole('link', { name: 'Company' }).click();
});
});
