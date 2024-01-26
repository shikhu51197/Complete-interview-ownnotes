// let x = 5;

// function foo() {
//   console.log(x);
// }

// foo();

// let x = 10;

// var obj1 = {
//     address : "Mumbai,India",
//     getAddress: function(hel){
//     console.log(this.address , hel);
//     }
//     }
//     obj1.getAddress("shikhu")
    

function outer() {
    function inner() {
    console.log(x);
    }
    let x = 10;
    inner();
    console.log(x);
    if (true) {
    let x = 5;
    console.log(x);
    }
    console.log(x);
    }
    outer();   
    // Explain how the hoisting works in this code, and why the output is what it is.