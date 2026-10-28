// Q4: DevOps Delay — Async Timeout Race
function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                resolve(`${serverName} deployment completed`);
            }
        }, delay);
    });
}

// Run separate promises for all() and race() so one combinator does not consume
// or alter the result of the other.
Promise.all([
    deployServer("Server A", 2000),
    deployServer("Server B", 3000)
])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.error("Deployment error:", error.message));

Promise.race([
    deployServer("Server A", 2000),
    deployServer("Server B", 3000)
])
    .then(firstResponse => console.log("Fastest response:", firstResponse))
    .catch(error => console.error("Race error:", error.message));
