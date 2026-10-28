// // const pageTitle: string = "Корзина";
// // const url: string = "https://shop.com/cart";
// // const status: number = 404;

// // const newMessage: string = `Баг на странице ${url}: ожидали ${pageTitle}, получили статус ${status}`;

// // console.log(newMessage)

// // const apiResponse = {
// //     userId: 123,
// //     name: "Иван",
// //     email: "ivan@mail.com",
// //     isVip: true,
// // };

// // const { userId, name, email, isVip } = apiResponse;

// // console.log(`Пользователь ${name}, (${email}), id=${userId}, VIP=${isVip}`);

// // const { name: userName, email: userEmail } = apiResponse;

// // const testResults: string[] = ["passed", "failed", "skipped"];

// // const [first, second, third] = testResults;
// // console.log(`Первый тест: ${first}, второй: ${second} `);

// // const [, , onlyThird] = testResults;
// // console.log(onlyThird)

// // const browsers: string[] = ["chrome", "firefox"];
// // const moreBrowsers: string[] = [...browsers, "safari", "edge"];
// // console.log(moreBrowsers);

// // const baseUser = {
// //     name: "Ivan",
// //     email: "ivan@mail.com",
// //     role: "user"
// // };

// // const adminUser = {
// //     ...baseUser,
// //     email: "admin@mail.com",
// //     role: "admin"
// // };

// // console.log(adminUser);

// const elementName: string = "Кнопка 'Купить'";
// const page: string = "Страница товара";
// const errorText: string = "не кликабельна";

// const newMessage: string = `Баг: ${elementName} на странице ${page} - ${errorText}`;
// console.log(newMessage);

// const productResponse = {
//     id: 42,
//     title: "Наушники",
//     price: 2500,
//     inStock: true,
//     category: "Электроника"
// };
// const { title, price, inStock } = productResponse;
// console.log(`Товар: ${title}, цена: ${price}, в наличии: ${inStock}`);

// const { category: productCategory } = productResponse;
// console.log(productCategory);

// const user: { name: string; age: number; phone?: string } = {
//     name: "Анна",
//     age: 28
// };
// const { name: userName, phone = "Отсутствует" } = user;
// console.log(phone);
// console.log(`${userName}, "телефон:" ${phone}`);

// const testStatuses: string[] = ["passed", "failed", "skipped", "pending"];
// const [status1, status2, ,status4] = testStatuses;
// console.log(status1, status2, status4);

// const baseConfig = {
//     browser: "chrome",
//     headless: true,
//     timeout: 30000
// };

// const debugConfig = {
//     ...baseConfig,
//     headless: false,
//     timeout: 60000
// };
// console.log(debugConfig);

// const users = [
//     {name: "Иван", role: "user"},
//     {name: "Анна", role: "admin"}
// ];
// console.log(users);

// const [ {name: firstName, role: firstRole} ] = users;

// const secondUser = {
//     ...users[0],
//     name: "Петр",
// };

// const {name: secondName, role: secondRole} = secondUser;
// // console.log(secondUser);
// console.log(`Первый пользователь: ${firstName}, его роль ${firstRole}. Второй пользователь ${secondName}, его роль ${secondRole}`);