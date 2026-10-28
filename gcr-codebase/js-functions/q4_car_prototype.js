// Q4: Car Constructor and Prototype Method
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Both objects share this method through Car.prototype.
Car.prototype.getDetails = function () {
  console.log(`${this.brand} ${this.model}`);
};

const carOne = new Car("Toyota", "Corolla");
const carTwo = new Car("Honda", "Civic");

carOne.getDetails();
carTwo.getDetails();
console.log("Shared method:", carOne.getDetails === carTwo.getDetails);
