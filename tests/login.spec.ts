// tests/example.test.ts

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
});

test.describe('SauceDemo', () => {
  test('Login with valid credentials', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
  });
});
