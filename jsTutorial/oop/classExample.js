class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }

  nextYear() {
    this.age++;
    console.log(`${this.name} will be ${this.age} years old next year.`);
  }
}

const user1 = new Person("Samikshya", 22);

user1.greet();
user1.nextYear(); 
