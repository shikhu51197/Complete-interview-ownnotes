// a higher-order function is a function that can take other functions as arguments or return them as results.


// // Higher-order function that takes a function as an argument
// function applyOperation(x, operation) {
//     return operation(x);
// }

// // Function to be passed as an argument
// function double(x) {
//     return x * 2;
// }

// // Using the higher-order function with the 'double' function
// const result = applyOperation(5, double); // Result: 10


//these are array method  , difference  , how to make that unction , usecase and definition .

// Map:

// Concept: Mapping is a functional programming concept where you apply a given function to each element of a collection (e.g., a list, array, or set) to produce a new collection of transformed elements.
// Implementation: In languages like Python, JavaScript, or Ruby, you can use the map function to apply a specified function to each item in a list.



// Filter:

// Concept: Filtering is a functional programming concept where you select elements from a collection based on a certain condition.
// Implementation: In languages like Python or JavaScript, you can use the filter function to create a new collection containing only the elements that satisfy a given condition.


// Reduce:

// Concept: Reduction is a functional programming concept where you iteratively combine elements of a collection to produce a single result.
// Implementation: The reduce function (sometimes called fold in other languages) is used for this purpose. It takes a binary function and applies it cumulatively to the elements of a collection, reducing them to a single value.




// ForEach:

// Concept: forEach is a method used to iterate over each element of a collection and apply a specified function to each element. It doesn't produce a new collection but is useful for performing actions on each element.
// Implementation: In languages like JavaScript, you can use the forEach method on arrays to iterate over each element.


// forEach: It does not return anything. It simply iterates over the array and applies a provided function to each element. The return value of the forEach method is always undefined.
// map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.
// forEach: It is used when you want to perform an action or operation on each element of the array, such as logging them or updating a variable.
// map: It is used when you want to create a new array by transforming each element of the original array.
// forEach when you want to iterate over an array and perform an action on each element without creating a new array. Use map when you want to create a new array by transforming each element of the original array.

// const arr = [2, 5 , 3 , 4 , 7]

// const mapresult = arr.map((ar)=>{
// return ar +2
// })//.filter perform like that but not in foreach //give  us modifi arr

// const foreachresult = arr.forEach((ar , i)=>{
//     arr[i] = ar +5
//     }) //give  us modifi arr
    
// console.log(mapresult, foreachresult , arr)


// // forEach example
// const numbers = [1, 2, 3, 4];
// numbers.forEach((num) => console.log(num)); // Outputs: 1 2 3 4
// const resultForEach = numbers.forEach((num) => num * 2);
// console.log(resultForEach); // Outputs: undefined

// // map example
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // Outputs: [2, 4, 6, 8]


// // forEach use case
// const names = ['Alice', 'Bob', 'Charlie'];
// names.forEach((name) => console.log(`Hello, ${name}!`)); // Outputs: Hello, Alice! Hello, Bob! Hello, Charlie!

// // map use case
// const nameLengths = names.map((name) => name.length);
// console.log(nameLengths); // Outputs: [5, 3, 7]


// Real-life Use Cases:

// Map: Consider a scenario where you have a list of temperatures in Celsius, and you want to convert them to Fahrenheit. You could use the map function to apply the conversion formula to each temperature in the list.
// Filter: Imagine you have a list of products, and you want to filter out only the products that are currently in stock.
// Reduce: In financial applications, you might want to reduce a list of transactions to calculate the total balance.
// ForEach: For logging purposes, you might use forEach to iterate over a list of log entries and write each entry to a log file.