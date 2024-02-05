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



// Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML.

// - It was designed for communication between web browsers and web servers, but it can also be used for other purposes.
// - HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response.
// - HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests.

// HTTP allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.

// Clients and servers communicate by exchanging individual messages (as opposed to a stream of data). The messages sent by the client, usually a Web browser, are called requests and the messages sent by the server as an answer are called responses.

// HTTP as an application layer protocol, on top of TCP (transport layer) and IP (network layer) and below the presentation layer.Designed in the early 1990s, HTTP is an extensible protocol which has evolved over time. It is an application layer protocol that is sent over TCP, or over a TLS-encrypted TCP connection, though any reliable transport protocol could theoretically be used. Due to its extensibility, it is used to not only fetch hypertext documents, but also images and videos or to post content to servers, like with HTML form results. HTTP can also be used to fetch parts of documents to update Web pages on demand.

// ### HTTP Headers

// HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

// ### HTTP Request Methods

// HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs. Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be safe, idempotent, or cacheable.

// GET

// - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

// POST

// - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

// PUT

// - The PUT method replaces all current representations of the target resource with the request payload.

// DELETE
// The DELETE method deletes the specified resource.

// [Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

// ### HTTP Response Codes

// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

// - Informational responses (100–199),
// - Successful responses (200–299),
// - Redirects (300–399),
// - Client errors (400–499),
// - Server errors (500–599).

// ```
// 200 - OK
// 201 - Created
// 202 - Accepted
// 404 - Not Found
// 405 - Method Not allowed
// 408 - Request Timed out
// 500 - Internal Server Error
// 503 - Service unavailable

// ```

// ### [curl](https://curl.haxx.se/)

// curl is used in command lines or scripts to transfer data. It is also used in cars, television sets, routers, printers, audio equipment, mobile phones, tablets, settop boxes, media players and is the internet transfer backbone for thousands of software applications affecting billions of humans daily.

// Client–server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.[1] Often clients and servers communicate over a computer network on separate hardware, but both client and server may reside in the same system. A server host runs one or more server programs, which share their resources with clients. A client does not share any of its resources, but it requests content or service from a server. Clients, therefore, initiate communication sessions with servers, which await incoming requests. Examples of computer applications that use the client-server model are email, network printing, and the World Wide Web.