// Q3: Transaction Validator
"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

for (let index = 0; index < transactions.length; index++) {
  try {
    const transaction = transactions[index];

    if (transaction === null) {
      throw new TypeError("Null transaction entry");
    }
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new ReferenceError("Missing transaction id or amount");
    }
    if (transaction.amount < 0) {
      throw new RangeError("Negative transaction amount");
    }

    validTransactions.push(transaction);
    console.log(`Transaction ${transaction.id} is valid.`);
    // Debug tip: set a breakpoint on this line to inspect transaction and both arrays.
  } catch (error) {
    invalidTransactions.push({ index, category: error.name, message: error.message });
    console.log(`Transaction at index ${index} failed: ${error.name} - ${error.message}`);
  }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}; Failed: ${invalidTransactions.length}`);
