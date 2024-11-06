// 6.OBJECT
// Represents collections of key-value pairs. Can include objects, arrays, and functions.


let person = {
    name: 'Alice',
    age: 30,
    greet: function() {
      console.log("Hello");
    }
  };
  
  let emptyObject = {};
  let array = [1, 'two', 3.5, true];
  
  //MORE ON OBJECTS
  // Objects in JavaScript are collections of key-value pairs, where each key is a string (or Symbol) and each value can be any data type. They are incredibly versatile, allowing you to store and organize data in a structured way.
  
  // Creating Objects
  // You can create objects using object literals or the new Object() syntax.
  
  
  let persn = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  
  let car = new Object();
  car.make = 'Toyota';
  car.model = 'Corolla';
  car.year = 2021;
  car.getInfo = function() {
    return `${this.make} ${this.model}, ${this.year}`;
  };
  
  
  // Accessing and Modifying Object Properties
  // You can access and modify properties using dot notation or bracket notation.
  
  
  console.log(person.name);  // Output: John
  person.age = 31;
  console.log(person['age']);  // Output: 31
  
  
  // Adding and Removing Properties
  
  person.gender = 'male';  // Adding a new property
  delete person.gender;    // Removing a property
  
  
  // Nested Objects
  // Objects can contain other objects, arrays, and functions.
  
  
  let company = {
    name: 'Tech Corp',
    employees: [
      { name: 'Alice', role: 'Developer' },
      { name: 'Bob', role: 'Designer' }
    ],
    address: {
      street: '123 Main St',
      city: 'Metropolis'
    }
  };
  console.log(company.employees[0].name);  // Output: Alice
  console.log(company.address.city);       // Output: Metropolis

  
  // Using this Keyword
  // The this keyword refers to the current object.
  
  
  person.sayAge = function() {
    console.log(`I am ${this.age} years old`);
  };
  person.sayAge();  // Output: I am 31 years old
  
  
  // Methods
  // Objects can contain methods (functions).
  
  
  let calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
  console.log(calculator.add(5, 3));  // Output: 8
  console.log(calculator.subtract(5, 3));  // Output: 2
  
  // Looping through Objects
  // Use a for...in loop to iterate over an object's properties.
  
  
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  // Output: name: John, age: 31, greet: function, sayAge: function
  // Object Methods and Properties
  // JavaScript provides built-in methods to interact with objects.
  
  
  let keys = Object.keys(person);  // Returns an array of keys
  let values = Object.values(person);  // Returns an array of values
  let entries = Object.entries(person);  // Returns an array of [key, value] pairs
  console.log(keys);    // Output: ['name', 'age', 'greet', 'sayAge']
  console.log(values);  // Output: ['John', 31, function, function]
  console.log(entries); // Output: [['name', 'John'], ['age', 31], ...]
  
  
  // Combining Objects
  // You can combine objects using Object.assign() or the spread operator.
  
  let obj1 = { a: 1, b: 2 };
  let obj2 = { b: 3, c: 4 };
  let combined1 = Object.assign({}, obj1, obj2);
  let combined2 = { ...obj1, ...obj2 };
  console.log(combined1);  // Output: { a: 1, b: 3, c: 4 }
  console.log(combined2);  // Output: { a: 1, b: 3, c: 4 }
  // 
  // Objects are a cornerstone of JavaScript, enabling structured and organized data management. They're incredibly powerful and flexible, forming the backbone of many advanced programming concepts.