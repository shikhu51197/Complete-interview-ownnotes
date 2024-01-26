// Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// let promise = new Promise((resolve, reject) => setTimeout(() => resolve(100), 3000));
// tasks to be completed after promise resolution
// promise.then((val) => console.log(val)).catch(err => console.log(err));

//Promise Combinator  - help us to excute more than one at a time and give result accordingly
//Promise.all   Promise.any() Promise.allSettled Promise.race

//Promise.all  - it takes an array of all promise handle multiple when all promises are resolved return all promises and one fail then all rejected
//Promise.race  -  which excute first either fail or success it gives us as result
//Promise.any() -  which resolve promise excute first  it gives us as result  only that one promise if all fail then its give fail promises
// Promise.allSettled - if one fail then resturn all success promise as well fail one


//async await 