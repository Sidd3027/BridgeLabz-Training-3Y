// Q6: Pyramid Pattern Generator
"use strict";

// Change rowLimit to test a different number of rows (default = 5).
const rowLimit = 5;

for (let row = 1; row <= rowLimit; row++) {
  let pattern = "";
  for (let column = 1; column <= row; column++) {
    pattern += "* ";
  }
  console.log(pattern.trimEnd());
}

// Debug tip: set a breakpoint inside the inner loop and watch row and column.
// Replacing let with var makes loop variables function-scoped rather than block-scoped.
