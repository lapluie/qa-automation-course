import { test, expect } from '../../../fixtures/page-objects';


test('problem_user: изображения товаров сломаны', async ({ productsPage }) => {
    await productsPage.expectBrokenImages();
});