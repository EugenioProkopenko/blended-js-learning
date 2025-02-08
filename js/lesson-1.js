// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

//const number = Number(prompt('Ведіть число'));
//if (number === 10) {
// alert('Вірно');
//} else {
//  alert('Невірно');
//}
//number === 10 ? alert('Вірно') : alert('Невірно');
//////////////////////////////////////////////////////////////////////////////
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
//const min = Math.floor(Math.random() * (59 - 0) + 0);
//if (min < 15) {
//    else "10 входить в першу чверть";
//}
//////////////////////////////////////////////////////////////////////////
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
// const num = Number(prompt('Введіть число від 1 до 4'));
// let result = '';
// switch (num) {
//   case 1:
//     result = 'зима';
//     break;
//   case 2:
//     result = 'весна';
//     break;
//   case 3:
//     result = 'літо';
//     break;
//   case 4:
//     result = 'осінь';
//     break;
//   default:
//     result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
// }
// alert(result);
// console.log(result);
//////////////////////////////////////////////////////////////////////////

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

/////////////////////////////////////////////////////////////////////////////////////////////
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

//////////////////////////////////////////////////////////////////////////
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// function getNumbers(number) {
//   let i = 0;
//   while (i <= number) {
//     console.log(i);
//     i += 1;
//   }
// }
// getNumbers(20);
///////////////////////////////////////////////////////////////

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i -= 1) {
//     // console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// getNumbers(3, 8);
// console.log(getNumbers(3, 8));
//////////////////////////////////////////////////////////////////////////////

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
////////////////////////////////////////////////////////////

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).
/////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
///////////////////////////////////////////////////////////////////
// function getDayName(dayNumber) {
//   let result = '';
//   switch (dayNumber) {
//     case 1:
//       result = 'Понеділок';
//       break;
//     case 2:
//       result = 'Вівторок';
//       break;
//     case 3:
//       result = 'Середа';
//       break;
//     case 4:
//       result = 'Четверг';
//       break;
//     case 5:
//       result = 'Пятниця';
//       break;
//     case 6:
//     case 7:
//       result = 'Вихидні';
//       break;
//     default:
//       result = 'Помилка! Введіть число від 1 до 7';
//   }
//   return result;
// }
// getDayName(1);
// console.log(getDayName(3));
/////////////////////////////////////////////////////////////////////////////////////
// function getMonthName(monthNumber) {
//   result = '';
//   switch (monthNumber) {
//     case 1:
//       result = 'Січень';
//       break;
//     case 2:
//       result = 'Лютий';
//       break;
//     case 3:
//       result = 'березень';
//       break;
//     case 4:
//       result = 'квітень';
//       break;
//     case 5:
//       result = 'травень';
//       break;
//     case 6:
//       result = 'червень';
//       break;
//     case 7:
//       result = 'липень';
//       break;
//     case 8:
//       result = 'серпень';
//       break;
//     case 9:
//       result = 'вересень';
//       break;
//     case 10:
//       result = 'жовтень';
//       break;
//     case 11:
//       result = 'листопад';
//       break;
//     case 12:
//       result = 'грудень';
//       break;
//     default:
//       result = 'Помилка! Введіть число від 1 до 12';
//   }
//   return result;
// }
// getMonthName(13);
// console.log(getMonthName(13));
///////////////////////////////////////////////////////////////////////////////////////////////////

//Напиши цикл for, який виведе всі числа від 10 до 1 у зворотному порядку.
// function getNumbers(number) {
//   for (let i = number; i >= 1; i -= 1) {
//     console.log(i);
//   }
// }
// getNumbers(10);
///////////////////////////////////////////////////////////////
// Вивести числа від 10 до 20
// let i = 10;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }
///////////////////////////////////////////////////
// //Запитувати у користувача число, поки він не введе 10
// const getNumbers = Number(prompt('Введіть число 10, щоб вийти:'));
// let i = number;
// while (i === 10) {
//   alert = 'Ви ввели 10, програма завершена.';
// }
// if (i !== number) {
//   alert = `Ви ввели ${number}, спробуйте ще раз.`;
// }
// alert(result);
///////////////////////////////////////////////////

// function getLength(array) {
//   return array.join('').length;
// }
// getLength(['Mango', 'hurries', 'to', 'the', 'train']);
// getLength(['M', 'a', 'n', 'g', 'o']);
// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));
/////////////////////////////////////////////////////////////////////////////
// const name = 'Mango';
// const letters = name.split();
// console.log(letters); // ["M", "a", "n", "g", "o"]
// ////////////////////////////////////////////////////////////////////
// const slug = 'amazing-french-recipes';
// const slugParts = slug.split('-');
// console.log(slugParts); // ["amazing", "french", "recipes"]
// //console.log(slug);
// /////////////////////////////////////////////////////////////////////

// function calculateEngravingPrice(message, pricePerWord) {
//   const gatArray = message.split(' ').length;
//   const sumMessagePricePerword = gatArray * pricePerWord;
//   return sumMessagePricePerword;
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// /////////////////////////////////////////////////////////////////////
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
// console.log(planets.slice(2, 4)); // ['Earth', 'Mars']
// /////////////////////////////////////////////////
// // const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // const firstTwoEls = fruits.slice(0, 2);
// // const nonExtremeEls = fruits.slice(1, -1);
// // const lastThreeEls = fruits.slice(-3);
// // console.log(firstTwoEls);
// ///////////////////////////////////////////////////////////////
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);
/////////////////////////////////////////////////////////////////////////
// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   }
//   return array.slice(0, index + 1);
// }
// getSlice(['Mango', 'Poly', 'Ajax'], 'Poly');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Poly');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Mango');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Casey');
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));
/////////////////////////////////////////////////////////////////

// function createArrayOfNumbers(min, max) {
//   let number = [];
//   for (let i = min; i <= max; i++) {
//     number.push(i);
//   }
//   return number;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(29, 34);
// console.log(createArrayOfNumbers(29, 34));
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }
// calculateTotalPrice([412, 371, 94, 63, 176]);
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// function getEvenNumbers(start, end) {
//   let add = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       add.push(i);
//     }
//   }
//   return add;
// }
// getEvenNumbers(3, 11);
// console.log(getEvenNumbers(3, 11));
// function checkStorage(storage, item) {
//   const toLowerCaseItem = item.toLowerCase();
//   for (let i = 0; i <= storage.length - 1; i++) {
//     if (storage[i].toLowerCase() === toLowerCaseItem) {
//       return `${toLowerCaseItem} is available to order!`;
//     }
//     return 'Sorry! We are out of stock!';
//   }
// }
// checkStorage(['apple', 'plum', 'pear'], 'Plum');
// console.log(checkStorage(['apple', 'plum', 'pear'], 'Plum'));

// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// console.log(fillArray(2, 10));
// function getCommonElements(array1, array2) {
//   let add = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array1.includes(array2[i])) {
//       add.push(array2[i]);
//     }
//   }
//   return add;
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const orderes of order) {
//     total += orderes;
//   }
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// console.log(calculateTotalPrice([12, 85, 37, 4]));
function createReversedArray(...args) {
  return args.toReversed();
}
createReversedArray(412, 371, 94, 63, 176);
console.log(createReversedArray(412, 371, 94, 63, 176));
