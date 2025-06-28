let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".output-display input");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.target.textContent;

    if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = "Error";
      }
    } else if (value === "sin") {
      try {
        currentInput = Math.sin(toRadians(eval(currentInput))).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value === "cos") {
      try {
        currentInput = Math.cos(toRadians(eval(currentInput))).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value === "tan") {
      try {
        currentInput = Math.tan(toRadians(eval(currentInput))).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value === "√") {
      try {
        currentInput = Math.sqrt(eval(currentInput)).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value === "x²") {
      try {
        currentInput = Math.pow(eval(currentInput), 2).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value === "log") {
      try {
        currentInput = Math.log10(eval(currentInput)).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value === "ln") {
      try {
        currentInput = Math.log(eval(currentInput)).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value === "π") {
      currentInput += Math.PI.toString();
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else {
      if (currentInput === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    input.value = currentInput || "0";
  });
});

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function clearDisplay() {
  currentInput = "0";
  input.value = "0";
}
