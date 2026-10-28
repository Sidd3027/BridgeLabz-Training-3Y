// Q2: Multi-Type Data Summary
const userName = "Rudra";
const userAge = 21;
const isStudent = true;
const subjects = ["JavaScript", "HTML", "CSS"];
const userProfile = { city: "Mathura", course: "B.Tech" };
const middleName = null;
let optionalValue;
console.table([
  { label: "String", value: userName, type: typeof userName },
  { label: "Number", value: userAge, type: typeof userAge },
  { label: "Boolean", value: isStudent, type: typeof isStudent },
  { label: "Array", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
  { label: "Object", value: JSON.stringify(userProfile), type: typeof userProfile },
  { label: "Null", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "Undefined", value: optionalValue, type: typeof optionalValue }
]);
