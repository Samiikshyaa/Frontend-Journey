//traditional function
const great = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log("The greatest is : " +great(2,3))

//arrow function
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 4));


//callback functions
const addition = (a,b) => a+b;
const subtract = (a,b) => a-b;

//Higher order function
const calculate = (a,b,callback) => callback(a,b);

console.log("The addition is: "+calculate(10,5,addition))
console.log("The subtraction is: "+calculate(10,5,subtract))
