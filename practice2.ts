// // let price: number = 100;
// // price = 'сто рублей'; // кладём текст в коробку для чисел

// const isDisplayed: boolean = true;
// const isClickable: boolean = false;
// const isDisabled: boolean = true;

// const canInteract: boolean = isDisplayed && isClickable;
// console.log(canInteract);

// const showHint: boolean = isDisplayed || isClickable;
// console.log(showHint);

// const isActive: boolean = !isDisabled;
// console.log(isActive)

// const statusCode: number = 200;
// if (statusCode === 200) {
//     console.log('Успех');
// } else if (statusCode === 301) {
//     console.log('Редирект');
// } else if (statusCode >= 400 && statusCode < 500) {
//     console.log('Ошибка клиента');
// } else if (statusCode >= 500) {
//     console.log('Ошибка сервера');
// } else {
//     console.log('Неизвестный статус');
// }

// const successOnAttempt: number = 4;
// let attempt: number = 1;
// let isSuccess: boolean = false;
// while (attempt <= 5 && !isSuccess) {
//     console.log('Попытка номер', attempt);
//     if (attempt === successOnAttempt) {
//         isSuccess = true
//     }
//     attempt++;
// }

// // let count: number = 5;
// // count = 'пять'

// const cartTotal: number = 3500;
// const hasPromoCode: boolean = true;
// const isVipUser: boolean = false;
// if (cartTotal > 3000 && (hasPromoCode || isVipUser)) {
//     console.log('Скидка применена');
// } else {
//     console.log('Скидки нет');
// }