
// //Conditionals in JavaScript let you make decisions in your code based on certain conditions. They're essential for controlling the flow of your program. Here's a breakdown:

// //If Statement: Executes a block of code if a specified condition is true.


// if (condition) {
//   // code to be executed if the condition is true
// }
// // Else Statement: Executes a block of code if the same condition is false.


// if (condition) {
//   // code to be executed if the condition is true
// } else {
//   // code to be executed if the condition is false
// }
// // Else If Statement: Specifies a new condition if the first condition is false.


// if (condition1) {
//   // code to be executed if condition1 is true
// } else if (condition2) {
//   // code to be executed if condition2 is true
// } else {
//   // code to be executed if both condition1 and condition2 are false
// }
// // Switch Statement: Performs different actions based on different conditions.


// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }
// // Ternary Operator: Shorter syntax for an if-else statement.


// let result = (condition) ? value1 : value2;

//ABOVE IS ONLY BUT THE SYNTAX



// EXAMPLES

// If Statement:


//just checks if you are an adult
let Age = 18;
if (Age >= 18) {
  console.log('You are an adult.');

}

//2
const isMailsent = true;
if(isMailsent){
    console.log('mail sent to receipient');
}

// Else Statement:


let age = 16; // age that has been initialized and is to be checked whether it is >=18
if (age >= 18) { //condition
  console.log('You are an adult.');//output if the condition is true
} else {
  console.log('You are a minor.');//output if the condition is  not true
}


// Else If Statement:
//this statement gives a variety of options in case of different values that are initialised

let score = 85;
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else {
  console.log('Grade: C or below');
}


//2
let scorre = 87;
if(scorre>=90){
    console.log("gradeA");
}else if(scorre>=80){
    console.log('gradeB');

}else {
    console.log('grade C or lower(FAIL)');
}


//3

const isTaskcompleted = false;
if(isTaskcompleted){
    console.log('task is completed');
}else{
    console.log('Task is incomplete');
}

//4
let agee = 76;
if (agee>=18){
    console.log('you are an adult');
}else{
    console.log('you are not an adult');
}  
  
//6

let hour = 12;
if(hour<18){
    console.log(greeting = 'good morning');

}else{
    console.log(greeting = 'good evening');
}
// Switch Statement:



//more about switch statement
// The switch statement is a powerful way to handle multiple conditions. It evaluates an expression and matches it against various case clauses. Each case has a block of code that executes if the expression matches the case value. If no match is found, the optional default clause executes.

// STRUCTURE

// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
//     // code to be executed if expression === value2
//     break;
//   // More cases
//   default:
//     // code to be executed if none of the cases match
// }


// Example

let day = 3;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  default:
    console.log('Another day');
}

// This outputs "Wednesday" because the day variable is 3.

// Key Points
// break keyword: Essential to prevent the code from falling through to subsequent cases. Without break, all the code in the following cases will execute until a break is encountered.

// default clause: Optional but useful for handling unexpected values.

// Fall-Through
// In rare cases, fall-through can be useful:


let color = 'green';
switch (color) {
  case 'red':
  case 'green':
  case 'blue':
    console.log('Primary color');
    break;
  default:
    console.log('Not a primary color');
}
// Here, 'green' triggers the primary color message without needing separate console.log statements.

// The switch statement is all about clarity and efficiency in handling multiple conditions.




// Ternary Operator:


let isMember = true;
let fee = isMember ? '$2.00' : '$10.00';
console.log(fee);  // Output: $2.00
// JavaScript gives you the power to shape the logic of your application efficiently. 

//more
// The ternary operator, also known as the conditional operator, is a concise way to write if-else statements. It's written as ? :, and is great for simple conditions where you want to assign a value based on a condition.

// Basic Syntax

// condition ? expressionIfTrue : expressionIfFalse;


// EXAMPLES
// Simple Example:


let years = 18;
let canVote = years >= 18 ? 'Yes' : 'No';
console.log(canVote);  // Output: 'Yes'
// Inline Variable Assignment:


let isEligible = true;
let price = isEligible ? '$2.00' : '$10.00';
console.log(price);  // Output: '$2.00'


// Ternary Operator in Function Calls:


function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}
console.log(getFee(true));  // Output: '$2.00'
console.log(getFee(false));  // Output: '$10.00'

// Chaining Ternary Operators:


let size = 'L';
let message = size === 'S' ? 'Small' : size === 'M' ? 'Medium' : 'Large';
console.log(message);  // Output: 'Large'
// Note: Chaining ternary operators can get hard to read. Use them sparingly.

// Complex Conditions:


let x = 10;
let y = 5;
let result = (x > y) ? (x + y) : (x - y);
console.log(result);  // Output: 15

// Ternary Operator with Default Value:


let name = null;
let displayName = name ? name : 'Guest';
console.log(displayName);  // Output: 'Guest'

// WHEN TO USE
// Ternary operators shine in situations where you need simple, inline conditional logic. They can make your code more concise and readable when used appropriately. However, avoid overusing them in complex conditions, as they can quickly become hard to read and maintain.

// It's like having a mini-decision maker right in your code!