// In JavaScript, synchronous and asynchronous code are used to handle tasks and operations in different ways, particularly when dealing with operations that can take some time to complete (like network requests, file reading, etc.). Here's a detailed explanation:

// ### Synchronous Code

// **Synchronous** code executes tasks sequentially. Each operation must wait for the previous one to complete before starting. This is known as blocking code because it blocks the execution flow until the current task finishes.

// #### Example:

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");


// #### Output:
// ```
// Task 1
// Task 2
// Task 3
// ```

// In this example, `Task 2` waits for `Task 1` to complete, and `Task 3` waits for `Task 2`.

// ### Asynchronous Code

// **Asynchronous** code allows tasks to run concurrently. This means that tasks can start before other tasks complete, which is non-blocking. This approach is particularly useful for operations that take an indeterminate amount of time, such as network requests or reading files.

// #### Example using `setTimeout`:

console.log("Task 1");

setTimeout(() => {
    console.log("Task 2");
}, 2000);

console.log("Task 3");


// #### Output:
// ```
// Task 1
// Task 3
// Task 2


// In this example, `Task 2` starts after a delay of 2 seconds due to `setTimeout`, but `Task 3` does not wait for `Task 2` to complete and is executed immediately after `Task 1`.

// ### Promises

// Promises are a way to handle asynchronous operations in JavaScript. A promise represents a value that may be available now, or in the future, or never.

// #### Example using Promises:

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});

console.log("Before promise");

myPromise.then((message) => {
    console.log(message);
});

console.log("After promise");


// #### Output:
// ```
// Before promise
// After promise
// Promise resolved


// Here, the promise resolves after 2 seconds, but the code after the promise (`"After promise"`) executes immediately.

// ### Async/Await

// `async` and `await` are syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.

// #### Example using Async/Await:

async function asyncFunction() {
    console.log("Before promise");

    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, 2000);
    });

    console.log(result);
    console.log("After promise");
}

asyncFunction();


// #### Output:
// ```
// Before promise
// Promise resolved
// After promise
// ```

// ### Key Differences

// - **Execution Flow**:
//   - **Synchronous**: Tasks are executed one after the other, in sequence.
//   - **Asynchronous**: Tasks can be executed concurrently, allowing other tasks to proceed before the current one completes.

// - **Blocking vs. Non-Blocking**:
//   - **Synchronous**: Blocks execution until the current task completes.
//   - **Asynchronous**: Does not block execution; other tasks can continue.

// - **Use Cases**:
//   - **Synchronous**: Suitable for tasks that must be performed in sequence and do not involve waiting.
//   - **Asynchronous**: Ideal for tasks involving I/O operations (like network requests, file reading), user interactions, or any task that can take an indeterminate amount of time.

// Understanding and using asynchronous code in JavaScript allows you to write more efficient and responsive applications. It’s a fundamental concept, especially for web development. 