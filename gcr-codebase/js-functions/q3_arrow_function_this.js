// Q3: Arrow Function and `this`
const user = {
  name: "Rudra",
  // Arrow functions do not get their own `this`; this.name is not the object's name.
  showName: () => console.log("Arrow function name:", this.name)
};

user.showName();

// Fix: a normal method gets `this` from the object used to call it.
user.showName = function () {
  console.log("Normal function name:", this.name);
};

user.showName();
