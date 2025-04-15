// using the prompt function
let uname = prompt("Please enter your name:")
console.log(uname)

// using form
function getName(){
    let name = document.getElementById("uname").value
    console.log(String(name))
if(name!=null){
    alert("Hello, " +name+ "!");
}else{
    alert("You cancelled the input. ");
}
return false;
}


//using event listener
document.getElementById("number").addEventListener("input",
function(event){
    let number = event.target.value;
    console.log(number);
}
)


function getNumber(){
    let number = document.getElementById("testNumber").value
    if(testnumber%2 == 0){
        alert("The number is even")
    }else{
        alert("The number is odd")
    }
}

// document.getElementById("testNumber").addEventListener("input",
// function(event){
//     let testnumber = event.target.value;
//     if(testnumber%2 == 0){
//         alert("The number is even")
//     }else{
//         alert("The number is odd")
//     }
// }
// )