// Q7: Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
const operation = "divide"; // Change to any operation in the array to test.

class InvalidOperationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOperationError";
  }
}

try {
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "divide":
      if (num2 === 0) throw new RangeError("Cannot divide by zero.");
      result = num1 / num2;
      break;
    case "power":
      result = Math.pow(num1, num2);
      break;
    case "root":
      if (num1 < 0) throw new RangeError("Cannot take the square root of a negative number.");
      result = Math.sqrt(num1);
      break;
    case "subtract":
      result = num1 - num2;
      break;
    default:
      throw new InvalidOperationError(`Unknown operation: ${operation}`);
  }

  console.log(`Operation: ${operation}\nInputs: ${num1}, ${num2}\nResult: ${result}`);
} catch (error) {
  console.log(`Calculator error: ${error.name} — ${error.message}`);
}
