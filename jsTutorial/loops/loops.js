// for Loop
const number = prompt("Multiplication Table of: ")
document.getElementById("number").innerHTML = number
let text = '';
for(let i =1; i<=10; i++){
    text += number + " * " + i + " = " + (number*i) + "<br>"
}
document.getElementById("table").innerHTML = text



// ===============================================================================
// for in loop

document.write("<h1> for in: iterates over the properties and indices</h1><br>")
const array = ["Apple", "Banana", "Dragon Fruit", "Grapes"];
for(let x in array){
    document.write(array[x]+"<br>")
}



// ===============================================================================
// for of loop

document.write("<h1> for of: iterates over values or string directly</h1> <br>")
const array2 = ["Apple", "Banana", "Dragon Fruit", "Grapes"];
for(let x of array2){
    document.write(x+ "<br>")
}

//for each
document.write("<h1> for each: for iterating over arrays</h1><br>")
array2.forEach(myFunction)
function myFunction(value, index, array){
    document.write(value+"<br>")
}


