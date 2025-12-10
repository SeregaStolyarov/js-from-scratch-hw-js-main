/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resourceName, amount) {
    if (this.resources.hasOwnProperty(resourceName)) {
      this.resources[resourceName] += amount;
    } else {
      
    }
  }
};

console.log('Invalid resource');











// const num = [2, 3, 4, 5, 6, 7 ]
// const cars = [ 'audi', 'bmw', 'volvo']
// const cars2 = [{model:'Mers', year: 2000}, 
//   {model:' WV', year: 2001}, 
//   {model: 'jaguar', year: 2002}]

  // for (let i = 0; i < cars2.length; i++){
  //   console.log(cars2[i].model);
  // }

  // for (let i = 0; i < num.length; i++) {
  //   console.log(num[i]);
    
    
  // }
  
  

// for (let i = 0; i < num.length; i++) {
//   const element = num[i] * 3; 
// console.log(element);
// }
  
// for(let i = 0; i < num.length; i++ ){
//   if(num[i] > 3 ){
//     console.log(num[i]);
//   }
// }
  
// for(let i = 0; i < cars.length; i++ ){
//   if (cars[i].length <= 4 ){
//     console.log(cars[i]);
//   }
// }

// for(let i = 0; i < cars.length; i++ ){
//     console.log(`i have ${cars[i]}`);
//   }



//   for (let i = 0; i < num.length; i++) { 
// console.log(i);
//   }

//   for(let i = 0; i < cars.length; i++ ){
//     console.log( cars[i].length);
//   }






