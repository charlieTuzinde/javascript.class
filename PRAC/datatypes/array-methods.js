//JavaScript array methods let you manipulate and interact with arrays easily. Here are some key ones:

// push() adds an element to the end.

// pop() removes the last element.

// shift() removes the first element.

// unshift() adds an element to the beginning.

// map() creates a new array with the results of calling a function on every element.

// filter() creates a new array with all elements that pass a test.

// reduce() applies a function against an accumulator and each element to reduce it to a single value.

// forEach() executes a function for each array element.


//PUSH()
//Adding a single item to an array:




let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits);  // Output: ['apple', 'banana', 'orange']

//Adding multiple items to an array:




let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);  // Output: [1, 2, 3, 4, 5]

//EG3
let arr = [];
for(let i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr);  // Output: [1, 2, 3, 4, 5]

//POP()

// Removing the last element from an array:




let colors = ['red', 'green', 'blue'];
colors.pop();
console.log(colors);  // Output: ['red', 'green']
// Using pop() in a loop:


// Storing the removed element in a variable:



let animals = ['cat', 'dog', 'rabbit'];
let removedAnimal = animals.pop();
console.log(removedAnimal);  // Output: 'rabbit'//THIS SHOWS the specific element that has beed removed
console.log(animals);  // Output: ['cat', 'dog']//shows the remaining elements after the po( operation)


// Using pop() with an empty array:

let emptyArray = [];
let result = emptyArray.pop();
console.log(result);  // Output: undefined// because there is deliberate initialization of an empty array



// Removing elements from a nested array:// array within an array


let nestedArray = [[1, 2], [3, 4], [5, 6]];
nestedArray[1].pop();//CHOOSE THE INDEX of the array you want to pop
console.log(nestedArray);  // Output: [[1, 2], [3], [5, 6]]


//SHIFT
// Removing the first element from an array:



let cities = ['Nairobi', 'Kisumu', 'Mombasa'];
cities.shift();
console.log(cities);  // Output: ['Kisumu', 'Mombasa']
// // Using shift() in a loop:


// let queue = [1, 2, 3, 4, 5];
// while(queue.length > 0) {
//   console.log(queue.shift());
// }
// // Output: 1 2 3 4 5


// Storing the removed element in a variable:


let cars = ['limmo', 'lambo', 'crown'];
let firstCar = cars.shift();
console.log(firstCar);  // Output: 'limmo'
console.log(cars);  // Output: ['lambo', 'crown']




// Removing elements from a nested array:

let nestedArr = [['a', 'b'], ['c', 'd'], ['e', 'f']];
nestedArr[1].shift();
console.log(nestedArr);  // Output: [['a', 'b'], ['d'], ['e', 'f']]


// Adding a single element to the beginning of an array:


let vegetables = ['carrot', 'tomato'];
vegetables.unshift('potato');
console.log(vegetables);  // Output: ['potato', 'carrot', 'tomato']


// Adding multiple elements to the beginning of an array:


let sports = ['soccer', 'basketball'];
sports.unshift('tennis', 'baseball');
console.log(sports);  // Output: ['tennis', 'baseball', 'soccer', 'basketball']



// Combining arrays:
//using a while loop


let arr1 = [3, 4, 5];
let arr2 = [1, 2];
while(arr1.length > 0) {
  arr2.unshift(arr1.pop());//
}
console.log(arr2);  // Output: [3, 4, 5, 1, 2]

// Using unshift() with an empty array:

let emptyArr = [];
emptyArr.unshift('firstElement');
console.log(emptyArr);  // Output: ['firstElement']
// These examples showcase the flexibility of the unshift() method. 

//MAP()

// Doubling the elements in an array:


let nuts = [1, 2, 3, 4];
let doubled = nuts.map(nuts => nuts * 2);
console.log(doubled);  // Output: [2, 4, 6, 8]

// Extracting a property from an array of objects:
//KEY VALUE PAIRS

let users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
let names = users.map(user => user.name);
console.log(names);  // Output: ['Alice', 'Bob', 'Charlie']
//this means we cfan extract any other property we want from this array //eg age

// Converting an array of strings to uppercase:

let lowercaseWords = ['hello', 'world'];
let uppercaseWords = lowercaseWords.map(word => word.toUpperCase());
console.log(uppercaseWords);  // Output: ['HELLO', 'WORLD']

// Calculating the lengths of strings in an array:


let words = ['JavaScript', 'is', 'fun'];
let lengths = words.map(word => word.length);//using .length automatically outputs the length of the the string into an array as they are arranged in the array of strings
console.log(lengths);  // Output: [10, 2, 3]



// Converting an array of numbers to their string equivalents:


let nums = [1, 2, 3, 4];
let strings = nums.map(num => num.toString());
console.log(strings);  // Output: ['1', '2', '3', '4']//the quotes  are what proves that they are strings

// These examples should give you a good sense of how map() can transform arrays




//FILTER

// Filtering out even numbers:


// let numbers = [1, 2, 3, 4, 5];
// let oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers);  // Output: [1, 3, 5]
// Filtering out words longer than 3 characters:


