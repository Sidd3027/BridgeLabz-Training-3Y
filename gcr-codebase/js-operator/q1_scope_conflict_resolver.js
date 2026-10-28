// Q1: Scope Conflict Resolver
// The bonus is global; salary and isPermanent are local to calculateSalary().
let bonus = 5000;

function calculateSalary() {
  const salary = 40000;
  const isPermanent = true; // Change to false to test the other outcome.

  const totalSalary = isPermanent ? salary + bonus : salary;
  console.log(`Permanent employee: ${isPermanent}`);
  console.log(`Total salary: ₹${totalSalary}`);
  console.log(`Global bonus remains: ₹${bonus}`);
}

calculateSalary();
// Changing isPermanent changes the calculation, not the global bonus variable.
