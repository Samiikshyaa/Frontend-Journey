class Person {
    name= "Samikshya";
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    grade = "A+";
    showGrade() {
        console.log(`${this.name} got ${this.grade} grade`);
    }
}

const student1 = new Student();
student1.greet();
student1.showGrade();   
