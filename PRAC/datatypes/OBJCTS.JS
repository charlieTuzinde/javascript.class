
  //MORE ON OBJECTS
  // Objects in JavaScript are collections of key-value pairs, where each key is a string (or Symbol) and each value can be any data type. They are incredibly versatile, allowing you to store and organize data in a structured way.
  
  // Creating Objects
 // 6.OBJECT
// Represents collections of key-value pairs. Can include objects, arrays, and functions.

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
  
  
   // Combining Objects
  // You can combine objects using Object.assign() or the spread operator.
  
  let obj1 = { a: 1, b: 2 };
  let obj2 = { b: 3, c: 4 };
  let combined1 = Object.assign({}, obj1, obj2);
  let combined2 = { ...obj1, ...obj2 };
  console.log(combined1);  // Output: { a: 1, b: 3, c: 4 }
  console.log(combined2);  // Output: { a: 1, b: 3, c: 4 }