const generatedNumber = Math.floor(Math.random() * 11) + 1;
console.log(generatedNumber);
let attempt = 5;
let life = "";
function displayLife() {
  life = "♡".repeat(attempt);
  console.log("attempt = " + attempt);
  console.log(life);
  document.getElementById("life").innerHTML = life;
}

function testResult() {
  let number = document.getElementById("guess").value;
  let text = "";
  if (number == generatedNumber) {
    text = "<b> Congratulations! You've guessed it right </b>";
    console.log(text);
  } else {
    attempt--;
    displayLife();
    text = "<b> Try Again! </b>";
    console.log(text);
  }
  document.getElementById("result").innerHTML = text;
  if (attempt <= 0) {
    document.getElementById("result").innerHTML = "<b>Game OVER !</b>";
    console.log("Game Over");
    document.getElementById("guess").disabled = true;
    document.getElementById("guessButton").disabled = true;
  }
}