// let words = ['hi', 'hello', 'hey', 'world'];
// let shortWords = words.filter(word => word.length <= 3);
// console.log(shortWords);  // Output: ['hi', 'hey']




// Filtering out objects based on property value:


let members = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
];
let activeMembers = members.filter(member => member.active);
console.log(activeMembers);  // Output: [{ name: 'Alice', active: true }, { name: 'Charlie', active: true }]

// Filtering out numbers greater than a specific value:


let scores = [10, 20, 30, 40];
let highScores = scores.filter(score => score > 25);
console.log(highScores);  // Output: [30, 40]

// Filtering out strings that contain a specific letter:


let juice = ['apple', 'banana', 'cherry'];
let juiceWithA = juice.filter(juice => juice.includes('a'));
console.log(juiceWithA);  // Output: ['apple', 'banana']

// Filtering out objects from an array of nested arrays:


let nestArray = [[1, 2], [3, 4], [5, 6]];
let filterByLength = nestArray.filter(arr => arr.length === 2);
console.log(filterByLength);  // Output: [[1, 2], [3, 4], [5, 6]]

// Filtering out positive numbers:


let mixedNumbers = [-1, 2, -3, 4];
let positiveNumbers = mixedNumbers.filter(num => num > 0);
console.log(positiveNumbers);  // Output: [2, 4]

// Filtering out items that start with a specific letter:


let pets = ['dog', 'cat', 'rabbit', 'duck'];
let startWithD = pets.filter(pet => pet.startsWith('d'));
console.log(startWithD);  // Output: ['dog', 'duck']


// Filtering based on the length of strings in an array:


let persons = ['Sam', 'Jonathan', 'Paul'];
let shortPersons = persons.filter(name => name.length <= 4);
console.log(shortPersons);  // Output: ['Sam', 'Paul']

// Filtering out falsy values:

let values = [0, 1, false, 2, '', 3];
let truthyValues = values.filter(Boolean);
console.log(truthyValues);  // Output: [1, 2, 3]
// These examples demonstrate how powerful and flexible the filter() method can be. 










































































//yet to go through REDUCE














// Sum of all elements in an array:


// let nambas = [1, 2, 3, 4, 5];
// let sum = nambas.reduce((total, current) => total + current, 0);
// console.log(sum);  // Output: 15
// // Finding the maximum value in an array:


// let numbs = [10, 5, 8, 20];
// let max = numbs.reduce((max, current) => Math.max(max, current), numbers[0]);
// console.log(max);  // Output: 20
// // Counting occurrences of items in an array:


// let fruts = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
// let frutCount = fruts.reduce((count, fruit) => {
//   count[fruit] = (count[fruit] || 0) + 1;
//   return count;
// }, {});
// console.log(frutCount);  // Output: { apple: 3, banana: 2, orange: 1 }
// // Flattening a nested array:


// let nestdArray = [[1, 2], [3, 4], [5, 6]];
// let flatArray = nestdArray.reduce((flat, current) => flat.concat(current), []);
// console.log(flatArray);  // Output: [1, 2, 3, 4, 5, 6]
// // Transforming an array of objects into a single object:


// let usa = [
//   { id: '001', name: 'Alice' },
//   { id: '002', name: 'Bob' },
//   { id: '003', name: 'Charlie' }
// ];
// let userObj = users.reduce((obj, user) => {
//   obj[user.id] = user.name;
//   return obj;
// }, {});
// console.log(userObj);  // Output: { '001': 'Alice', '002': 'Bob', '003': 'Charlie' }
// // Calculating the average value of an array:


// let scoress = [80, 90, 100];
// let average = scoress.reduce((total, score, index, array) => {
//   total += score;
//   if (index === array.length - 1) {
//     return total / array.length;
//   }
//   return total;
// }, 0);
// console.log(average);  // Output: 90
// // Removing duplicate items from an array:


// // let numbers = [1, 2, 2, 3, 4, 4, 5];
// // let uniqueNumbers = numbers.reduce((unique, num) => {
// //   if (!unique.includes(num)) {
// //     unique.push(num);
// //   }
// //   return unique;
// // }, []);
// // console.log(uniqueNumbers);  // Output: [1, 2, 3, 4, 5]

// // Reversing an array:


// let letters = ['a', 'b', 'c'];
// let reversed = letters.reduce((reversed, letter) => [letter, ...reversed], []);
// console.log(reversed);  // Output: ['c', 'b', 'a']
// // Grouping objects by a property:


// let people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 25 }
// ];
// let groupedByAge = people.reduce((group, person) => {
//   const { age } = person;
//   group[age] = group[age] || [];
//   group[age].push(person);
//   return group;
// }, {});
// console.log(groupedByAge);
// // Output: { '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], '30': [{ name: 'Bob', age: 30 }] }
// // Creating a lookup table from an array:


// let keyValuePairs = [['name', 'Alice'], ['age', 25], ['occupation', 'Developer']];
// let lookup = keyValuePairs.reduce((obj, [key, value]) => {
//   obj[key] = value;
//   return obj;
// }, {});
// console.log(lookup);  // Output: { name: 'Alice', age: 25, occupation: 'Developer' }
// // These examples demonstrate just how versatile the reduce() method can be.