import { ensureAuthenticated } from '../../../fixtures/auth-helpers';
import { test, expect } from '../../../fixtures/page-objects';


test('problem_user: изображения товаров сломаны', async ({ page, productsPage }) => {
    await ensureAuthenticated(page, 'problem_user', 'secret_sauce');
    await productsPage.expectBrokenImages();
});