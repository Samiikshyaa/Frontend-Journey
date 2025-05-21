let divs = document.getElementsByClassName("box")
// console.dir(divs)
// console.log(divs.__proto__); //gives prototype properties of the object
let i = 1;
for(d of divs){
    d.innerHTML = `unique text ${i}`
    i++;
}


console.log("\n==== namedItem learning ===\n")

let element = document.getElementsByClassName("item").namedItem("uniqueId");
console.log(element); 


let div = document.querySelectorAll(".box")
// console.dir(div)
console.log("\n",div)
for(di of div){
    console.log(di)
}


//difference between the HTMLCollection and NodeList
console.log("\n==========difference between the HTMLCollection and NodeList====================\n")
const list = document.getElementById('list');
console.log(""+(list.innerHTML))
//Get items by class name (two ways)
const itemsByClassName = document.getElementsByClassName('item');
const itemsByQuerySelector = document.querySelectorAll('.item');

console.log('First console log', itemsByClassName, itemsByQuerySelector);

//adding the fourth element
list.innerHTML += `<li class="item">Fourth Item</li>`;

console.log('Second console log', itemsByClassName, itemsByQuerySelector);

console.log("items By class name:   ",itemsByClassName)
console.log("------------- GET  Attributes:   ", list.getAttribute("id"))
for(let item of itemsByQuerySelector){
    console.log(item)
    console.log(item.getAttribute("class"))
}
console.log("==================")
let j = 0;
for(let i of itemsByClassName){
    console.log(i)
    if(j==2){
        i.setAttribute("id","third")
        console.log(i.getAttribute("id"))
    }
    console.log(i.getAttribute("class"))
    j++;
}

third = document.getElementById("third").getAttribute("id")
console.log(third)