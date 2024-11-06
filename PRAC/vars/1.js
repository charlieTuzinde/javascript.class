// Variables in JavaScript are fundamental for storing and manipulating data. They can hold different types of values and can be declared in several ways.

// Variable Declaration
// var: Function-scoped or globally-scoped, depending on where it's declared.


var age = 30;
console.log(age);  // Output: 30
// let: Block-scoped, which means it is only available within the block it was declared in.


let name = 'Alice';
if (true) {
  let name = 'Bob';
  console.log(name);  // Output: Bob
}
console.log(name);  // Output: Alice
// const: Block-scoped and cannot be reassigned after initial assignment. Used for constants.


const pi = 3.14159;
console.log(pi);  // Output: 3.14159
// Hoisting
// var variables are hoisted, meaning they are moved to the top of their scope before code execution, but without initializing.


console.log(num);  // Output: undefined
var num = 6;
// Initialization and Assignment
// Variables can be declared and assigned a value separately.


let city;
city = 'Nairobi';
console.log(city);  // Output: Nairobi


// Scope
// Global Scope: Variables declared outside any function have global scope.


var globalVar = 'I am global';

function showGlobalVar() {
  console.log(globalVar);
}
showGlobalVar();  // Output: I am global
// Function Scope: Variables declared inside a function are local to that function.


function myFunction() {
  var localVar = 'I am local';
  console.log(localVar);
}
myFunction();  // Output: I am local
console.log(localVar);  // Error: localVar is not defined
// Block Scope: Variables declared with let or const inside a block {}.


{
  let blockVar = 'I am block scoped';
  console.log(blockVar);  // Output: I am block scoped
}
console.log(blockVar);  // Error: blockVar is not defined
// Re-declaration
// var allows re-declaration.


var x = 10;
var x = 20;
console.log(x);  // Output: 20
// let and const do not allow re-declaration in the same scope.


let y = 10;
// let y = 20;  // Error: Identifier 'y' has already been declared

const z = 30;
// const z = 40;  // Error: Identifier 'z' has already been declared
// Temporal Dead Zone
// The period between entering a block scope and the actual declaration of the variable is known as the temporal dead zone. let and const variables are not accessible in this zone.


console.log(a);  // Error: Cannot access 'a' before initialization
let a = 10;
// Conclusion
// Understanding variables and their scope is crucial for writing effective JavaScript. var, let, and const each have their specific uses and rules. Use let and const for block-scoping to avoid unintended behavior.