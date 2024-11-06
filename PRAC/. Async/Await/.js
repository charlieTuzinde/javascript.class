// `async/await` is a syntax in JavaScript that simplifies working with asynchronous code, making it easier to read and write. It is built on top of Promises and allows you to write asynchronous code that looks synchronous. Here’s a detailed overview:


//wwhat is synchronous coode?


// ### 1. Basics of Async/Await

// - **`async` Function**: Declaring a function with the `async` keyword means that it will always return a Promise. 
//If the function returns a value, that value is wrapped in a resolved Promise. 
//If it throws an error, the Promise is rejected.

 
    async function example() {
        return "Hello, World!";
    }

    example().then(console.log); // Logs: Hello, World!
    

// - `await` Expression: The `await` keyword can only be used inside an `async` function. It pauses the execution of the function until the Promise is resolved or rejected, returning the resolved value or throwing the error.

    
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');// EXPLAIN MORE ON THIS
        //fetches results from a certain URL
        const data = await response.json();
        return data;
    }
    

//  2. Error Handling

// Using `try/catch` blocks within an `async` function allows you to handle errors from `await` expressions more elegantly.


async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// 3. Chaining and Sequential Execution

// You can use `await` to wait for multiple asynchronous operations to complete in a sequential manner:


async function sequentialFetch() {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    return { user, posts };
}


// 4. Concurrent Execution

// If you want to run multiple asynchronous operations concurrently (in parallel), you can use `Promise.all`:

async function concurrentFetch() {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    return { user, posts };
}


// 5. When to Use Async/Await*

// - Use `async/await` when you want clearer and more readable asynchronous code.
// - It is particularly useful for scenarios where you have multiple asynchronous calls that depend on each other or when you need to handle errors in a straightforward way.



//  6. Limitations

// - `await` can only be used inside `async` functions.
// - If you have a large number of asynchronous operations that can be executed in parallel, using `Promise.all` is preferable to avoid blocking the execution flow.

//  7. Example: Fetching Data with Async/Await

// Here’s a complete example that demonstrates fetching data from an API using `async/await`:


async function getUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) throw new Error('User not found');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

getUserData(1).then(user => console.log(user));


//Conclusion

// `async/await` is a powerful and flexible feature of JavaScript that enhances the way we handle asynchronous operations. It makes the code cleaner and easier to understand, reducing the need for nested callbacks or chaining Promises. 