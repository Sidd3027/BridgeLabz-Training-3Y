// Q2: Task Scheduler — Microtasks vs Macrotasks
console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise.then callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Predicted order:
// Start
// Synchronous log
// End
// Promise.then callback (microtask)
// setTimeout callback (macrotask)
//
// Explanation: synchronous code runs first. After the current call stack is empty,
// JavaScript drains the microtask queue (including Promise callbacks) before taking
// the next macrotask, such as the setTimeout callback.
