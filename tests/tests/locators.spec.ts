import { test, expect } from '@playwright/test';

test('разные типы локаторов', async ({ page }) => {
    await page.goto('/');

    // 1. По ID (то, что ты уже знаешь)
    await page.locator('#user-name').fill('standard_user');

    // 2. По placeholder (атрибут placeholde в инпуте)
    await page.locator('[placeholder="Password"]').fill('secret_sauce');

    // 3. По роли и имени (самый надежный способ!)
    await page.getByRole('button', { name: 'Login' }).click();

    // 4. По тексту внутри элемента 
    await expect(page.getByText('Products')).toBeVisible();

    // 5. По CSS-классу 
    await expect(page.locator('.title')).toHaveText('Products');
});