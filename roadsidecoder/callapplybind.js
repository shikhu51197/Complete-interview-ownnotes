// var obj = {name : "Piyush"};
// function sayHello(){
//   return "Hello " + this.name;
// }

// console.log(sayHello());

// function sayHello(){
//     return "Hello " + this.name;
//   }

//   var obj = {name: "Piyush"};

//   console.log(sayHello.call(obj)); //Hello Piyush

//   function sayHello(day,status){
//     return "Hello " + this.name + " today is " + day + " and feel "+ status;
//   }

//   var obj = {name: "Piyush"};

//   console.log(sayHello.apply(obj,["tuesday", "good"])); // 'Hello Piyush today is tuesday'

// function sayHello(){
//     return "Hello " + this.name;
//   }

//   var obj = {name: "Piyush"};

//   const helloFn = sayHello.bind(obj);

//   console.log(helloFn());

// const person = { name: 'Piyush' };

// function sayHi(age) {
//   return `${this.name} is ${age} years`;
// }

// console.log(sayHi.call(person, 24)); //---1?
// console.log(sayHi.bind(person, 24)); //---2?

// const age = 10;
// var person = {
//     name: "Piyush",
//   age: 20,
//   getAge: function(){
//     return this.age;
//   }
// }

// var person2 = {age:  24};
// person.getAge.call(person2); // show with apply and bind as well

// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); //---1?
//   console.log(data.getStatus.call(this));// ---2?
// }, 0);

// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Queen' }
//   ];

//   function printAnimals(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//     }

// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push(elements);
// array.push.apply(array, elements); //[a,b,0,1,2]


//find max and min values
// const numbers = [5, 6, 2, 3, 7];

// // using Math.min/Math.max apply

// let max = Math.max.apply(null, numbers); // equal to Math.max

// let min = Math.min.apply(null, numbers); // equal to Math.min

// console.log(max, min);
// vs. simple loop based algorithm

// max = -Infinity, min = +Infinity;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }


// function checkPassword(success , failed){
//     let password = prompt('password?','')
//     if (password === "me")success()
//     else failed()
// }

// let user = {
//     name :"shikha" ,

//     loginSuccess(){
//         console.log(`${this.name} logged in`)
//     },
    
//     loginFailed(){
//         console.log(`${this.name}failed to  log in`)
//     },
// }

// checkPassword(user.loginSuccess.bind(user) , user.loginFailed.bind(user) )