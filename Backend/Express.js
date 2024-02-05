// Expressjs
// Q1. How does Express.js handle middleware?
// Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle. Middleware gets executed after the server receives the request and before the controller actions send the response.

// The basic syntax for the middleware functions are as follows –

// app.get(path, (req, res, next) => {}, (req, res) => {})
// Q2. How does Express.js handle request and response objects?
// We have a ‘req‘ (request) object in Express JS which is used to represent the incoming HTTP request that consists of data like parameters, query strings, and also the request body. Also we have ‘res‘ (response) which is used to send the HTTP response to the client which allows the modification of headers and consists of status codes, and resources.

// Q3. How can we create a Rest API route in ExpressJS?
// Node.js server code sets up a RESTful API for managing data. It provides endpoints for performing CRUD (Create, Read, Update, Delete) operations on a collection of records. The server uses the Express.js framework to handle HTTP requests.

// Q4. What is the difference between a traditional server and an Express.js server?

// Traditional server

// Express.js server

// Typically, traditional servers are built using various server-side technologies and frameworks, such as Java with Spring, Python with Django, Ruby on Rails, ASP.NET, etc.	Express.js is a minimal and flexible Node.js web application framework. It is specifically designed for building web applications and APIs using JavaScript on the server side.
// Traditional servers may use a synchronous or asynchronous programming model, depending on the underlying technology.	Express.js is built on top of Node.js, which uses an event-driven, non-blocking I/O model. Asynchronous programming is fundamental to Node.js and, by extension, to Express.js.
// Frameworks like Spring or Django often come with built-in middleware and routing systems.	Express.js also provides middleware and routing, but it has a more lightweight and flexible approach. Middleware functions can be added to the request-response cycle to perform specific tasks.
// Different server-side frameworks have their own communities, ecosystems, and plugins. The size and activity of these communities can vary depending on the framework.	Express.js has a large and active community. It is one of the most popular Node.js frameworks, and as such, it benefits from a rich ecosystem of middleware, plugins, and extensions.
// Q5. What is Token-based Authentication? What is JWT?
// A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature.

// Q6. What is Pub-Sub architecture?
// Publisher Subscriber basically known as Pub-Sub is an asynchronous message-passing system that solves the drawback above. The sender is called the publisher whereas the receiver is called the subscriber. The main advantage of pub-sub is that it decouples the subsystem which means all the components can work independently.

// Q7. Write a code to get post a query in Express.js.
// POST parameter can be received from a form using express.urlencoded() middleware and the req.body Object. The express.urlencoded() middleware helps to parse the data that is coming from the client-side.

// Syntax:

//  express.urlencoded( [options] )
// Q8. What do you understand by Scaffolding in Express.js?
// Scaffolding is creating the skeleton structure of application. It allows users to create own public directories, routes, views etc. Once the structure for app is built, user can start building it.

// Syntax:

// npm install express --save
// Q9. Explain Error Handling in Express.js
// Error handling in Express.js refers to the process of capturing and responding to errors that occur during the execution of an Express application. In Express, you can handle errors using middleware functions, which are functions that have access to the request and response objects, as well as the next middleware function in the application’s request-response cycle.

// Q10. How to do Templating using ExpressJS in Node.js ?
// Template Engine : A template engine basically helps us to use the static template files with minimal code. At runtime, the template engine replaces all the variables with actual values at the client-side.
