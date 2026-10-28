// Q8: Dynamic Discount Evaluator
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (const product of cart) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  discountedTotal += product.price * (1 - discountRate);
}

const extraDiscount = discountedTotal > 50000 ? discountedTotal * 0.05 : 0;
const finalTotal = discountedTotal - extraDiscount;

console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Total after category discounts: ₹${discountedTotal.toFixed(2)}`);
console.log(`Extra cart discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final cart total: ₹${finalTotal.toFixed(2)}`);
