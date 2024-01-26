// closures
// that refrences the variables from its outer scope from its inner scope

// laxical scope - that refers to  current context of your code either its outer or locally defined .

// // global scope
// function mydata() {
//     var name = 'roadside-coder'
//     //inner scope 2
//      function dispalyname(){
//         //inner scope
//        console.log(name)
//      }
//      dispalyname()
// }
// mydata()

// function makefunc() {
//     var name = 'roadside-coder'
//     //inner scope 2
//      function dispalyname(num){
//         //inner scope
//        console.log(name ,num)
//      }
//      return dispalyname
// }
// makefunc()(5)

// ...//closure scope chain
// global , function , local

// var username = 'reema'
// function makefunc() {
//     var name = 'roadside-coder'
//     //inner scope 2
//      function dispalyname(num){
//         //inner scope
//        console.log(name ,num, username)
//      }
//      return dispalyname
// }
// makefunc()(5)

// var e = 10;
// function sum(a) {
//   return function (b) {
//anonymous function
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4))//20

//iife
// output based
// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1; // shadowing
//     console.log(count);//1
//   }
//count =0
//   console.log(count);//0
// })();

// function createBase(num){
//     return function (innernum){
//         console.log(innernum + num )
//     }
// }

//  var addSix = createBase(6)
//  addSix(10) // 16
//  addSix(15) // 21

//time optimization

// function find(index){
//     let a= []
//     for(let i=0 ; i<1000000 ; i++){
//         a[i] = i*i
//     }
//     return function(index){
//       console.log(a[index])
//     }

// }
// const closure = find()
// console.time('6')
// closure(6)
// console.timeEnd("6")
// console.time('50')
// closure(50)
// console.timeEnd('50')

//block scope and settimeout
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//   console.log(i);
//   }, i * 1000);
//   } // 0 1 2 3 4

// for (var i = 0; i < 5; i++) {
// setTimeout(function () {
// console.log(i);
// }, i * 1000);
// } // 5 5 5 5 5  take reference of i and print all the value which comes at the end

/// print 0 1 2  using var only dont use let we can do it by using closure
// for (var i = 0; i < 3; i++) {
//  //   function inner(i){
//        setTimeout(function () {
//     console.log(i);
//     }, i * 1000);
//  //   }
//  //   inner(i)
//     }

//how would you use a closure to create a private counter ? _counter use in private variable

// function counter() {
//   var _counter = 0;

//   function add(increment) {
//  _counter += increment
//   }

//   function retrive(){
//     return "Counter = " + _counter //=15
//   }
//   return {
//     add , retrive,
//   }
// }

// const c =counter()
// c.add(5)
// c.add(10)

// console.log(c.retrive()) //15

//module pattern

// var Module = (function (){

//     function privateMethod(){
//         console.log("Private")
//     }
//     return {
//         publicMethod : function(){
//             console.log("public")
//         }
//     }
// })()

// Module.publicMethod() // public
// Module.privateMethod()// giving error

// //make this run only once

// let view;
// function likethevideo() {
//   let called = 0;

//   return function () {
//     if (called > 0) {
//       console.log("Already Subscribed to RoadSide Coder");
//     } else {
//       view = " Roadside Coder";
//       console.log("Subscribe to ", view);
//       called++
//     }
//   };
// }
// let  isSubscribed = likethevideo()
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();

// once polyfill function

// function once(func, context) {
//   let ran;

//   return function () {
//     if (func) {
//       ran = func.apply(context || this, arguments);
//       func = null
//     }
//     return ran
//   };
// }// using once our console print it only once time

// const hello = once((a, b)=> console.log('hello' , a ,b))

// hello(1 , 2)
// hello()
// hello()
// hello()

//memoize polyfill //implement caching

// function mymemoize(fn, context) {
//   const res = {};
//   return function (...args) {
//     var argsCache = JSON.stringify(args);
//     if (!res[argsCache]) {
//       res[argsCache] = fn.call(context || this, ...args);
//     }
//       return res[argsCache];
    
//   };
// }
// const clumsysquare = (num1, num2) => {
//   for (let i = 1; i <= 10000000; i++) {}
//   return num1 * num2;
// };


// const memoizeClumsySquare = mymemoize(clumsysquare)
// console.time("1st call");
// console.log(memoizeClumsySquare(9467, 7649));
// console.timeEnd("1st call");

// console.time("2nd call");
// console.log(memoizeClumsySquare(9467, 7649));
// console.timeEnd("2nd call");



//previous look 

// const clumsysquare = (num1, num2) => {
//   for (let i = 1; i <= 10000000; i++) {}
//   return num1 * num2;
// };
// console.time("1st call");
// console.log(clumsysquare(9467, 7649));
// console.timeEnd("1st call");

// console.time("2nd call");
// console.log(clumsysquare(9467, 7649));
// console.timeEnd("2nd call");


//difference between closure and scope 

// global local and inner  scope in closure 
// global and local in scope 