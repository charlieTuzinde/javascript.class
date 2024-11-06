
// Operators in JavaScript are used to perform various operations on values and variables. They form the backbone of almost every expression and statement in the language. 

// 1. Arithmetic Operators
// These operators perform arithmetic operations:

// Addition (+):


let sum = 5 + 3;  // Output: 8
// Subtraction (-):

let difference = 5 - 3;  // Output: 2
// Multiplication (*):


let product = 5 * 3;  // Output: 15
// Division (/):

let quotient = 5 / 3;  // Output: 1.666...
// Modulus (%):


let remainder = 5 % 3;  // Output: 2
// Exponentiation (**):


let power = 5 ** 3;  // Output: 125


// 2. Assignment Operators
// These operators assign values to variables:

// Assignment (=):


let v = 5;
// Addition Assignment (+=):


let w = 5;
w += 3;  // x = 8
// Subtraction Assignment (-=):


let y = 5;
y -= 3;  // x = 2
// Multiplication Assignment (*=):


let u = 5;
u *= 3;  // x = 15
// Division Assignment (/=):


let h = 5;
h /= 3;  // x = 1.666...

// Modulus Assignment (%=):


let x = 5;
x %= 3;  // x = 2


// 3. Comparison Operators
// These operators compare two values and return a Boolean value (true or false):

// // Equal (==):


5 == '5';  // Output: true 

// Strict Equal (===):


5 === '5';  // Output: false //'5'is a string



// Not Equal (!=):


5 != '5';  // Output: false

// Strict Not Equal (!==):

5 !== '5';  // Output: true

// Greater Than (>):


5 > 3;  // Output: true
// Less Than (<):


5 < 3;  // Output: false
// Greater Than or Equal (>=):


5 >= 5;  // Output: true
// Less Than or Equal (<=):


5 <= 3;  // Output: false


// 4. Logical Operators
// These operators are used to perform logical operations:

// Logical AND (&&):


true && false;  // Output: false
// Logical OR (||):


true || false;  // Output: true


// Logical NOT (!):


!true;  // Output: false



// DO MORE RESEARCH ON THE BITWISE OPERSTOR

// 5. Bitwise Operators
// These operators perform bit-level operations:

// AND (&):


5 & 1;  // Output: 1
// OR (|):


5 | 1;  // Output: 5

// NOT (~):


~5;  // Output: -6
// XOR (^):


5 ^ 1;  // Output: 4
// Left Shift (<<):


5 << 1;  // Output: 10
// Right Shift (>>):

5 >> 1;  // Output: 2

// Zero-fill Right Shift (>>>):


5 >>> 1;  // Output: 2




// 6. String Operators
// These operators are used for string concatenation:

// Concatenation (+):


let greeting = 'Hello' + ' ' + 'World';  // Output: 'Hello World'
// Concatenation Assignment (+=):


let message = 'Hello';
message += ' World';  // Output: 'Hello World'

// 7. Conditional (Ternary) Operator
// This operator is a (shorthand for an if-else statement):


let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';  // Output: 'Yes'


// 8. Type Operators
// These operators are used to determine the( type of a variable):

// typeof:


typeof 'Hello';  // Output: 'string'



// instanceof:

let date = new Date();
console.log(date instanceof Date);  // Output: true
// Operators are essential tools in JavaScript, enabling you to manipulate data, control the flow of your program, and perform complex calculations.



// I HAVE TO USE THIS OPERATORS IN FUNCTIONS NOW  AFTER UNDERSTANDING HOW THEY WORK