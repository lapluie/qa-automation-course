import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test('добавление товаров в корзину', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Логинимся
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Добавляем товары
  await productsPage.addProductToCart('sauce-labs-backpack');
  await productsPage.addProductToCart('sauce-labs-bike-light');

  // Проверяем счетчик
  const cartCount = await cartPage.getCartCount();
  expect(cartCount).toBe(2);

  // Открываем корзину
  await cartPage.openCart();

  // Проверяем первый товар
  await cartPage.expectProductInCart('Sauce Labs Backpack');
  const backpackPrice = await cartPage.getProductPrice('Sauce Labs Backpack');
  expect(backpackPrice).toBe('$29.99');

  // Проверяем второй товар
  await cartPage.expectProductInCart('Sauce Labs Bike Light');
  const bikeLightPrice = await cartPage.getProductPrice('Sauce Labs Bike Light');
  expect(bikeLightPrice).toBe('$9.99');
});