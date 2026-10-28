import { test, expect } from '@playwright/test';

test('логин с неверным паролем', async ({ page }) => {
    await page.goto('/');

    await page.locator('#user-name').fill('standart_user');
    await page.locator('#password').fill('wrong_password');
    await page.locator('#login-button').click();

    // Проверяем, что появилась ошибка 
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});