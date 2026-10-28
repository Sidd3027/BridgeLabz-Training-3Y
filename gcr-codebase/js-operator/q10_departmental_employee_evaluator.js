// Q10: Departmental Employee Evaluator
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (const department of departments) {
  const [departmentName, score] = department;
  let evaluation;

  if (score >= 90) {
    evaluation = "Excellent";
  } else if (score >= 75) {
    evaluation = "Good";
  } else if (score >= 60) {
    evaluation = "Average";
  } else {
    evaluation = "Needs Improvement";
  }

  console.log(`${departmentName}: ${score} - ${evaluation}`);
}
