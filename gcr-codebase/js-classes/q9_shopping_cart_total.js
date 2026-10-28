// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        // Accept SAVE20, DISC10, etc. The digits indicate the discount percentage.
        if (!/^(SAVE|DISC)(\d{1,2})$/.test(code)) {
            return { valid: false, discount: 0, finalTotal: this.getTotal() };
        }
        const percent = Number(code.match(/\d{1,2}$/)[0]);
        if (percent < 1 || percent > 99) {
            return { valid: false, discount: 0, finalTotal: this.getTotal() };
        }
        const total = this.getTotal();
        return {
            valid: true,
            discount: total * percent / 100,
            finalTotal: total * (1 - percent / 100)
        };
    }
}

const cart = new Cart();
cart.addItem("Notebook", 120, 2);
cart.addItem("Pen Pack", 80, 1);
console.log("Cart total:", cart.getTotal());

const result = cart.applyCoupon("SAVE20");
if (result.valid) {
    console.log(`Discount: ₹${result.discount.toFixed(2)}`);
    console.log(`Final total: ₹${result.finalTotal.toFixed(2)}`);
} else {
    console.log("Invalid coupon. Use formats such as SAVE20 or DISC10.");
}
