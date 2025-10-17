/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = Math.floor(Math.random() * 6)
let dice2 = Math.floor(Math.random() * 6)
let isWinningDouble = true

const number1 = randomNum
const number2 = number1 + 1
const number3 = number2 + 1
const number4 = number3 + 1
const number5 = number4 + 1
const number6 = number5 + 1
let double = true
let notMatches = false


while (notMatches) {
  notMatches = +prompt('Бросай камень,нажми "Ок"')
  if (dice1 === number3 && dice2 === number3 || dice1 === number4 && dice2 === number4 || dice1 === number5 && dice2 === number5 || dice1 === number6 && dice2 === number6)
  

    
console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
}
