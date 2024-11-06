const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    const success = true; // Replace with actual logic
    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed.");
    }
});
myPromise
    .then(result => {//then here is used to check for a successul promise execution
        console.log(result); // "Operation succeeded!"
    })
    .catch(error => {
        console.error(error); // "Operation failed."
    })
    .finally(() => {
        console.log("Promise settled."); // Executes at the end no matter the outcome of the pperation whether there is an error or not

    });