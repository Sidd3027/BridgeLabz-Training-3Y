// Q10: Nested Hoisting and Closures
"use strict";

function outer() {
  // var count is hoisted in outer's function scope, initialized to undefined.
  console.log("Outer count before assignment:", count);
  var count = 5;

  function inner() {
    // This inner var count is a separate local variable, also hoisted.
    console.log("Inner count before assignment:", count);
    var count = 10;
    console.log("Inner count after assignment:", count);
  }

  inner();
  console.log("Outer count after inner():", count);
}

outer();

// Arrow version: the arrow function still has its own local var count if declared
// inside it; arrow functions do not create their own `this` or `arguments`.
function outerWithArrow() {
  var count = 5;
  const innerArrow = () => {
    console.log("Arrow reads outer count:", count);
  };
  innerArrow();
}
outerWithArrow();

// Debug tip: set breakpoints in outer() and inner(), then inspect Call Stack and Scope.
