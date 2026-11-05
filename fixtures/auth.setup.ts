import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authDir = 'playwright/.auth';
const authFile = `${authDir}/user.json`;
const problemFile = `${authDir}/admin.json`;
const lockedFile = `${authDir}/locked.json`;

setup('authenticate as standard user', async ({ page }) =>{
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectSuccessfulLogin();

    await page.context().storageState({ path: authFile });
});

setup('authenticate as problem user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_sauce');
    await loginPage.expectSuccessfulLogin();

    await page.context().storageState({ path: problemFile });
});

setup('authenticate as locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await page.context().storageState({ path: lockedFile });
});