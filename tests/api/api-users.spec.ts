import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('получение списка пользователей', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/users`);
  
  expect(response.status()).toBe(200);
  
  const users = await response.json();
  expect(Array.isArray(users)).toBe(true);
  expect(users).toHaveLength(10);
});

test('получение конкретного пользователя', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/users/1`);
  
  expect(response.status()).toBe(200);
  
  const user = await response.json();
  expect(user.id).toBe(1);
  expect(user.name).toBeTruthy();
  expect(user.email).toBeTruthy();
});

test('запрос несуществующего пользователя возвращает 404', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/users/99999`);
  
  expect(response.status()).toBe(404);
});

test('создание нового пользователя (POST)', async ({ request }) => {
  const newUser = {
    name: 'Test User',
    username: 'testuser',
    email: 'test@example.com'
  };

  const response = await request.post(`${BASE_URL}/users`, {
    data: newUser
  });

  expect(response.status()).toBe(201);
  
  const created = await response.json();
  expect(created.name).toBe('Test User');
  expect(created.id).toBeTruthy();
});

test('получение постов пользователя', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/users/1/posts`);
  
  expect(response.status()).toBe(200);
  
  const posts = await response.json();
  expect(Array.isArray(posts)).toBe(true);
  
  // Все посты должны принадлежать пользователю с id=1
  for (const post of posts) {
    expect(post.userId).toBe(1);
  }
});