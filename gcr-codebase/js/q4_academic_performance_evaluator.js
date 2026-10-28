// Q4: Academic Performance Evaluator
const marks = [88, 76, 91, 84, 79]; // Five subject marks out of 100
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = totalMarks / (marks.length * 100) * 100;
const hasFailedSubject = marks.some(mark => mark < 35);
let result;
if (hasFailedSubject || percentage < 50) result = "Detained";
else if (percentage >= 85 && average >= 85) result = "Promoted with Distinction";
else if (percentage >= 50 && percentage < 85) result = "Promoted";
else result = "Detained";
console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
