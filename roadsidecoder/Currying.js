// currying is a function that takes one arguments at a time and returns a new function expecting the next arguments . function callable for conversion of f(a,b) => f(a)(b)

// contructed by chaininng closures by immediately returning their inner function symmentationly

// function f(a){
//     return function (b){
//         // console.log(a , b)
//         return `${a} ${b}`
//     }
// }
// console.log(f(5)(6))

//sum (2)(6)(1)

// function sum(a, b , c ){
//     return a+b+c
// }
// console.log(sum(2 , 6 , 1)) // 9 normal

// function f(a) {
//   return function (b) {
//     return function (c) {
//       // console.log(a+b+c)
//       return a + b +c;
//     };
//   };
// }
// console.log(f(5)(6)(4)); // 15 closure

// evaluate('sum')(4)(2)  multiply divide , subtract

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else if (operation === "subtract") return a - b;
//       else return "Invalid Operation"
//     };
//   };
// }

// // console.log(evaluate('sum')(4)(2));//6
// // console.log(evaluate('multiply')(4)(2));//8
// // console.log(evaluate('divide')(4)(2)) ;//2
// // console.log(evaluate('subtract')(4)(2)) //2

// const mul = evaluate("multiply")

// console.log(mul(4)(2) ) //8
// console.log(mul(5)(7) ) //35

//infinite Currying _>sum(1)(2)(3)....(n)

// function add(a) {
//   return function (b) {
//    if(b) return add(a+b)
//    return a
//   };
// }
// console.log(add(2)(5)(4)(8)())

//currying vs partial application
//partial application - it transform a func into another func with small argument that func receives

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// const x = sum(10);
// console.log(x(5, 6)); //21
// console.log(x(3, 2)); //15

// //or
// console.log(sum(20)(5, 6)); //31

// function sum(a) {
//   return function (b) {
// return function ( c) {
//     return a + b + c;
//   };
// }
// }

// Manipulating dom
{
  /* <h1 id="heading">Hello shikhu</h1> */
}
// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }

// const updateHeader = updateElementText("heading")

// updateHeader("subscribe to RoadsideCoder")

// curry() impementation converts f(a, b ,c)into f(a)(b)(c)

// function curry(func) {
//   return function curriedFunc(...args) {
    // console.log(func.length , args.length)
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return function (...next) {
//         return curriedFunc(...args, ...next);
//       };
//     }
//   };
// }

// const sum = (a, b, c) => a + b + c;

// const totalSum = curry(sum);
// console.log(totalSum(1)(2)(3));//6
