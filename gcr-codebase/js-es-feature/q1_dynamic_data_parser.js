// Q1: Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

for (let index = 0; index < apiData.length; index++) {
  const value = apiData[index];
  const numericValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  // Blank strings, NaN text, and values such as "100px" are not valid numeric entries.
  const isBlank = typeof value === "string" && value.trim() === "";
  const isInvalid = isBlank || Number.isNaN(numericValue) ||
    (typeof value === "string" && value.trim() !== "" && !Number.isFinite(numericValue));

  const report = {
    index,
    original: String(value),
    numberForm: numericValue,
    booleanForm: booleanValue,
    stringForm: stringValue,
    status: isInvalid ? "Invalid number" : "Valid number"
  };

  if (isInvalid) {
    invalidNumericData.push(report);
    console.log(`Invalid entry at index ${index}: "${stringValue}"`);
  } else {
    validNumericData.push({ original: value, numericValue });
  }
}

console.log("Valid numeric data:", validNumericData);
console.log("Invalid numeric data:", invalidNumericData);
console.log("Detailed conversion report:");
for (const entry of [...validNumericData.map(item => ({
  original: String(item.original),
  numberForm: item.numericValue,
  booleanForm: Boolean(item.original),
  stringForm: String(item.original),
  status: "Valid number"
})), ...invalidNumericData]) {
  console.log(entry);
}
