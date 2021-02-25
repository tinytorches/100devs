let total = 0

// place smurfs here 
document.querySelector("#zero").addEventListener("click", makeZero);
document.querySelector("#addThree").addEventListener("click", addThree);
document.querySelector("#addNine").addEventListener("click", addNine);
document.querySelector("#addFifteen").addEventListener("click", addFifteen);
document.querySelector("#subTwo").addEventListener("click", subTwo);
document.querySelector("#subThirty").addEventListener("click", subThirty);



// functions
function makeZero() {
    total = 0
    document.querySelector("#result").innerText = total
}

function addThree() {
    total = total + 3
    document.querySelector("#result").innerText = total
}

function addNine() {
    total = total + 9
    document.querySelector("#result").innerText = total
}

function addFifteen() {
    total = total + 15
    document.querySelector("#result").innerText = total
}

function subTwo() {
    total = total - 2
    document.querySelector("#result").innerText = total
}

function subThirty() {
    total = total - 30
    document.querySelector("#result").innerText = total
}

