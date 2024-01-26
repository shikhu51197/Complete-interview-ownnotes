// implicit binding - this  with dot notation
//explicit binding - with call  apply bind

// function makeUser() {
//     return {
//       name: "Piyush Agarwal",
//       ref() {
//         return this;
//       }
//     };
//   }

//   let user = makeUser();

//   console.log( user.ref().name ); // Piyush Agarwal

// const user = {
//   name: "Piyush Agarwal!",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(function () {
//   user.logMessage();
// }, 1000);

// ```plaintext

// After a delay of 1 second, `undefined` is logged to console.

// While `setTimeout()` function uses the `object.logMessage` as a callback, still, it invokes `object.logMessage` as a regular function, rather than a method.

// And during a regular function invocation *this* equals the global object which is `window` in the case of the browser environment.

// That's why `console.log(this.message)` inside `logMessage` method logs `window.message`, which is `undefined`.

// How can you fix this code so that 'Piyush Agarwal!' is logged to console?
// Write your solution in a comment below!

// const user = { name: 'Piyush', greet() { return `Hello, ${this.name}!`; }, farewell: () => { return `Goodbye, ${this.name}!` } }; console.log(user.greet());
// // What is logged? console.log(user.farewell()); // What is logged?

// let calculator = {
//   read() {
//     this.a = +prompt("a =", 0);
//     this.b = +prompt("b =", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// var length = 4;
// function callback() {
//   console.log(this.length);
//   // What is logged?
// }
// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };
// object.method(callback);
