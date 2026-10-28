// Q5: Frontend Rush — Callback Hell vs Async/Await

// Version 1: Nested callbacks (callback hell).
function runCallbackPipeline() {
    console.log("Callback pipeline:");
    setTimeout(() => {
        console.log("design");
        setTimeout(() => {
            console.log("build");
            setTimeout(() => {
                console.log("test");
                setTimeout(() => {
                    console.log("deploy");
                    setTimeout(() => {
                        console.log("celebrate");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Version 2: The same pipeline using async/await.
const delay = milliseconds =>
    new Promise(resolve => setTimeout(resolve, milliseconds));

async function runAsyncPipeline() {
    console.log("Async/await pipeline:");
    for (const stage of ["design", "build", "test", "deploy", "celebrate"]) {
        await delay(1000);
        console.log(stage);
    }
}

// Run one pipeline at a time so their logs do not interleave.
runCallbackPipeline();

setTimeout(() => {
    runAsyncPipeline();
}, 5500);

// Explanation: async/await lets asynchronous steps read top-to-bottom, reduces
// deeply nested callbacks, and works naturally with try/catch for error handling.
