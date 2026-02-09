/*
  Изучите файл index.html (секцию "Урок 8"). Разметка уже написано - нужно добавить только js-код.

  Функционал магазина питомцев почти готов. Не хватает возможности добавлять питомцев в корзину.
  Ваша задача написать обработчик события, который будет добавлять питомцев в корзину.

  1. При клике на кнопку с питомцем, id питомца должен добавляться в массив cart.
  2. После добавления питомца в корзину, необходимо вызвать функцию updateCartDisplay 
  (она обновит отображение корзины).
  3. В корзину можно добавить не более 3 питомцев. Если пользователь пытается добавить больше,
  то в messageBox должен появится текст: 'Вы не можете добавить более 3 питомцев'

  ❕❕❕ Представленный в задании код не следует изменять. Требуется только дописать обработчик события.

  🧙 Подсказка: используй делегирование - будет достаточно одного обработчика событий на контейнере
  🧙 Подсказка: если пользователь кликнет по кнопке с питомцев, id питомца можно будет получить из объекта события 
  (event.target.id)
*/

const PETS = [
  { id: 'cat', title: '🐱' },
  { id: 'dog', title: '🐶' },
  { id: 'parrot', title: '🦜' },
  { id: 'fish', title: '🐠' },
  { id: 'spider', title: '🕷' },
  { id: 'snake', title: '🐍' },
  { id: 'hamster', title: '🐹' },
  { id: 'turtle', title: '🐢' },
  { id: 'chinchilla', title: '🦇' },
  { id: 'hedgehog', title: '🦔' },
  { id: 'rat', title: '🐀' },
  { id: 'frog', title: '🐸' },
]

const cart = []
console.log(cart);

const petShop = document.querySelector('.pet-shop')
const cartList = document.getElementById('cart-list')
const messageBox = document.getElementById('message-box')
const clearCartButton = document.getElementById('clear-cart-button')

// Рендерим кнопки для питомцев
for (let i = 0; i < PETS.length; i++) {
  const pet = PETS[i]

  const petButtonElement = document.createElement('button')// создан <button></button> 
  petButtonElement.classList.add('pet') // <button class='pet'></button>
  petButtonElement.id = pet.id // <button class='pet' id='cat'></button>
  petButtonElement.textContent = pet.title // <button class='pet' id='cat'> 🐱</button> 
  
  petShop.append(petButtonElement)
}

// Обновляем отображение корзины
function updateCartDisplay() {
  cartList.innerHTML = ''

  for (let i = 0; i < cart.length; i++) {
    const petId = cart[i]
    const pet = PETS.find((item) => item.id === petId)// может вернуть  { id: 'cat', title: '🐱' }, если не найдет undefined
    const petSpanElement = document.createElement('li')
    petSpanElement.classList.add('pet')
    petSpanElement.textContent = pet.title
    cartList.append(petSpanElement)
  }
}

clearCartButton.addEventListener('click', function () {
  cart.length = 0
  updateCartDisplay()
})

// Твой код:


// petShop.addEventListener('click',(event)=>{
//   cart.push(event.target.id)
//   updateCartDisplay()
//   if(cart.length >= 3){
//     messageBox.textContent = 'Вы не можете добавить более 3 питомцев'
//   }
// })

petShop.addEventListener('click', function (event) {
  if (!event.target.classList.contains('pet')) {
    return;
  }

  const petId = event.target.id;

  if (cart.length >= 3) {
    messageBox.textContent = 'Вы не можете добавить более 3 питомцев';
    return;
  }

  cart.push(petId);
  updateCartDisplay();
  messageBox.textContent = ''; // очищаем сообщение, если было
});


// })
//1.При клике на кнопку с питомцем, id питомца должен добавляться в массив cart.
//2.После добавления питомца в корзину, необходимо вызвать функцию updateCartDisplay
//  (она обновит отображение корзины).
//3. В корзину можно добавить не более 3 питомцев. Если пользователь пытается добавить больше, 
// то в messageBox должен появится текст: 'Вы не можете добавить более 3 питомцев'
