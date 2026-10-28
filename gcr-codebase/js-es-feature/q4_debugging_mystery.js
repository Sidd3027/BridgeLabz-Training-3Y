// Q4: Debugging Mystery
"use strict";

// Original code throws ReferenceError because greeting was never declared.
// Fix: declare greeting with let or const inside the function.
function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
}

// Watch variable: add "greeting" to VS Code's Watch panel while paused in this function.
showMessage();

// Debug tip: place a breakpoint on console.log, press F5, and inspect the Call Stack panel.
