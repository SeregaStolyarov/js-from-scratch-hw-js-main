/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(name) { 
return name.split(' ').map(word => {
  if(word.length === 0){
    return''
  }
  return word[0].toUpperCase() + word.slice(1)
}).join(' ')
}
const string = "hello world from javascript"


// "комментарий из нескольких слов" 
// "Комментарий Из Нескольких Слов"
// увеличить каждое символ после пробела 






//  let newWord = ''
//   newWord = newWord + name[0].toUpperCase()
//   for (let i = 0; i< name.length; i++) {
//     if( name[i] === ' '){
//       newWord = newWord + name[i + 1].toUpperCase() 
//     } else{
//       newWord = newWord + name[i < name.length - 1 ? (i + 1) : i]
      
//     }
//   }
//   return newWord
// }

console.log(capitalizeWords("hello world from javascript"));