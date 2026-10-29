// import { test, expect } from '@playwright/test';

// test('создание нового товара', async ({ request }) => {
//     const newProduct = {
//         title: 'Тестовый товар',
//         price: 100,
//         description: 'Описание тестового товара',
//         categoty: 'electronics',
//         image: 'https://example.com/image.jpg'
//     };

//     // Оптправляем POST-запрос с телом
//     const response = await request.post('https://fakestoreapi.com/products', {
//         data: newProduct
//     });

//     // Проверяем статуст-код (201 = создано)
//     expect(response.status()).toBe(201) 

//     // Получаем ответ
//     const createProduct = await response.json();

//     // Проверяем что сервер вернул ID
//     expect(createProduct).toHaveProperty('id');

//     // Проверяем что данные сохранились
//     expect(createProduct.title).toBe('Тестовый товар');
//     expect(createProduct.price).toBe(100);
// });