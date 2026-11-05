import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: 1,
  reporter: 'html',

  projects: [
    // ─── 1. SETUP: создаёт файлы авторизации ───
    {
      name: 'setup',
      testDir: './fixtures',
      testMatch: /.*\.setup\.ts/,
    },

    // ─── 2. UI-тесты: standard_user ───
    {
      name: 'ui-user',
      testDir: './tests/ui',
      testIgnore: /problem|locked/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // ─── 3. UI-тесты: problem_user ───
    {
      name: 'ui-problem',
      testDir: './tests/ui/problem',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/problem.json',
      },
      dependencies: ['setup'],
    },

    // ─── 4. UI-тесты: locked_out_user ───
    {
      name: 'ui-locked',
      testDir: './tests/ui/locked',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/locked.json',
      },
      dependencies: ['setup'],
    },

    // ─── 5. API-тесты: БЕЗ авторизации ───
    {
      name: 'api',
      testDir: './tests/api',
      // ВАЖНО: нет storageState и нет dependencies!
    },
      // Тесты, которым нужна "чистая" сессия (сам процесс логина)
    {
      name: 'ui-anonymous',
      testDir: './tests/ui/anonymous',
      // без storageState — чистый браузер
    },
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});