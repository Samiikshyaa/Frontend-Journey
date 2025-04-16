// function findOddOrEven(){
//     let num = document.getElementById("number").value
//     if(num% 2 == 0){
//         document.getElementById("message").innerHTML = "<b>Even</b>"
//     }else{
//         document.getElementById("message").innerHTML = "<b> Odd </b>"
//     }
// }


function findOddOrEven() {
    let num = document.getElementById("number").value;
    let message = document.getElementById("message");
    if (num === "") {
        message.innerHTML = "<b>Please enter a number.</b>";
        return;
    }
    num = Number(num);
    if (isNaN(num)) {
        message.innerHTML = "<b>Invalid input. Please enter a valid number.</b>";
        return;
    }
    if (num % 2 === 0) {
        message.innerHTML = "<b>Even</b>";
    } else {
        message.innerHTML = "<b>Odd</b>";
    }
}
