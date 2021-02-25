// place your smurfs here
document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("orange").onclick = partyOrange;
document.getElementById("reset").onclick = reset;

function partyPurple() {
  document.querySelector("body").style.backgroundColor = "purple";
  document.querySelector("body").style.color = "white";
}

function partyGreen() {
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector("body").style.color = "white";
}

function partyBlue() {
  document.querySelector("body").style.backgroundColor = "blue";
  document.querySelector("body").style.color = "white";
}

function partyOrange() {
  document.querySelector("body").style.backgroundColor = "orange";
  document.querySelector("body").style.color = "white";
}

function reset() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector("body").style.color = "black";
}
