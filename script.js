/*
TASK #1
Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).
*/
// SOLUTION
// const http = require("http");
// const os = require("os");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });

//   // Отримуємо ім'я користувача операційної системи
//   const username = os.userInfo().username;

//   // Отримуємо тип операційної системи
//   const osType = os.type();

//   // Отримуємо час роботи системи в хвилинах
//   const uptime = Math.floor(os.uptime() / 60);

//   // Отримуємо поточну робочу директорію
//   const currentDir = process.cwd();

//   // Отримуємо назву файлу сервера
//   const serverFilename = path.basename(__filename);

//   // Формуємо HTML-сторінку з інформацією
//   const html = `
//     <html>
//       <head>
//         <title>System information</title>
//       </head>
//       <body>
//         <h1>System information</h1>
//         <p>Current user name: ${username}</p>
//         <p>OS type: ${osType}</p>
//         <p>System work time: ${uptime} minutes</p>
//         <p>Current work directory: ${currentDir}</p>
//         <p>Server file name: ${serverFilename}</p>
//       </body>
//     </html>
//   `;

//   res.end(html);
// });

// server.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });

/*
TASK #2
Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку: Date of request: Sun Dec 08 2019 22:13:32 GMT +0200 (GMT+02:00) Good evening, Artem
*/
// SOLUTION

// const http = require("http");
// const personalModule = require("./personalmodule"); //Підключаємо зовнішній файл personalmodule.js

// const server = http.createServer((req, res) => {
//   const username = "Artem"; // Ім'я системного юзера
//   const greeting = personalModule.greetUser(username);

//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write(`Date of request: ${new Date()}<br>`);
//   res.end(greeting);
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

/*
TASK #3
Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку користувач вводить з адресного рядка, а потім зчитує цей файл та виводить вміст на екран.
Кроки:
Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація.
Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати інформацію в файл.
Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного рядка та передавати отриману інформацію функції writeToTextFile().
Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу.
*/
// SOLUTION
// const http = require("http");
// const fs = require("fs");

// // Шлях до файлу, у який буде записана інформація
// const filePath = "./data.txt";

// // Функція для запису інформації у файл
// function writeToTextFile(data) {
//   fs.appendFile(filePath, data + "\n", (err) => {
//     if (err) {
//       console.error("Помилка запису у файл:", err);
//       return;
//     }
//     console.log("Інформацію успішно записано у файл!");
//   });
// }

// // Створення сервера
// const server = http.createServer((req, res) => {
//   // Отримання інформації з адресного рядка
//   const input = req.url.slice(1); // Видаляємо початковий слеш (/)

//   if (input) {
//     // Запис інформації у файл
//     writeToTextFile(input);

//     // Відправка відповіді клієнту
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Дані успішно записано!");
//   } else {
//     // Зчитування даних з файлу
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         console.error("Помилка читання файлу:", err);
//         res.statusCode = 500;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("Виникла помилка при читанні файлу!");
//         return;
//       }

//       // Відправка зчитаних даних клієнту
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/plain");
//       res.end(data || "Файл порожній");
//     });
//   }
// });

// // Запуск сервера на порту 3000
// server.listen(3500, () => {
//   console.log("Сервер запущено на порті 3500");
// });
