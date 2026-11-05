import { test, expect } from '../../fixtures/page-objects';
import { ensureAuthenticated } from '../../fixtures/auth-helpers';

test('добавление товаров в корзину', async ({ page, productsPage, cartPage }) => {

  await ensureAuthenticated(page, 'standard_user', 'secret_sauce');

  await productsPage.expectPageLoaded();
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