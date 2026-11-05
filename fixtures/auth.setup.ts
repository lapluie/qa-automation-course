import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authDir = 'playwright/.auth';
const authFile = `${authDir}/user.json`;
const problemFile = `${authDir}/problem.json`;
const lockedFile = `${authDir}/locked.json`;



setup('authenticate as standard user', async ({ page }) =>{
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectSuccessfulLogin();

    await page.waitForTimeout(1000);

    await page.evaluate(() => {
        localStorage.setItem('session-username', 'standard_user');
    });

    await page.context().storageState({ path: authFile });
});

setup('authenticate as problem user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_sauce');
    await loginPage.expectSuccessfulLogin();

    await page.waitForTimeout(1000);

    await page.evaluate(() => {
        localStorage.setItem('session-username', 'problem_user');
    });

    await page.context().storageState({ path: problemFile });
});

setup('authenticate as locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.expectErrorVisible();

    // Для locked_out_user сессии нет, но ждём немного на всякий случай
    await page.waitForTimeout(500);

    await page.context().storageState({ path: lockedFile });
});