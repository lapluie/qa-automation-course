import { test, expect } from '@playwright/test';

test('получение списка товаров', async ({ request }) => {
    // Отправляем GET запрос
    const response = await request.get('https://fakestoreapi.com/products');

    // Проверяем статус-код (200 = успех)
    expect(response.status()).toBe(200);

    // Получаем JSON ответ
    const products = await response.json();

    // Проверяем, что вернул массив
    expect(Array.isArray(products)).toBe(true);

    // Проверяем, что массив не пустой
    expect(products.length).toBeGreaterThan(0);

    // Проверяем структуру первого товара
    const firtsProduct = products[0];
    expect(firtsProduct).toHaveProperty('id');
    expect(firtsProduct).toHaveProperty('title');
    expect(firtsProduct).toHaveProperty('price');
});