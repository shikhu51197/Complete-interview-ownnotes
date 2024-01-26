// var let const  three ways we can decleare a variable in jacvascript .
//difference accessible through scoping, reassignment , redeclaration ,  and immutability ,hoisting,:-
//let const introduced in es6 version of javascript to overcome some of the limitations of var  in javascript , especially for avoiding  global variables and providing block-scoping.

//scope - it is a  certain region of the program where a defined variable is exists and  it can be accessible and beyond that it can not be accessible .
// various type :-  global , block (inside {}), function scope (inside function)

// Global Scope: If a variable is declared outside of any function or block, it becomes a global variable and is accessible throughout the entire program.

// var globalVar = "I am global";

// function exampleFunction() {
//     console.log(globalVar); // Accessible here
// }

// Function Scope: If a variable is declared inside a function, it is only accessible within that function.


// function exampleFunction() {
//     var localVar = "I am local";
//     console.log(localVar); // Accessible here
// }

// console.log(localVar); // Error - localVar is not defined here

// var a = 7
//  console.log(a) 
// function scope

// {
//     var a = 7
// }
// console.log(a) 
// it is accessible outside of the block



//block scope 
// {
//     let a = 7
// }
// console.log(a)
// it is not accessible outside of the block  gives ReferenceError   only we can access it inside block

// {
//     const  a = 7
// }
// console.log(a)
// it is not accessible outside of the block  gives ReferenceError



// declaration:-
// var a
// var a   // allow redeclarations as many time i want in the same scope reassign and update the value possible

// let a     reassign and update the value possible
// let a    SyntaxError: Identifier 'a' has already been declared  not allow redeclarations in the same scope

// const a   reassign not possible
// const a
// SyntaxError: Missing initializer in const declaration not allow redeclarations in the same scope


// let a
// {
//  let a   this comes under shadowing
// }

// ------// declaration without initialisation :-

// var a; allow redeclarations without initialisation

// let a ;allow redeclarations without initialisation

// const a;
// const b=8;
//  not allow redeclarations without initialisation

// Re-initialisation //reassign

// var a = 6;
// a = 8;
// console.log(a);can updated  // mutable

// let a = 5;
// a = 9;
// console.log(a); // can updated // mutable 

// const a = 6;
// a = 8;
// console.log(a);
//TypeError: Assignment to constant variable. can not updated // immutable



//Hoisting

// let  a = 10

// function multiply(x) {
//    return x * 10
// }

// let b = multiply(a)
// console.log(b)  //100

// hoisting is the default javascript behaviour of  javascript where function and variable declarations  are moved to the top of the code .

// all three (var, let, and const) are hoisted, but the key difference lies in the initialization. var is initialized with undefined, while let and const are not initialized, resulting in a ReferenceError if you try to access them before the declaration

// console.log(count) // undefined
// var count =1

// var count ;
// console.log(count) // undefined
//  count = 1

// console.log(count); 
// let count = 1; //ReferenceError: Cannot access 'count' before initialization

// function abc(){
    // console.log(a, b , c)
//     console.log(a ); 
//   //  console.log(b );
//     console.log( c);
//      let b = 1;
//    var a= 1;
//    const c = 1;
// }

// abc();  //ReferenceError: Cannot access 'b' before initialization

// temporaral dead zone 
// term to describe the state where variable are in the scope but they are not yet declared



// Scoping:

// var: Has function scope, meaning it is only scoped within the function where it is declared. If declared outside any function, it becomes a global variable.
// let: Has block scope, meaning it is scoped within the nearest curly braces {} where it is declared (e.g., within a block, loop, or an if statement).
// const: Also has block scope, similar to let.


// function example() {
//     if (true) {
//         var x = 1; // function-scoped
//         let y = 2; // block-scoped
//         const z = 3; // block-scoped
//     }

//     console.log(x); // Accessible
//     console.log(y); // ReferenceError: y is not defined
//     console.log(z); // ReferenceError: z is not defined
// }

// Reassignment:

// var: Can be reassigned and updated.
// let: Can be reassigned, but cannot be redeclared a=2 a=6(possible) in the same scope.let b let b (not possible)
// const: Cannot be reassigned a=7 a=8 (not possible) or redeclared once it is assigned a value.const a=8  const b =9 (possible)

// var a = 1;
// let b = 2;
// const c = 3;

// a = 4; // Valid
// b = 5; // Valid
// c = 6; // TypeError: Assignment to constant variable


// Immutability (for objects and arrays):

// var and let: Variables can be used to store mutable values, so objects and arrays assigned to these variables can be modified.
// const: While the variable itself cannot be reassigned, the content of the object or array assigned to it can be modified.

// const arr = [1, 2, 3];
// arr.push(4); // Valid, as the array is mutable

// const obj = { key: 'value' };
// obj.key = 'new value'; // Valid, as the object is mutable

// In general, it's recommended to use const by default and only use let when you know the variable needs to be reassigned. This helps make your code more predictable and avoids unintended reassignments.



// usecase -const for constants that should not be reassigned -constant configurations that should not change during the application's execution // and let for variables that may change during runtime-mutable setting that can be updated.


//in javascript the introduction of  let and const in es6 along with block scoping allows  variable shadowing

// variable shadowing

// function test() {
//   let a = "hello";

//   if (true) {
//     let a = "Hi";
//     console.log(a); // inside the block scope
//   }
//   console.log(a); // inside the function scope
// }

// test();//hi hello

// function test() {
//   var a = "hello";
// //   let b = "bye";
//   if (true) {
//     let a = "Hi";
//     var b = "tata"; //SyntaxError: Identifier 'b' has already been declared
//     console.log(a); // inside the block scope
//     // console.log(b);
//   }
// }

// test();

//output based questionon let and var
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//   console.log(i);
//   }, i * 1000);
//   } // 0 1 2 3 4

// for (var i = 0; i < 5; i++) {
// setTimeout(function () {
// console.log(i);
// }, i * 1000);
// } // 5 5 5 5 5
