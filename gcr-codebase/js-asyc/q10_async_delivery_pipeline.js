// Q10: The Final Delivery — Async Pipeline Debugger
// Each step returns a Promise that resolves after a random 1–2 seconds.
// A rejection simulates a failed step. await pauses this async function until
// the current Promise settles; JavaScript can continue handling other tasks.

function deliveryStep(successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`Failed at: ${successMessage}`));
            } else {
                resolve(successMessage);
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        console.log(`Step 1: ${await deliveryStep("Order taken")}`);
        console.log(`Step 2: ${await deliveryStep("Food prepared")}`);
        console.log(`Step 3: ${await deliveryStep("Package ready")}`);
        console.log(`Step 4: ${await deliveryStep("Out for delivery")}`);
        await deliveryStep("Delivery completed!");
        console.log("Delivery completed!");
    } catch (error) {
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();
