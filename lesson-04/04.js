/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(input_string) {
    
        let newStr = "";
        for (let i = 0; i < input_string.length; i++) {
            newStr += input_string[i] + input_string[i];
        }
        return newStr;
    }

console.log(doubleEachCharacter("hello"));