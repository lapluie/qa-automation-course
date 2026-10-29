# 🧪 QA Automation Course

[![Playwright Tests](https://github.com/lapluie/qa-automation-course/actions/workflows/playwright.yml/badge.svg)](https://github.com/lapluie/qa-automation-course/actions/workflows/playwright.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)

> Учебный проект по автоматизации тестирования на **TypeScript + Playwright**.
> Покрывает UI и API тесты с использованием Page Object Model.

---

## 🛠️ Технологии

| Технология | Назначение |
|:-----------|:-----------|
| **TypeScript** | Язык программирования |
| **Playwright** | Фреймворк для UI и API тестов |
| **Node.js** | Среда выполнения |
| **GitHub Actions** | CI/CD pipeline |
| **GitHub** | Хостинг кода |

---

## 📁 Структура проекта

```text
qa-automation-course/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD pipeline (GitHub Actions)
├── pages/                          # Page Object Model
│   ├── LoginPage.ts                # Страница логина
│   ├── ProductsPage.ts             # Страница товаров
│   └── CartPage.ts                 # Страница корзины
├── tests/                          # Автотесты
│   ├── ui/                         # UI-тесты
│   │   ├── login.spec.ts           # Тесты логина
│   │   ├── login-error.spec.ts     # Негативные тесты логина
│   │   ├── cart.spec.ts            # Тесты корзины
│   │   └── locators.spec.ts        # Тесты разных типов локаторов
│   └── api/                        # API-тесты
│       ├── api-products.spec.ts    # GET запросы
│       ├── api-create-product.spec.ts  # POST запросы
│       ├── api-single-product.spec.ts  # Получение одного товара
│       └── api-error.spec.ts       # Обработка ошибок
├── test-results/                   # Результаты тестов (gitignored)
├── playwright-report/              # HTML отчёт (gitignored)
├── playwright.config.ts            # Конфигурация Playwright
├── package.json                    # Зависимости проекта
├── package-lock.json               # Зафиксированные версии зависимостей
├── tsconfig.json                   # Конфигурация TypeScript
├── .gitignore                      # Игнорируемые файлы
└── README.md                       # Документация проекта
```

---

## 🚀 Установка

```bash
# Установить зависимости
npm install

# Установить браузеры Playwright
npx playwright install
```

---

## ▶️ Запуск тестов

<details>
<summary><b>🧪 Все тесты</b></summary>

```bash
npx playwright test
```

</details>

<details>
<summary><b>🖥️ Только UI-тесты</b></summary>

```bash
npx playwright test tests/ui/
```

</details>

<details>
<summary><b>🌐 Только API-тесты</b></summary>

```bash
npx playwright test tests/api/
```

</details>

<details>
<summary><b>📊 С HTML-отчётом</b></summary>

```bash
npx playwright test
npx playwright show-report
```

</details>

<details>
<summary><b>🐛 В режиме отладки</b></summary>

```bash
npx playwright test --debug
```

</details>

---

## 🎯 Тестовые среды

| Тип | URL | Описание |
|:----|:----|:---------|
| **UI** | [saucedemo.com](https://www.saucedemo.com) | Учебный e-commerce сайт |
| **API** | [fakestoreapi.com](https://fakestoreapi.com) | REST API для тестирования |

---

## ✅ Покрытие тестами

### 🖥️ UI-тесты

- [x] ✅ Успешный логин
- [x] ✅ Логин с неверным паролем (негативный сценарий)
- [x] ✅ Добавление товаров в корзину
- [x] ✅ Проверка счётчика корзины
- [x] ✅ Разные типы локаторов

### 🌐 API-тесты

- [x] ✅ Получение списка товаров (GET)
- [x] ✅ Получение конкретного товара (GET)
- [x] ✅ Создание нового товара (POST)
- [x] ✅ Обработка несуществующего ресурса

---

## 👨‍💻 Автор

**Roman Sims**
*Junior QA Automation Engineer*

[![GitHub](https://img.shields.io/badge/GitHub-lapluie-181717?style=flat&logo=github)](https://github.com/lapluie)

---

<div align="center">

### 📚 Учебный проект курса по автоматизации тестирования

*TypeScript • Playwright • Page Object Model • GitHub Actions*

</div>