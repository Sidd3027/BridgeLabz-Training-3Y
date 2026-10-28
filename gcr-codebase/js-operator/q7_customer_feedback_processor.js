// Q7: Customer Feedback Processor
const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const normalizedFeedback = feedback.toLowerCase();
const containsNegativeWords = normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${words.length}`);
console.log(containsNegativeWords ? "Needs Improvement" : "Positive Feedback");
