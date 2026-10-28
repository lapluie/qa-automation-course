// // Объявляем класс (чертеж)
// class LoginPage {
//     // Свойства класса
//     url: string;
//     username: string;

//     // Constructor - метод, который вызывается  при создании объекта
//     constructor(url: string, username: string) {
//         this.url = url;
//         this.username = username;
//     }

//     // Метод класса
//     login(password: string): string {
//         return `Пользователь ${this.username} залогинен на ${this.url} с паролем ${password}`;
//     }
// }

// // Создаем объект по чертежу (Instance)
// const adminPage = new LoginPage("https://admin.shop.com", "admin");
// const userPage = new LoginPage("https://shop.com", "user");

// console.log(adminPage.login("secret123"));
// console.log(userPage.login("password"));

// Задача 1
class CartPage {
    url: string;
    itemsCount: number;

    constructor(url: string, itemsCount: number) {
        this.url = url;
        this.itemsCount = itemsCount;
    }

    getTotal(): number {
        return this.itemsCount * 100;
    }
}

const cartPage = new CartPage("https://shop.com/cart", 3);
const cartPage2 = new CartPage("https://shop.com/cart", 5);

console.log(cartPage.getTotal());
console.log(cartPage2.getTotal());

// Задача 2
class UserAccount {
    #token: string; // приватное свойство        
    constructor(token: string) {
        this.#token = token;
    }

    getToken(): string { 
        return this.#token;
    }
}

// const user = new UserAccount("abc123");
// console.log(user.#token); // Свойство "#token" недоступно вне класса "UserAccount", так как оно имеет закрытый идентификатор

// Задача 4
try {
    console.log("Начинаем тест")
    const result = 10 / 0;
    if (result === Infinity) {
        throw new Error("Нельзя делить на ноль");
    }
    console.log("Тест прошел успешно");
} catch (error) {
    console.log("Тест упал с ошибкой", error);
    
} finally {
    console.log("Тест завершен")
}

// Задача 5
function validateAge(age: number): boolean {
    try {
        if (age < 0) {
            throw new Error("Возраст не может быть отрицательным");
        } else if (age > 150) {
            throw new Error("Слишком большой возраст");
        } else {
            return true;
        }
    } catch (error) {
        console.log((error as Error).message);
        return false;
    } finally {
        console.log("Завершение проверки возраста");
    }
    
}
console.log(validateAge(25));
console.log(validateAge(-5));
console.log(validateAge(200));

// Задача 6
// class ApiTest {
//     url: string;
//     expectedStatus: number;

//     constructor(url: string, expectedStatus: number) {
//         this.url = url;
//         this.expectedStatus = expectedStatus;
//     }

//     checkStatus(actualStatus: number): string {
//         if (this.expectedStatus === actualStatus) {
//             return("Тест пройден");
//        } else 
//         throw new Error(`Ожидали ${this.expectedStatus}, получили ${actualStatus}`);      
//     };
// };

// const test = new ApiTest("https://api.shop.com/products", 200);
// const result = test.checkStatus(200);
// console.log(result);

// try {
//     test.checkStatus(500);
// } catch (error) {
//     if (error instanceof Error) {
//     console.log(error.message);
//     } else {
//         console.log("Неизвестная ошибка", error);
//     }
// };