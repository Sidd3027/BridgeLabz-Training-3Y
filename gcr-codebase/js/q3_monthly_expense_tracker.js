// Q3: Monthly Expense Tracker
const expenses = { food: 4500, travel: 1800, rent: 9000, bills: 1500, leisure: 1200 };
let total = 0;
for (const category in expenses) total += expenses[category];
const average = total / Object.keys(expenses).length;
const tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;
console.log(`Total expenses: ₹${total.toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
