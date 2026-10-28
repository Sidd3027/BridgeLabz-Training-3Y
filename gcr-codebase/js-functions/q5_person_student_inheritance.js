// Q5: Person and Student prototype inheritance
function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name); // Initialize inherited property.
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student("Rudra", "CSE");
student.showName();
student.showBranch();
console.log("Student inherits from Person:", Person.prototype.isPrototypeOf(student));
