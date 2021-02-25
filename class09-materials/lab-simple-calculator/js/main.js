let total = 0;
// declaring a variable called "total" and assigning it the value of "0"

document.querySelector("#pumpkin").addEventListener("click", makeZero);
document.querySelector("#dominosPizza").addEventListener("click", jumanji);
document.querySelector("#zebra").addEventListener("click", add9);
document.querySelector("#cantThinkOfAnything").addEventListener("click", sub2);
// Event listeners that look slightly different from Youtube Picker example
// addEventListener is a universal event listener, we can do a lot with it
// Got rid of elementById for querySelector
document.querySelector("#add15").addEventListener("click", add15);
document.querySelector("#sub30").addEventListener("click", sub30);

function makeZero() {
  total = 0;
  document.querySelector("#placeToPutResult").innerText = total;
}

function jumanji() {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerText = total;
}

function add9() {
  total = total + 9;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function sub2() {
  total = total - 2;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function add15() {
  total = total + 15;
  document.querySelector("#placeToPutResult").innerText = total;
}

function sub30() {
  total = total - 30;
  document.querySelector("#placeToPutResult").innerText = total;
}
