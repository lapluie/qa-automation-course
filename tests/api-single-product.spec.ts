import { test, expect } from '@playwright/test';

test('получение конкретного товара', async ({ request }) =>{
    const productId = 1;

    const response = await request.get(`https://fakestoreapi.com/products/${productId}`);

    expect(response.status()).toBe(200);

    const product = await response.json();

    // Проверяем что вернулся нужный товар
    expect(product.id).toBe(productId);

    // Проверяем обязательные поля
    expect(product.title).toBeTruthy();
    expect(product.price).toBeGreaterThan(0);
});