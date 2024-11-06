

// Scope
// Global Scope: Variables declared outside any function have global scope.


var globalVar = 'I am global';

function showGlobalVar() {
  console.log(globalVar);
}
showGlobalVar();  // Output: I am global
//var and const

// Function Scope: Variables declared inside a function are local to that function.


function myFunction() {
  var localVar = 'I am local';
  console.log(localVar);
}
myFunction();  // Output: I am local

// console.log(localVar);  // Error: localVar is not defined




// Block Scope: Variables declared with let or const inside a block {}.


{
  let blockVar = 'I am block scoped';
  console.log(blockVar);  // Output: I am block scoped
}
// console.log(blockVar);  // Error: blockVar is not defined


// Re-declaration
// var allows re-declaration.


var x = 10;
var x = 20;
console.log(x);  // Output: 20
// let and const do not allow re-declaration in the same scope.


// let y = 10;
// // let y = 20;  // Error: Identifier 'y' has already been declared

// const z = 30;
// const z = 40;  // Error: Identifier 'z' has already been declared
// Temporal Dead Zone
// The period between entering a block scope and the actual declaration of the variable is known as the temporal dead zone. let and const variables are not accessible in this zone.


// console.log(a);  // Error: Cannot access 'a' before initialization
// let a = 10;
// Conclusion
// Understanding variables and their scope is crucial for writing effective JavaScript. var, let, and const each have their specific uses and rules. Use let and const for block-scoping to avoid unintended behavior.