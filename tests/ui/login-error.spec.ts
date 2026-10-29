import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('логин с неверным паролем', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_passwort');

    await loginPage.expectErrorVisible();
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Username and password do not match');
});