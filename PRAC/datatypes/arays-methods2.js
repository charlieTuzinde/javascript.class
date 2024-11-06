let fruits = ['apple', 'banana', 'grape'];
let firstFruit = fruits.shift();
console.log(firstFruit);  // Output: 'apple'
console.log(fruits);  // Output: ['banana', 'grape']






// Using shift() with an empty array:


let emptyArr = [];
let result = emptyArr.shift();
console.log(result);  // Output: undefined

// Using unshift() in a loop to reverse an array:


let numbers = [1, 2, 3];
let reversed = [];
for(let i = 0; i < numbers.length; i++) {
  reversed.unshift(numbers[i]);
}
console.log(reversed);  // Output: [3, 2, 1]


