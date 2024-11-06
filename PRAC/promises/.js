// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, resulting in a value.
// Rejected: The operation failed, resulting in a reason for the failure (usually an error).


// Creating a Promise

// You can create a Promise using the Promise constructor:

// syntax
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    const success = true; // Replace with actual logic
    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed.");
    }
});


// Using Promises
// You handle the result of a Promise using .then(), .catch(), and .finally() methods:

// .then(): Handles a fulfilled promise.
// .catch(): Handles a rejected promise.
// .finally(): Executes after the promise is settled, regardless of its outcome.
// Example:


myPromise
    .then(result => {
        console.log(result); // "Operation succeeded!"
    })
    .catch(error => {
        console.error(error); // "Operation failed."
    })
    .finally(() => {
        console.log("Promise settled."); // Executes at the end
    });



// Chaining Promises

// You can chain Promises together to perform a sequence of asynchronous operations:


// FIND EXAMPLESS TOILLUSTRATE THIS


// Promise Methods
// JavaScript provides several static methods for working with Promises:

// Promise.all(iterable): Takes an iterable of Promises and (returns a single Promise that resolves )when all of the promises in the iterable have resolved, or rejects if (AANY)) promise is rejected.


Promise.all([promise1, promise2])
    .then(results => {
        console.log(results); // Array of results
    })
    .catch(error => {
        console.error(error); // Error from the first rejected promise
    });



// Promise.race(iterable): Returns a Promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with its value or reason. REASON IS WHEN THERE IS AN ERROR THAT HAS OCCURRED(first come first served)


Promise.race([promise1, promise2])
    .then(result => {
        console.log(result); // Result of the first settled promise(proof)
    })
    .catch(error => {
        console.error(error); // Error of the first rejected promise(incase the first promise is rejected)
    });


// Promise.allSettled(iterable): Similar to Promise.all,     but returns a promise that resolves after all of the given promises have either resolved or rejected, ------(here is the uniqueness from the promise .all)with an array of objects that each describe the outcome of each promise.


Promise.allSettled([promise1, promise2])
    .then(results => {
        results.forEach(result => {
            //why result.forEach
            console.log(result.status); // 'fulfilled' or 'rejected'
        });
    });


// Promise.any(iterable): Takes an iterable of Promise objects and, (as soon as one of the promises in the iterable fulfills,) returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (i.e., all of them are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

// 
Promise.any([promise1, promise2])
    .then(result => {
        console.log(result); // Result of the first fulfilled promise
    })
    .catch(error => {
        console.error(error); // All promises were rejected
    });



// Error Handling
// It's crucial to handle errors in Promises to avoid unhandled promise rejections. Use .catch() or the second argument of .then() to handle errors.



// Async/Await
// With the introduction of async/await in ES2017, working with Promises became even easier. You can write asynchronous code that looks synchronous.


// WILL LOOK INTO THIS NEXT

// Summary
// Promises are a fundamental part of JavaScript for handling asynchronous operations, allowing you to write cleaner and more manageable code. They provide a powerful abstraction over traditional callback methods, avoiding callback hell and improving readability.