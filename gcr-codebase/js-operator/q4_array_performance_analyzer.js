// Q4: Array Performance Analyzer
// Generate eight random whole-number scores from 30 through 100.
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const adjustedScores = scores.map(score => score); // Demonstrate map().
const highestScore = Math.max(...adjustedScores);
const lowestScore = Math.min(...adjustedScores);
const totalScore = adjustedScores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / adjustedScores.length;
const passedStudents = adjustedScores.filter(score => score >= 50).length;

console.log("Scores:", adjustedScores);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed (50 or above): ${passedStudents}`);
