const appName: string = "My Shop";
console.log(appName);

let loginAttempts = 0;
loginAttempts += 1
console.log(loginAttempts);

const pageTitle = "Главная";
if (pageTitle === "Главная") {
    console.log("Заголовок верный");
} else {
    console.log("Баг: неверный заголовок");
}

for (let i = 1; i <= 4; i++) {
    console.log("Проверяем элемент N", i);
}

const actualStatus: number = 500;
const expectedStatus: number = 200;
if (actualStatus === expectedStatus) {
    console.log("Тест успешен");
} else {
    console.log("Тест упал. Ожидали 200, получили", actualStatus);
}