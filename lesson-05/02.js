/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

// const gallery = {
//   'Mona Lisa': 'Leonardo da Vinci',
//   'Starry Night': 'Vincent van Gogh',
//   'The Scream': 'Edvard Munch',
  
// }

// function updateGallery(gallery, artName, newValue) {
//   gallery[artName] = newValue;
  
// }




const array = [ 1, 2, 3, 4, -5, -6,]

// // for (let i = 0; i < array.length; i++) {
// //   let number = Math.abs(array[i])
// //   console.log(number);
  
// }

array.forEach((el,i) => { console.log(el,)})












// for (let i = 0; i < array.length; i++) {
//   if(array[i] % 2 === 0){
//     console.log(array[i]);
//   }
// }




const array2 = [ 1, true, 'string', NaN, {avto: 'bmw'}]
// for (let i = 0; i < array2.length; i++) {
//   // console.log(typeof array2[i]);
//   console.log(i);
  
// }

// const array3 = [ 'stroki', 'safgaewr', 'grearg', 'ngngnngng', ' kngnrgnin']
// for (let i = 0; i < array3.length; i++) {
//   if(array3[i].length % 2 === 0){
//     console.log(array3[i]);
//     }
  
// }

const newArray = array2.filter((element,i) => {
  return typeof element !== 'object'

})
console.log(newArray);


const sum = (a,b) => {
const result = a + b
return result
}
const res = sum(50,40) 

console.log(res);





const print = (name, age) => {
  console.log(`My name is ${name}, I am ${age}`)
}




























































print('BOB',30)




