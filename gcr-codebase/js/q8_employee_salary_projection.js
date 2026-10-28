// Q8: Employee Salary Projection
const currentSalary = 40000;
const annualIncrementRate = 8;
let projectedSalary = currentSalary;
const projection = [];
for (let year = 1; year <= 5; year++) {
  projectedSalary *= 1 + annualIncrementRate / 100;
  projectedSalary = Math.round(projectedSalary);
  projection.push({ Year: year, "Projected Salary (₹)": projectedSalary });
}
console.table(projection);
