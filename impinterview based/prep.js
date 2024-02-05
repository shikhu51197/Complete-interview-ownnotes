// Prototypal Inheritance in JavaScript:

// In JavaScript, objects can inherit properties and methods from other objects through prototypal inheritance. Each object has a prototype, and when a property or method is not found on the object itself, JavaScript looks for it in the object's prototype chain.
// // Parent object
// const animal = {
//   sound: 'Make a sound',
//   makeSound() {
//     console.log(this.sound);
//   }
// };

// // Child object inheriting from the parent
// const cat = Object.create(animal);
// cat.sound = 'Meow';

// cat.makeSound(); // Outputs: Meow


// Closures in JavaScript:

// Closures occur when a function is defined inside another function and has access to the outer function's variables. They allow variables to be "captured" even after the outer function has finished execution.
// function outerFunction(x) {
//     // Inner function forms a closure, capturing the 'x' variable
//     return function innerFunction(y) {
//       console.log(x + y);
//     };
//   }
  
//   const closureExample = outerFunction(5);
//   closureExample(3); // Outputs: 8

// Web Technologies (HTTP and HTML5):

// HTTP Request and Response:

// Main components of an HTTP request: Method (GET, POST, etc.), URL, Headers, Body.
// Main components of an HTTP response: Status code, Headers, Body.
// HTML5 Features:

// New semantic elements (header, footer, article, etc.).
// Audio and video support.
// Canvas for drawing graphics.
// Local storage and session storage for client-side data storage.
// Node.js/Express.js or React.js/Vue.js:

// Node.js Architecture:

// Event-driven, non-blocking I/O model.
// Single-threaded event loop.
// Asynchronous operations handled via callbacks, promises, or async/await.
// React.js vs Vue.js:

// React is more declarative, uses a virtual DOM, and is maintained by Facebook.
// Vue is more flexible, has a simpler learning curve, and provides better integration with templates.
// RESTful APIs and Services:

// Key Principles of RESTful Design:

// Stateless communication.
// Uniform Interface (HTTP verbs, resource URIs).
// Representations of resources.
// HATEOAS (Hypermedia as the Engine of Application State).
// Authentication and Authorization in RESTful API:

// Authentication: Using tokens (JWT, OAuth) or API keys.
// Authorization: Implementing roles and permissions, ensuring secure access to resources.
// SQL and NoSQL Databases:

// Differences:

// SQL databases are relational and use structured query language. NoSQL databases are non-relational and provide flexibility in data storage.
// Example Scenario:

// Choose SQL for a banking system with complex transactions and relationships.
// Choose NoSQL for a real-time analytics system handling large volumes of unstructured data.
// Linux/Unix Setup and Administration:

// Linux File System Structure:

// /bin, /sbin, /usr, /etc, /var, /home, etc.
// Key Commands: ls, cd, cp, mv, rm, mkdir, chmod, chown, etc.
// Troubleshooting Performance Issue on Linux Server:

// Use tools like top, htop, or ps to identify resource-intensive processes.
// Analyze logs (e.g., /var/log directory) for errors or performance-related messages.
// Code Versioning and Tools (Git):

// Purpose of Version Control:

// Track changes in code over time.
// Collaborative development and team coordination.
// Rollback to previous versions if needed.
// Git Merge Conflict:

// Occurs when two branches have changes in the same part of a file.
// Resolve by manually editing the conflicting parts, then commit the changes.
// Use tools like git mergetool for assistance.


// Synchronous and asynchronous programming refer to two different approaches in handling tasks and operations in a program.

// Synchronous Programming:

// In synchronous programming, tasks are executed sequentially, one after the other. Each task must complete before the next one starts.
// It is a straightforward and easy-to-understand approach but may lead to blocking, where the program waits for a task to finish before moving on.
// Example code in JavaScript:


// function synchronousExample() {
//   console.log('Task 1');
//   console.log('Task 2');
//   console.log('Task 3');
// }

// synchronousExample();
// In this example, Task 1, Task 2, and Task 3 will execute in order, and the program will wait for each task to finish before moving to the next one.

// Asynchronous Programming:

// In asynchronous programming, tasks are executed independently of the main program flow. The program doesn't wait for a task to complete before moving on to the next one.
// Asynchronous programming is commonly used for operations that may take time, such as fetching data from a server or reading from a file.
// Example code in JavaScript using callbacks:


