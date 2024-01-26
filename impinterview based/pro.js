

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// function fibonacciseries(n) {
//   let series = [];
//   for (let i = 0; i < n; i++) {
//     series.push(fibonacci(i));
//   }
//   return series;
// }
// console.log(fibonacciseries(15).filter(el => el % 2 === 0));



// var num = 4;
// function outer() {
// var num = 2;
// function inner() {
// num++;
// var num = 3;
// console.log("num", num);
// }
// inner();
// }
// outer();
// function sayHi() {
// return (() => 0)();
// }   output -  num3


// Write a program to multiply two number without using multiply Sign in Javascript
// function multiplay(a, b) {
//   let answer = a;
//   for (let i = 0; i < b - 1; i++) {
//   answer += a;
//   }
//   return answer;
//   }
//   console.log(multiplay(3 , 5))  15



// Write a program sorting in javascript
// const arr = [3,2,5,4,1,0]
// for (let i = 0; i < arr.length; i++) {
// for (let j = i+1; j < arr.length; j++) {
// if(arr[i] < arr[j]) {
// let temp = arr[i];
// arr[i] = arr[j];
// arr[j] = temp;
// }
// }
// }
// console.log("Elements of array sorted in  ascending order:");
// for (let i = 0; i < arr.length; i++) {
// console.log("Elements of array sorted in ascending order", arr[i])
// }




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

// Write a program return resolve if value is
// less than 5 using Promise
// function fun(a){
// let myPromise = new Promise((myResolve,
// myReject)=> {
// let x = 0;
// // The producing code (this may take some time)
// if (a < 7) {
// myResolve(`number is given ${a}`);
// } else {
// myReject("Error");
// }
// });
// myPromise.then((result)=>{
// console.log(result)
// })
// } fun(5);


// ● . Write a program for following output
// using arrow function

// const call = (a) => {
// return (b) => {
// return (c) => {
// return a * b * c;
// };
// };
// };
// console.log("output with arrow function", call(2)(4)(6));


// Write a program for following output
// ○ console.log("output with normal
// function",mul(2)(4)(6))
// function mul(a) {
// return function (b) {
// return function (c) {
// return a * b * c;
// };
// };
// }
// console.log("output with normal function", mul(2)(4)(6));



// Write a program to find element occurence in
// array
// const arr = [1,1,2,3,1,4]
// const count = {};
// for (const element of arr) {
// if (count[element]) {
// count[element] += 1;
// } else {
// count[element] = 1;
// }
// }
// console.log(count); // 👉️ {1: 3, 2: 1, 3: 2}

// Write a program to remove duplicate item
// from array
// const arr = [1,2,3,4,1,2];
// const b=[];
// for(let i=0;i<arr.length;i++){
// if(b.indexOf(arr[i]) == -1){
// b.push(arr[i])
// }
// }
// console.log("removed array value",b)

// const arr1 = [1,2,3,4,1,2];
// const b1=[];
// arr1.filter((dup)=>{
// if(b1.indexOf(arr[dup]) == -1){
// b1.push(arr1[dup])
// } })
// console.log("removed array value",b1)
