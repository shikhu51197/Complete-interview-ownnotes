// Nodejs
// Q1. What is Node.js and how it works?
// Node.js is an open-source backend javascript runtime environment. It is used as backend service where javascript works on the server-side of the application. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

// Q2. How do you manage packages in your node.js project?
// Modules are the blocks of reusable code consisting of Javascript functions and objects which communicate with external applications based on functionality. A package is often confused with modules, but it is simply a collection of modules (libraries).

// Q3. How can we use async await in node.js?
// The functions need not to be chained one after another, simply await the function that returns the Promise. But the function async needs to be declared before awaiting a function returning a Promise.

// Example: After async/await

// async function fun1(req, res){
//   let response = await request.get('http://localhost:3000');
//     if (response.err) { console.log('error');}
//     else { console.log('fetched response');
// }

// Q4. What is node.js streams?
// Streams are one of the fundamental concepts of Node.js. Streams are a type of data-handling methods and are used to read or write input into output sequentially. Streams are used to handle reading/writing files or exchanging information in an efficient way.

// Accessing Streams:

// const stream = require('stream');
// Q5. Describe the exit codes of Node.js?
// Node.js is a cross-platform, open-source back-end JavaScript runtime environment that uses the V8 engine to execute JavaScript code outside of a web browser. Exit codes in Node.js are a specific group of codes that finish off processes, which can include global objects as well.

// Q6. Explain the concept of stub in Node.js?
// A small program routine that substitutes for a longer program which is possible to be loaded later or that is remotely located.

// Features of stub:

// Stubs can be either anonymous.
// Stubs can be wrapped into existing functions. When we wrap a stub into the existing function the original function is not called.
// Q7. Enhancing Node.js performance through clustering.
// Clustering is the process through which we can use multiple cores of our central processing unit at the same time with the help of Node JS, which helps to increase the performance of the software and also reduces its time load.

// We can install cluster modules through the given command.

// npm i cluster
// Q8. What is WASI and why is it being introduced?
// WebAssembly or wasm is a new portable, size- and load-time-efficient format suitable for compilation to the web. It is a new binary format for the web. It writes applications for the Web and languages other than JavaScript.

// Q9. How to measure the duration of async operations?
// Asynchronous operation in Node.js is a non-blocking operation which means if we perform an asynchronous operation at a certain point in code then the code after that is executed and does not wait for this asynchronous operation to complete.

// Syntax:

// const calcTime = async () => {
//   const start = Date.now();
//   await someAsyncOperation();
//   const end = Date.now()
//   const duration = end - start;
// }
// Q10. What is a thread pool and which library handles it in Node.js?
// When we say that a framework is single-threaded, that means only one statement is executed at a single time. Whatever is on top of the call stack, gets called in a non-blocking fashion.






// 1. What is Node.js?
// Node.js is a JavaScript engine used for executing JavaScript code outside the browser. It is normally used to build the backend of the application and is highly scalable.

// 2. What is the difference between Node.js and JavaScript?
// JavaScript is a scripting language whereas Node.js is an engine that provides the runtime environment to run JavaScript code.

// JavaScript: It is a light-weighted programming language (“scripting language”) used to develop interactive web pages. It can insert dynamic text into the HTML elements. JavaScript is also known as the browser’s language.
// Node.js: It is used to run JavaScript programs outside the browser and it mostly runs server-side code. It cannot be used to run HTML tags.
// 3. Is Node.js single-threaded?
// Yes, Node.js is a single-threaded application as it is built using the single-threaded event loop model architecture.

// 4. What kind of API function is supported by Node.js?
// There are two types of API functions supported by Node.js:

// Synchronous: These API functions are used for blocking code.
// Asynchronous: These API functions are used for non-blocking code.
// 5. What is the difference between Synchronous and Asynchronous functions?
// Synchronous function: These are the function that block the execution of the program whenever an operation is performed. Hence these are also called blocking operations. We use these functions to perform lightweight tasks
// Asynchronous function: These are the operations that do not block the execution of the program and each command is executed after the previous command even if the previous command has not computed the result. We use these functions to perform heavy tasks.
// 6. What is a module in Node.js?
// In Node.js Application, a Module can be considered as a block of code that provide a simple or complex functionality that can communicate with external application. Modules can be organized in a single file or a collection of multiple files/folders. Modules are useful because of their reusability and ability to reduce the complexity of code into smaller pieces. Some examples of modules are. http, fs, os, path, etc.

// 7. What is npm and its advantages?
// NPM stands for Node Package Manager. It is an online repository for Node.js packages. We can install these packages in our projects/applications using the command line.

// 8. What is middleware?
// Middleware is the function that works between the request and the response cycle. Middleware gets executed after the server receives the request and before the controller sends the response.

// 9. How does Node.js handle concurrency even after being single-threaded?
// Node.js internally uses libuv library for handling all async call. This library creates multiple thread pools to handle async operations.

// 10. What is control flow in Node.js?
// Control Flow functions are executed whenever there is an async call made in the program. These functions define the order in which these asynchronous functions will be executed.

// 11. What do you mean by event loop in Node.js?
// Event Loop in Node.js is used to handle callbacks. It is helpful in performing non-blocking I/O operations. An event loop is an endless loop, which waits for tasks, executes them, and then sleeps until it receives more tasks.

// 12. What is the order in which control flow statements get executed?
// The order in which the statements are executed is as follows:

// Execution and queue handling
// Collection of data and storing it
// Handling concurrency
// Executing the next lines of code
// 13. What are the main disadvantages of Node.js?
// Since Node.js is single-threaded so multi-threaded engines are better and can handle tasks more efficiently. Also, we do not use relational databases with Node.js like MySQL mostly non-relational databases like MongoDB is used.

// 14. What is REPL in Node.js?
// REPL in Node.js stands for Read, Evaluate, Print, and Loop. It is a computer environment similar to the shell which is useful for writing and debugging code as it executes the code in on go.

// 15. How to import a module in Node.js?
// We use the require module to import the External libraries in Node.js. The result returned by require() is stored in a variable which is used to invoke the functions using the dot notation.

// 16. What is the difference between Node.js and AJAX?
// Node.js is a JavaScript runtime environment that runs on the server side whereas AJAX is a client-side programming language that runs on the browser.

// 17. What is package.json in Node.js?
// package.json is a file that is used to store the metadata of all the contents of the project. It is used to describe the module used, run commands, and other useful information about the project.

// 18. How to write hello world using node.js?
// const http = require('http'); 
  
// // Create a server object 
// http.createServer(function (req, res) { 
//     res.write('Hello World!');  
//     res.end(); 
// }).listen(3000);
// Run this program from the command line and see the output in the browser window. This program prints Hello World on the browser when the browser sends a request through http://localhost:3000/.

// 19. What is the most popular Node.js framework used these days?
// The most famous Node.js framework used is Express.js as it is highly scalable, efficient, and requires very few lines of code to create an application.

// 20. What are promises in Node.js?
// A promise is basically an advancement of callbacks in NodeJS. In other words, a promise is a JavaScript object which is used to handle all the asynchronous data operations. While developing an application you may encounter that you are using a lot of nested callback functions which causes a problem of callback hell. Promises solve this problem of callback hell.