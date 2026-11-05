import { test, expect } from '../../fixtures/page-objects';

test('locked user: попытка логина', async ({ page }) => {
  await page.goto('/');
  await page.locator('#user-name').fill('locked_out_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  
  await expect(page.locator('[data-test="error"]')).toHaveText(
    'Epic sadface: Sorry, this user has been locked out'
  );
});