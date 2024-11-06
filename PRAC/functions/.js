
// Functions in JavaScript are fundamental building blocks that allow you to encapsulate code for reuse, abstraction, and modularity. Here's a comprehensive guide:

// Basic Function Declaration
// Functions are declared using the function keyword.


function greet() {
  console.log('Hello, World!');
}
greet();  // Output: Hello, World!
// Function Expressions
// Functions can be stored in variables.

// 
let sayHi = function() {
  console.log('Hi!');
};
sayHi();  // Output: Hi!
// Arrow Functions
// A more concise syntax introduced in ES6.

let add = (a, b) => a + b;
console.log(add(2, 3));  // Output: 5
// Parameters and Arguments
// Functions can accept parameters and arguments.


function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));  // Output: 20
// Default Parameters
// Assign default values to parameters.

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
greet();  // Output: Hello, Guest!
// Rest Parameters
// Collect multiple arguments into an array.


function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));  // Output: 10
// Return Values
// Functions can return values.


function getAge() {
  return 30;
}
let age = getAge();
console.log(age);  // Output: 30

// Anonymous Functions
// Functions without a name, often used in callbacks.


setTimeout(function() {
  console.log('This runs after 1 second');
}, 1000);
// Immediately Invoked Function Expressions (IIFE)
// Functions executed immediately after their definition.


(function() {
  console.log('IIFE executed!');
})();
// Higher-Order Functions
// Functions that take other functions as arguments or return them.


function applyOperation(a, b, operation) {
  return operation(a, b);
}
let result = applyOperation(4, 2, (x, y) => x * y);
console.log(result);  // Output: 8
// Closures
// Functions that remember their scope.


function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
let counter = makeCounter();
console.log(counter());  // Output: 1
console.log(counter());  // Output: 2


// Function Scope
// Functions create their own scope.


let name = 'Alice';
function displayName() {
  let name = 'Bob';
  console.log(name);
}
displayName();  // Output: Bob
console.log(name);  // Output: Alice
// Hoisting
// Function declarations are hoisted to the top.


hoistedFunction();  // Output: This function is hoisted!
function hoistedFunction() {
  console.log('This function is hoisted!');
}
// Arrow Function vs. Regular Function
// Arrow functions do not have their own this context.


let obj = {
  value: 10,
  regularFunction: function() {
    console.log(this.value);  // Output: 10
  },
  arrowFunction: () => {
    console.log(this.value);  // Output: undefined
  }
};
obj.regularFunction();
obj.arrowFunction();
// Recursion
// Functions can call themselves.


function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));  // Output: 120
// Function Methods
// Functions have methods like call(), apply(), and bind().


let person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
let anotherPerson = { name: 'Doe' };
person.greet.call(anotherPerson);  // Output: Hello, Doe
// Conclusion
// Functions in JavaScript provide a robust way to structure and organize code. They offer flexibility, reusability, and a host of features that make JavaScript powerful and dynamic. 