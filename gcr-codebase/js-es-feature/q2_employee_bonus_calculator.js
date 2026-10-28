// Q2: Employee Bonus Calculator
"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
  try {
    if (!employee || !employee.name || employee.salary === undefined || employee.years === undefined) {
      throw new Error("Missing employee property");
    }

    const salary = Number(employee.salary);
    const years = Number(employee.years);
    if (!Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Salary or years could not be converted to a number");
    }

    const bonusRate = years > 3 ? 0.10 : 0.05;
    const bonus = salary * bonusRate;
    console.log(`${employee.name}: Salary ₹${salary.toFixed(2)}, Experience ${years} years, Bonus ₹${bonus.toFixed(2)}`);
  } catch (error) {
    console.log(`Employee record error: ${error.message}`);
  }
}
