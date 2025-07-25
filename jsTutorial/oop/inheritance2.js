class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name);         // Call the parent constructor
        this.grade = grade;
    }

    showGrade() {
        console.log(`${this.name} is in grade ${this.grade}`);
    }
}

const student1 = new Student("Samikshya", 12);
student1.greet();        
student1.showGrade();   
