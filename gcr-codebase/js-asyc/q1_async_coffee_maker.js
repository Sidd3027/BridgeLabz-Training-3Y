// Q1: The Startup Morning — Async Coffee Maker
// Each step returns a Promise and takes about 1–2 seconds.
// A random failure is included so that the catch handler can be tested.

function waitForStep(message) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${message} failed.`));
            } else {
                console.log(message);
                resolve();
            }
        }, delay);
    });
}

function boilWater() {
    return waitForStep("Water boiled.");
}
function brewCoffee() {
    return waitForStep("Coffee brewed.");
}
function pourCoffee() {
    return waitForStep("Coffee poured into a cup.");
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process error:", error.message));
