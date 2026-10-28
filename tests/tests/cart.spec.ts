import { test, expect } from '@playwright/test';

test('добавление товара в корзину', async ({ page }) => {
  // Логинимся
  await page.goto('/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  
  // Добавляем первый товар в корзину
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Добавляем второй товар в корзину
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  
  // Проверяем, что счётчик корзины показывает 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  
  // Открываем корзину
  await page.locator('.shopping_cart_link').click();

  // Ждем когда загрузица страница корзины
  await expect(page.locator('.title')).toHaveText('Your Cart');
  
  // Проверяем, что первый товар в корзине
  await expect(page.locator('.cart_item').filter({ hasText: 'Sauce Labs Backpack' }).locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  
  // Проверяем цену первого товара
  await expect(page.locator('.cart_item').filter({ hasText: 'Sauce Labs Backpack' }).locator('.inventory_item_price')).toHaveText('$29.99');
  
    // Проверяем, что второй товар в корзине
  await expect(page.locator('.cart_item').filter({ hasText: 'Sauce Labs Bike Light' }).locator('.inventory_item_name')).toHaveText('Sauce Labs Bike Light');
  
  // Проверяем цену второго товара
    await expect(page.locator('.cart_item').filter({ hasText: 'Sauce Labs Bike Light' }).locator('.inventory_item_price')).toHaveText('$9.99');
});