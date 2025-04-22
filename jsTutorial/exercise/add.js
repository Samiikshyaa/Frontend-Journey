document.getElementById("myNumber").addEventListener("input", function (event) {
  let number = event.target.value;
  document.getElementById("output").innerHTML = number;
});

discount();

function add() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let sum = a + b;
  console.log(sum);
}


function average(){
let marks=[12,33,4,5,67,80]
let sum = 0;
let avg = 0;
for(let mark of marks){
    sum += mark;
}
avg = sum/marks.length
console.log("The average is: "+avg)
}

function discount(){
    let prices= [200,300,400,505,605]
    console.log("The price before discount: "+ prices)

    for(let price of prices){
        prices[prices.indexOf(price)] = price- ((10/100) * price)
    }
    console.log("The price after discount "+prices)
}