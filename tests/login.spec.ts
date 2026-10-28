import { test, expect } from '@playwright/test';

test('успешный логин', async ({ page }) => {
    // 1. Открываем главную страницу (baseUrl из кончфига)
    await page.goto('/');

    // 2. Заполняем логин
    await page.locator('#user-name').fill('standard_user');

    // 3. Заполняем пароль
    await page.locator('#password').fill('secret_sauce');

    // 4. Кликаем кнопку Login
    await page.locator('#login-button').click();

    // 5. Проверяем что попали на страницу Products
    await expect(page.locator('.title')).toHaveText('Products');
})