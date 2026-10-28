// Q9: Debugging the Event Loop
// Predicted output order:
// Script start
// Script end
// Promise callback
// Timeout callback
//
// Reason: synchronous logs run first. Promise.then callbacks enter the microtask
// queue, which is processed after the current script finishes and before timer
// callbacks (macrotasks) are run.

console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");
