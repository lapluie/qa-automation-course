// // Задача 1.1
// function wait(seconds:number): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Прошло ${seconds} секунд`);
//         }, seconds * 1000);
//     });
// };

// async function testWait() {
//     console.time('load');
//     const result = await wait(2);
//     console.log(result);
//     console.timeEnd('load');
// };

// testWait();

// // Задача 1.2
// async function countdown() {
//     for (let i = 3; i >= 1; i--) {
//         console.log(i);
//         await wait(1);
//     };
//     console.log("Пуск!")
// };

// countdown();

// function fetchUsers(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Пользователи"), 1000);
//     });
// };

// function fetchOrders(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Заказы"), 1000);
//     });
// };

// function fetchProducts(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Продукты"), 1000);
//     });
// };

// async function loadData() {
//     console.time('Время последовательной функции');
//     const users = await fetchUsers();
//     const orders = await fetchOrders();
//     const products = await fetchProducts();

//     console.log("Данные", users);
//     console.log("Данные", orders);
//     console.log("Данные", products);
//     console.timeEnd('Время последовательной функции');
// };

// loadData();

// async function loadDataPar() {
//     console.time('Время параллельной функции');
//     const [users, orders, products] = await Promise.all([
//         fetchUsers(),
//         fetchOrders(),
//         fetchProducts()
//     ]);
//     console.timeEnd('Время параллельной функции');
//     console.log(users, orders, products);
// };

// loadDataPar();

// // Задача 2.1
// class Calculator {

//     add(a: number, b: number): number {
//         return a + b;
//     };
// };

// const calc = new Calculator();
// console.log(calc.add(2, 3));

// class ApiClient {
//     async getData(): Promise<string> {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("Данные получены");
//             }, 1000);
//         });
//     };
// };

// // async function test() {
// //     const client = new ApiClient();
// //     const data = await client.getData();
// //     console.log(data);
// // };

// // test();

// // Задача 2.3
// // class ApiTest {
// //     async checkStatus(status: number): Promise<string> {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                if (status === 200) {
// //                     resolve("Успех");
// //                } else {
// //                     reject(new Error(`Ошибка: статус ${status}`));
// //                } 
// //             }, 500);
// //         });        
// //     };
// // };

// // const test = new ApiTest();

// // try {
// //     const result = await test.checkStatus(200);
// //     console.log(result); 
// // } catch (error) {
// //     console.log((error as Error).message);
// // }

// // try {
// //     const result = await test.checkStatus(500);
// //     console.log(result); 
// // } catch (error) {
// //     console.log((error as Error).message);
// // }
// // Задача 3.1
// // class FlakyApi {
// //     async call(): Promise<string> {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 const random = Math.random();
// //                 if (random < 0.7) {
// //                     resolve("Успех");
// //                 } else {
// //                     reject(new Error("Сервер недоступен"));
// //                 }
// //             }, 500);
// //         });
// //     }
// // }

// // async function testFlakyApi() {
// //     const api = new FlakyApi();
// //     let successCount = 0;
// //     const totalCalls = 10;

// //     for (let i = 1; i < totalCalls; i++) {
// //         try {
// //             const result = await api.call();
// //             console.log(`Вызов ${i}: ${result}`);
// //             successCount++;
// //         } catch (error) {
// //             console.log(`Вызов ${i}: ${(error as Error).message}`);
// //         }        
// //     }
// //     console.log(`Успешных вызовов: ${successCount} из ${totalCalls}`);
// // }

// // testFlakyApi();

// // Задача 3.2
// class ApiTest {
//     async runTest(status: number): Promise<boolean> {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const random = Math.random();
//                if (random < 0.8) {
//                     resolve(true);
//                } else {
//                     reject(new Error("Ошибка: сервер вернул 500"));
//                } 
//             }, 500);
//         });        
//     };
// };

// Задача мини-проект
class TestRunner {
    tests: string[];

    constructor(tests: string[]) {
        this.tests = tests;
    }
    async runTest(testName: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.7) {
                    console.log(`✅ ${testName}: PASSED`)
                    resolve(true);
                } else {
                    console.log(`❌ ${testName}: FAILED`);
                    reject(new Error(`${testName} упал`));
                };
            }, 500);

        });
    }

    async runAll(): Promise<void> {
        let passedCount = 0;

        for (const testName of this.tests) {
            try {
                await this.runTest(testName);
                passedCount++;
            } catch (error) {
                // Ошибки логируются внутри runTests, здесь ничего не делаем
            };               
        };
        
        console.log(`\n📊 Итог: Пройдено ${passedCount} из ${this.tests.length}`);
    }
}

const runner = new TestRunner([
    "Тест логина",
    "Тест корзины",
    "Тест поиска",
    "Тест оплаты",
    "Тест профиля"
]);

runner.runAll();