// function asynchronousExample(callback) {
//   console.log('Task 1');

//   // Simulate an asynchronous operation (e.g., fetching data)
//   setTimeout(function () {
//     console.log('Task 2 (asynchronous)');
//     callback();
//   }, 1000);

//   console.log('Task 3');
// }

// // Usage
// asynchronousExample(function () {
//   console.log('All tasks completed');
// });
// In this example, Task 1, Task 3, and the asynchronous Task 2 will execute. The program continues to execute without waiting for Task 2 to finish. The callback function is called when Task 2 completes.

// Example code using Promises:


// function asynchronousPromiseExample() {
//   console.log('Task 1');

//   // Simulate an asynchronous operation (e.g., fetching data) using a Promise
//   const asyncTask = new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log('Task 2 (asynchronous)');
//       resolve();
//     }, 1000);
//   });

//   asyncTask.then(function () {
//     console.log('All tasks completed');
//   });

//   console.log('Task 3');
// }

// // Usage
// asynchronousPromiseExample();
// Promises provide a cleaner way to handle asynchronous code. In this example, the Promise is resolved when Task 2 completes, and the .then block is executed


// Form Validation in HTML:

// Use HTML attributes like required, minlength, maxlength, and pattern for basic form validation.
// Employ JavaScript for more complex validation logic, ensuring a seamless user experience.
// Hooks, the purpose of useEffect:

// React hooks, including useEffect, enable functional components to manage state and side effects.
// useEffect is particularly useful for handling asynchronous operations like data fetching, ensuring proper lifecycle management in functional components.
// useCallback Hook:

// useCallback is a React hook utilized to memoize functions, preventing unnecessary re-creation of functions on each render.
// It is valuable in optimizing performance by optimizing the rendering process.
// Memoization:

// Memoization is a technique that optimizes performance by caching the results of expensive function calls and returning the cached result when the same inputs occur again.
// It is particularly beneficial in React to avoid unnecessary re-rendering.
// How to Optimize React App:

// Optimize React apps by implementing techniques such as code splitting, lazy loading, using production builds, optimizing images, and minimizing re-renders with tools like React.memo.
// Global State Management, Context API, Redux:

// The Context API in React is used for global state management, providing a way to share values like themes or authentication state among components.
// Redux is another library for managing global state in more complex applications, offering a centralized store and predictable state changes.
// What is Express:

// Express is a minimal and flexible Node.js web application framework that simplifies the process of building web and mobile applications.
// It provides a robust set of features for routing, middleware, and handling HTTP requests and responses.
// Purpose of Express:

// Express simplifies web application development by offering utilities for routing, middleware, and handling HTTP requests and responses.
// It streamlines the creation of server-side applications in Node.js.
// Authentication Implementation in Express:

// Authentication in Express can be implemented using middleware like Passport.js.
// User credentials are verified, and sessions or tokens are commonly used for subsequent requests.
// Securing Express Application:

// Secure an Express application by using HTTPS, validating user input, protecting against SQL injection, cross-site scripting (XSS), and implementing proper authentication and authorization.
// Discussion on Company:

// Express genuine interest in the company's values, mission, and alignment with your skills.
// Highlight specific projects or achievements that demonstrate your suitability for the company culture.
// Given a String Representing Roman Numerals:

// Write a program to convert it into integers by iterating through the string, comparing numeral values, and updating the total accordingly.
// What is a Database:

// Define a database as a structured collection of data stored electronically, enabling efficient storage, retrieval, and management of data.
// Why Choose JavaScript Over Other Languages:

// JavaScript is often chosen for its versatility, serving as the primary language for both front-end and back-end development in web applications.
// Synchronous and Asynchronous Programming:

// Explain the difference between synchronous and asynchronous programming, emphasizing JavaScript's asynchronous nature and its advantages in web development.
// Tech Stacks and Projects:

// Discuss familiarity with tech stacks like MERN (MongoDB, Express, React, Node.js) and provide insights into specific projects, highlighting your role and achievements.
// What is MongoDB, and What Kind of Database is it:

// MongoDB is a NoSQL database known for its flexible schema, scalability, and ability to handle large amounts of unstructured data.
// Inquired About Knowledge of Cloud Services like AWS, GCP:

// Share your experience with cloud services, emphasizing any projects where you utilized AWS or GCP infrastructure, storage, or computing resources.