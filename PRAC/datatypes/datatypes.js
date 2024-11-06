// javaScript is a dynamically typed language, meaning the same variable can hold different types of data throughout its life. Here are the primary data types in JavaScript, each with examples:

// 1. NUMBER
// Represents both integer and floating-point numbers.


let age = 25;       // Integer
let price = 19.99;  // Floating-point
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;


// 2. STRING
// Represents a sequence of characters.

let greeting = "Hello, World!";
let name = 'John Doe';
let multiline = `This is 
a multiline
string.`;
// 3.BOOLEAN
// Represents true or false values.


let isActive = true;
let isMember = false;

// 4.UNDEFINED
// A variable that has been declared but not assigned a value.


let x;
console.log(x);  // Output: undefined


// NULL
// Represents an intentional absence of any object value.


let y = null;
console.log(y);  // Output: null





// 7. SYMBOL
// Introduced in ECMAScript 6, represents a unique and immutable identifier.


let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2);  // Output: false



// 8.BIGINT
// Can represent integers with arbitrary precision, introduced in ECMAScript 2020.


let bigInt = 123456789012345678901234567890n;
let anotherBigInt = BigInt(12345678901234567890);
// Examples in Context

// Number and String:


let num = 10;
let str = "20";
let result = num + str;  // Output: '1020' (Number becomes a string)

// Object with Function:


let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2021,
  getCarInfo: function() {
    return `${this.make} ${this.model}, ${this.year}`;
  }
};
console.log(car.getCarInfo());  // Output: 'Toyota Corolla, 2021'
// Boolean and Conditional:


let aged = 16;
let canDrive = aged >= 18 ? true : false;
console.log(canDrive);  // Output: false
// Array and Different Types:


let mixedArray = [1, 'string', false, { key: 'value' }, [2, 3]];
console.log(mixedArray);
// BigInt Operations:


let big1 = 9007199254740991n;
let big2 = 2n;
let bigResult = big1 + big2;
console.log(bigResult);  // Output: 9007199254740993n

// Understanding Type Coercion
// JavaScript sometimes automatically converts data from one type to another, which can lead to unexpected behavior.


console.log(1 + '1');  // Output: '11' (Number is coerced to String)
console.log('10' - 5); // Output: 5 (String is coerced to Number)
// These are the fundamentals. JavaScript's flexibility with types gives it powerful capabilities, but it also means you need to keep an eye on type coercion and variable states. 