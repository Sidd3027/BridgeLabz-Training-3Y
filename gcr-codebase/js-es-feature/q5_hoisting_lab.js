// Q5: Hoisting Lab — The Sequence Trap
"use strict";

// Original sequence would log "undefined", then "Game started", then throw
// ReferenceError when startGame reads status in its temporal dead zone.
function runFixedSequence() {
  const score = 50;
  const status = "ready";

  function announce() {
    console.log("Game started");
  }

  function startGame() {
    console.log(status);
  }

  console.log(score);
  announce();
  startGame();
}

runFixedSequence();

// Arrow functions are not hoisted like function declarations.
// Declare the arrow function before calling it.
const announceWithArrow = () => console.log("Game started (arrow function)");
announceWithArrow();
