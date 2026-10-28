// Q3: Bug Tracker — Callback to Promise Migration
// Convert the callback-style API into a Promise-based function named getBugs().

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3; // Randomly simulate API failure.
            if (apiFailed) {
                reject(new Error("Bug tracker API request failed."));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bugs reported:");
        console.table(bugs.map((bug, index) => ({ number: index + 1, bug })));
    })
    .catch(error => console.error("Could not fetch bugs:", error.message));
