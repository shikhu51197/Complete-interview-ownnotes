// fibonacci Number -> 0 , 1 , 1 ,2 , 3 ,  5 , 8 , 13.....

// f(0) = 0 , f(1)= 1
//F(n) = f(n-1)+f(n-2) , for n>1
// n=3   --> (3-1) + (3-2) = 2+1 = 3

// function fibonacciNumber(n){
//  const arr =[0 , 1]
//  for(let i=2 ;i<=n ;i++){
// arr.push(arr[i-1]+arr[i-2])
//  }
// return arr[n]
// }

// console.log(fibonacciNumber(5))  //[
// //     0, 1, 1,  2,
// //     3, 5, 8, 13
// //   ]
//tc - O(n)  sc-O(n)

// function fibonacciNumber(n) {
//   if (n <= 1) return n;

//   return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
// }

// console.log(fibonacciNumber(5)); // tc-O(2^n)   sc -O(2^n)

//one liner 
// const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
// console.log(fib(5))//tc - O(n)  sc-O(n)