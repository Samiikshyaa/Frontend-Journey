let buttons = document.querySelectorAll(".button")
console.log(buttons)

buttons.forEach((button)=>
    button.addEventListener("click",(event)=>
        {let number = event.target.textContent
console.log(number)}))