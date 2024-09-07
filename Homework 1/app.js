// let num_1 = +prompt('Пожалуйста введите первое число: ');
// let num_2 = +prompt('Пожалуйста введите второе число: ');

// while (num_2 !== 0) {
//     let temp = num_2;
//     num_2 = num_1 % num_2;
//     num_1 = temp;
//   }
  
// alert(`Наибольший общий делитель: ${num_1}`);



// let num = parseInt(prompt("Введите число:"));
// let count = 0;

// while (num > 0) {
//   num = Math.floor(num / 10);
//   count++;
// }

// alert("Количество цифр: " + count);




// let positives = 0
// let negatives = 0 
// let zeros = 0 
// let evens = 0 
// let odds = 0


// for (let i = 0; i < 10; i++) {
//   let num = parseInt(prompt("Введите число:"));

//   if (num > 0) {
//     positives++;
//   } else if (num < 0) {
//     negatives++;
//   } else {
//     zeros++;
//   }

//   if (num % 2 === 0) {
//     evens++;
//   } else {
//     odds++;
//   }
// }

// console.log(`Положительные: ${positives}, Отрицательные: ${negatives}, Нули: ${zeros}, Четные: ${evens}, Нечетные: ${odds}`);






// let again; 

// do {
//   let num1 = +prompt("Введите первое число:");
//   let num2 = +prompt("Введите второе число:");
//   let operation = prompt("Введите операцию (+, -, *, /):");
//   let result;

//   if (operation === "+") {
//     result = num1 + num2;
//   } else if (operation === "-") {
//     result = num1 - num2;
//   } else if (operation === "*") {
//     result = num1 * num2;
//   } else if (operation === "/") {
//     result = num1 / num2;
//   } else {
//     alert("Неправильная операция!");
//     continue; // Перезапускаем цикл, если операция некорректна
//   }

//   alert(`Результат: ${result}`);


//   again = prompt("Хотите выполнить еще одну операцию? (да/нет):").toLowerCase();
// } while (again === "да");








// let number = prompt("Введите число:");
// let shift = prompt("На сколько цифр сдвинуть?");

// // Превращаем строку числа в массив
// let digits = number.split("");

// for (let i = 0; i < shift; i++) {
//   let firstDigit = digits.shift(); //Удаляет 1 элемент
//   digits.push(firstDigit); //Добавляет в конец
// }

// let shiftedNumber = digits.join(""); //Собир массив обр в строку
// alert("Результат: " + shiftedNumber);







// let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// let index = 0; //Текущий день

// while (confirm(days[index] + ". Хотите увидеть следующий день?")) {
//   index = (index++) % days.length; // Возвращаемся к началу
// }







let min = 0;
let max = 100;
let guess;
let response;

alert("Загадайте число от 0 до 100. Я попробую его отгадать!");

// Цикл продолж пока число не будет угадано
while (true) {
  // середина диапазона
  guess = Math.floor((min + max) / 2);
  
  // Спрашиваем у пользователя, больше ли, меньше или равно загаданное число
  response = prompt(`Ваше число > ${guess}, < ${guess} или == ${guess}? Введите >, < или ==`);

  if (response === ">") {
    min = guess + 1;

  } else if (response === "<") {
    max = guess - 1;

  } else if (response === "==") {
    alert("Я угадал! Ваше число: " + guess);
    break;

  } else {
    // Обработка
    alert("Введите корректный ответ: >, < или ==");
  }
}