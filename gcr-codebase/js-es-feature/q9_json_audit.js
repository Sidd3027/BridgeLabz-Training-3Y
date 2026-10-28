// Q9: JSON Audit
"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const adults = [];

for (let index = 0; index < rawData.length; index++) {
  const lineNumber = index + 1;

  try {
    const record = JSON.parse(rawData[index]);

    if (!Object.prototype.hasOwnProperty.call(record, "user") ||
        !Object.prototype.hasOwnProperty.call(record, "age")) {
      throw new Error("Missing required key: user or age");
    }

    const age = Number(record.age);
    if (!Number.isFinite(age)) {
      throw new TypeError("Age is not a valid number");
    }

    const cleanedRecord = { ...record, age };
    cleanData.push(cleanedRecord);
    if (age >= 18) adults.push(cleanedRecord);
  } catch (error) {
    errors.push({ line: lineNumber, message: error.message });
    console.log(`Line ${lineNumber} error: ${error.message}`);
    // Debug tip: set a breakpoint in catch to inspect lineNumber and error.
  }
}

console.log("Clean data:", cleanData);
console.log("Under-18 users:", cleanData.filter(record => record.age < 18));
console.log("Adults (18+):", adults);
console.log("Audit errors:", errors);
