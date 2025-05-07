let div = document.getElementsByTagName("div")[0]
div.innerHTML = "Hi hello"
console.log(div.getAttribute("id"))
console.log(div.setAttribute("id","heading"))
console.log(div.getAttribute("id"))

let paragraph = document.querySelector("p")
console.log(paragraph)