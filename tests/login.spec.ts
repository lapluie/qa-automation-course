import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('успешный логин', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page.locator('.title')).toHaveText('Products');
});