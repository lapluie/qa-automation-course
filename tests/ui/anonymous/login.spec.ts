import { test, expect } from '../../../fixtures/page-objects';

test('успешный логин', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page.locator('.title')).toHaveText('Products');
});