// let uname = prompt("Please enter your name:")
// console.log(uname)
function getName(){
    let name = document.getElementById("uname")
    console.log(String(name))
if(name!=null){
    alert("Hello, " +name+ "!");
}else{
    alert("You canceled the input. ");
}
}