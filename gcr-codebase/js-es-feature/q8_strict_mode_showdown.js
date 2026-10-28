// Q8: Strict Mode Showdown
"use strict";

// In strict mode, duplicate parameter names are a SyntaxError and undeclared
// assignments / deleting unqualified identifiers are errors. This file contains
// the corrected ES6 version so the entire file remains executable.

function demo(firstNumber, secondNumber) {
  const total = 10;
  console.log(`First: ${firstNumber}, second: ${secondNumber}, total: ${total}`);
}

demo(5, 10);

// To compare, place the original function in a separate non-strict script:
// function demo(a, a) { total = 10; delete total; }
// In non-strict mode duplicate parameters may be allowed; assigning total creates
// a global (in classic scripts), while delete total returns false. In strict mode,
// duplicate parameters are forbidden and assigning an undeclared variable throws.
