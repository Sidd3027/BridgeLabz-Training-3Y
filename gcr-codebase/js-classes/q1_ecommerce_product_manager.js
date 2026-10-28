// Q1: E-Commerce Product Manager (Classes + Objects)
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Keyboard", 1500, "Accessories"),
    new Product(2, "Mouse", 650, "Accessories"),
    new Product(3, "Headphones", 2200, "Audio")
];

products[0].applyDiscount(10);
products.forEach(product => console.log(product.displayDetails()));

console.log("\\nProducts priced above ₹1000:");
products.filter(product => product.price > 1000)
    .forEach(product => console.log(product.displayDetails()));
