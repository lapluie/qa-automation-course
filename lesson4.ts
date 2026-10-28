// // Объявление функции
// function checkLogin(username: string, password: string): boolean {
//     const isValid: boolean = username === "admin" && password === "secret";
//     return isValid;
// };

// // Вызов функции
// const result1: boolean = checkLogin("admin", "secret");
// console.log(result1);

// const result2: boolean = checkLogin("user", "wrond");
// console.log(result2);

// // Обычная функции
// // function add(a: number, b: number): number {
// //     return a+b;
// // };

// // Та же функция, но стрелочная
// const add = (a: number, b: number): number => {
//     return a+b;
// };

// // Если тело функции — одна строка, можно убрать фигурные скобки и return
// const addShort = (a: number, b: number): number => a + b;

// console.log(add(5, 3)); // 8
// console.log(addShort(5, 3)); // 8

// const testName: string[] = ["login", "search", "chekout"];

// testName.forEach((name: string) => {
//     console.log(`Запускаю тест: ${name}`);
// });

// const prices: number[] = [100, 200, 300];

// const pricesWithTax: number[] = prices.map((price: number) => price * 1.2);

// console.log(pricesWithTax); // [120, 240, 360]

// const statuser: string[] = ["passed", "failed", "passed", "skipped", "failed"];
// const failedTests: string[] = statuser.filter((status: string) => status === "failed");

// console.log(failedTests); ["failed", "failed"]

// const users = [
//     {name: "Иван", role: "user"},
//     {name: "Анна", role: "admin"},
//     {name: "Петр", role: "user"}
// ];

// const admin = users.find((user) => user.role === "admin");

// console.log(admin); // { name: "Анна", role: "admin" }

// function isTestPassed (status: string): boolean {
//     const statuses: boolean = status === "passed";
//     return statuses;
// }

// const test1: boolean = isTestPassed("failed");
// console.log(test1);

// const test2: boolean = isTestPassed("passed");
// console.log(test2);

// const test3: boolean = isTestPassed("skipped");
// console.log(test3);

const isTestPassed = (status: string): boolean => status === "passed";


const test1: boolean = isTestPassed("failed");
console.log(test1);

const test2: boolean = isTestPassed("passed");
console.log(test2);

const test3: boolean = isTestPassed("skipped");
console.log(test3);

const browsers: string[] = ["chrome", "firefox", "safari"];
browsers.forEach((browser: string) => {
    console.log(`Запускаю тесты в ${browser}`)
});

const prices: number[] = [1000, 2500, 500, 3000];
const discountedPrices: number[] = prices.map((price: number) => price * 0.9);
console.log(discountedPrices);

const results: string[] = ["passed", "failed", "passed", "skipped", "failed", "passed"];
const failedOnly: string[] = results.filter((status: string) => status === "failed");
console.log('Массив упавших тестов:', failedOnly);
console.log('Количество:', failedOnly.length);

const users = [
  { name: "Иван", age: 25, role: "user" },
  { name: "Анна", age: 30, role: "admin" },
  { name: "Петр", age: 28, role: "user" }
];

const admin = users.find((user) => user.role === "admin");
console.log(admin);

const moderator = users.find((user) => user.role === "moderator");
console.log(moderator); // Выведет undefined, так как модератор не найден

// const products: { name: string; price: number; inStock: boolean } [] = [
//   { name: "Ноутбук", price: 50000, inStock: true },
//   { name: "Мышь", price: 1500, inStock: false },
//   { name: "Клавиатура", price: 3000, inStock: true },
//   { name: "Монитор", price: 25000, inStock: true }
// ];

// const inStockProducts = products.filter((product) => product.inStock);
// const inStockProductsName = inStockProducts.map((product) => `${product.name} - ${product.price} руб.`);

// console.log(inStockProducts);
// console.log(inStockProductsName);