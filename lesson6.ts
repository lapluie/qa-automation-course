// console.log("1");
// setTimeout(() => console.log("2"), 1000);
// console.log("3");

// const promise = new Promise((resolve, reject) => {
//     // Имитация долгой операции
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve("Данные получены"); // успех 
//         } else {
//             reject("Ошибка сети"); // провал
//         }
//     }, 1000 );
// });

// promise
//     .then((result) => console.log("Успех", result))
//     .catch((error) => console.log("Ошибка", error));

// // Функция которая возвращает Promise (Имитация API)
// function fetchUserAsync(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Иван"), 1000);
//     });
// };

// // async функция, которая использует await
// async function getUser() {
//     console.log("Начинаем запрос");

//     // await останавливает выполнение функции, пока Promise не выполнится
//     const user = await fetchUserAsync();

//     console.log("Пользователь", user);
// };

// getUser();
// console.log("Эта строка выполнится ДО getUser()");

// async function getUserWithError() {
//     try {
//         const user = await fetchUserAsync();
//         console.log("Успех", user);
//     } catch (error) {
//         console.log("Ошибка", (error as Error).message);
//     };
// };

// Задача 1
async function delay(ms: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });
};

delay(1000).then(() => console.log("Прошла 1 секунда"));

// Задача 2
function fetchUserProduct(): Promise<{name: string; price: number}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = {
                name: "Ноутбук",
                price: 50000
            };
            resolve(product);
        }, 500);
    });
};

// fetchUserProduct().then((product) => {
//     console.log("Получили товар", product);
//     console.log(`Название: ${product.name}`);
//     console.log(`Цена: ${product.price}`);
// });

// Задача 3
async function getProduct(): Promise<void> {
    const product = await fetchUserProduct();
    console.log("Получили товар", product);
}

getProduct();

// Задача 4
// async function fetchUser(id: number): Promise<string> {
//     if (id === 1) {
//         return new Promise((resolve) => {
//             setTimeout(() => resolve("Иван"), 300);
//         });
//     } else {
//         throw new Error("Пользователь не найден");
//     };
// };

// async function testUsers() {
//     try {
//         const user1 = await fetchUser(1);
//         console.log("Пользователь", user1);
//     } catch (error) {
//         console.log("Ошибка:", (error as Error).message);
//     };
//     try {
//         const user2 = await fetchUser(2);
//         console.log("Пользователь", user2);
//     } catch (error) {
//         console.log("Ошибка:", (error as Error).message);
//     };
// };
// testUsers();

// // // Задача 5
// function fetchUser(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Пользователь"), 300);
//     });
// };
// function fetchOrders(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Заказы"), 300);
//     });
// };
// function fetchProducts(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Товары"), 300);
//     });
// };

// async function loadAllData() {
//     console.time('load');
//     const user = await fetchUser();
//     const orders = await fetchOrders();
//     const products = await fetchProducts();

//     console.log("Данные:", user);
//     console.log("Данные:", orders);
//     console.log("Данные:", products);
//     console.timeEnd('load');
// };

// loadAllData();

// Задача 6
// async function loadAllData() {
//     console.time('load');
//     const [user, orders, products] = await Promise.all([
//         fetchUser(),
//         fetchOrders(),
//         fetchProducts()
//     ]);
//     console.timeEnd('load');
//     console.log("Данные:", user);
//     console.log("Данные:", orders);
//     console.log("Данные:", products);
// };

// loadAllData();

// Задача 7
// class ApiTest {
//     url: string;
//     constructor(url:string) {
//         this.url = url;
//     }
//     async runTests(url:string): Promise<boolean> {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const random = Math.random();
//                 if (random < 0.8) {
//                     resolve(true);
//                 } else {
//                     reject(new Error("Сервер вернул 500"));
//                 };
//             }, 500);
//         });
//     };
// };

// async function main() {
//     const apiTest = new ApiTest("https://api.example.com");
//     let passedCount = 0;

//     for (let i = 1; i <= 5; i++) {
//         try {
//             const result = await apiTest.runTests("https://api.example.com");
//             if (result === true) {
//                 passedCount++;
//             };
//         } catch (error) {
//             console.log(`Тест ${i} упал`, (error as Error).message);
//         };  
//     };
//     console.log(`Тесты пройдены: ${passedCount} из 5`);
// };

// main();