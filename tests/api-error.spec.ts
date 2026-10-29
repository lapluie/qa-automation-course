import { test, expect } from '@playwright/test';

test('запрос несуществующего товара', async ({ request }) => {
    const nonExistentId = 99999;

    const response = await request.get(`https://fakestoreapi.com/products/${nonExistentId}`);

    // Статус 200 - это особенность этого API
    expect(response.status()).toBe(200);

    // Получаем пустой текст (не пытаемся парсить как JSON)
    const text = await response.text();

    // Проверяем что тело пустое (товар не найден)
    expect(text).toBe('');
    console.log('Ответ для несуществующего товара:', text);
});