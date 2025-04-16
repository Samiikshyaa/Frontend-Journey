console.log("*****************")
const student = {
    id: 1,
    name: "Samikshya",
    college: "HCOE",
    age: 23
}
let age = student.age
student.surName = "Timalsina"
console.log(student)
console.log(student['name']);
console.log(student.name);
console.log("present age = "+student.age + "\nAge after 1 year = "+ (student.age+1))


if(age>18){
    console.log("You can vote")
}else{
    console.log("You cannot vote")
}


