// Q9: Person -> Student inheritance using ES6 classes
class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name); // Calls the parent constructor.
    this.branch = branch;
  }

  showBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

const student = new Student("Rudra", "CSE");
student.showName();
student.showBranch();

// Same behavior as the constructor/prototype version in Q5.
console.log("Student inherits from Person:", student instanceof Person);
