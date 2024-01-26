//1. function declaration/definition/statement
// when a function return something

// function square(num) {
// return num *num
// }

//2. function expression
// when we store a function inside a variable

// const square = function (num) {
// return num * num
// }
// console.log(square(5))

//this function is known as anonymous function - doesnot have  any  name it can assign to a variable or can  be pass as a callback may be

///3. First Class Functions
//  where a function  can be treated like  a variable there functions are called fcf .
// function can be pass into another functions can be used manipulated and return
// from those function  everything what variable do function also do

// function square(num){
//     return num * num
// }

// function displaySquare(fn){
//     console.log('square is' + fn(5))
// }

// displaySquare(square)

///4. IIFE - immediatetly invoked function execution
// function square (num) {
//     return num * num
//     }
//     console.log(square(5))
// inplace of this  we can write in iife

// (function square(num){
//     console.log(num * num )
// })(5)

//ans - 25

//  output based
//  (function (x){
//     return (function (y){
//         console.log(x) // 1
//     })(2)
//  })(1)  // closure like check value of x in which function it is exists

//5. function scope
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//   console.log(i);
//   }, i * 1000);
//   } // 0 1 2 3 4 // because of block scope

// for (var i = 0; i < 5; i++) {
// setTimeout(function () {
// console.log(i);
// }, i * 1000);
// } // 5 5 5 5 5 because of function scope

//6- function hoisting

//  functionName()

//  function functionName()  {
//     console.log("function Name is hoisted")
//  }

// output based

// var x = 21
//  var fun = function(){
//     console.log(x)
//   var x= 20 // undefined
//  }
// fun()  // excecution context initilize complete codefirst global then  function and local  for hoist the variable on top of the scope

// params vs arguments
// function square(num) { // params
//   console.log(num * num);
// }
// square(5);// arguments

//spread vs rest operators

// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }
// var arr = [5 , 6]
// multiply(...arr);// spread

// function multiply(...nums) {//rest operators
//   console.log(nums[0] * nums[1] );
// }
// var arr = [5 , 6]
// multiply(...arr);// spread

// output based

// const fn = (a ,  x , y ,...numbers)=>{
//     console.log(a , x , y ,numbers)
// }
// fn(5 , 6, 3 , 7 ,8 , 9)

// 5 6 3 [ 7, 8, 9 ]

//callback function

// use in  predefine function is like setTimeout , map ,reduce  , fitler  , eventListener  , setinterval

// document.addEventListener("click", function (params) {

// });

//arrow function
// introduce in es6 version of js similar like normal function it works differently

// const add = function (num1  ,num2) {
//     return num1 + num2;
//     } // normal function

// arrow function - syntax  , implicit return function   , arguments

// const add = (num1, num2) => num1 + num2; //implicit return
//  or 
// const add = (num1, num2) => {
//   return num1 + num2;
// }; 

// function fn (){
//     console.log(arguments)
// }
// fn(1 , 2 , 3)

// const fn = () =>{
//     console.log(arguments)
// }
// fn(1 , 2 , 3) // argument is not defined


// this keyword

