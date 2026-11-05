import { type Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

/**
 * Проверяет, авторизован ли пользователь.
 * Если нет — выполняет логин через LoginPage.
 */
export async function ensureAuthenticated(page: Page, username: string = 'standard_user', password: string = 'secret_sauce'): Promise<void> {
  // Сначала пробуем просто перейти на главную — может, storageState работает
  await page.goto('/');
  
  // Проверяем, попали ли на Products (авторизованы)
  const title = page.locator('.title');
  const isAuthorized = await title.isVisible({ timeout: 3000 }).catch(() => false);
  
  if (isAuthorized) {
    // StorageState сработал — ничего не делаем
    return;
  }
  
  // StorageState не сработал — логинимся вручную
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
  await loginPage.expectSuccessfulLogin();
}