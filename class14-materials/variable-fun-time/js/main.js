//--- Easy
//create a variable and assign it a boolean
let pizza = true
//create a variable and assign it a string that is a number
// let pizzaSlices = 12
let pizzaSlices = "12"
//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
pizzaSlices = Number(pizzaSlices) + 10
// Number(pizzaSlices += 10) // guess you need to right it the long way?
//print that number to the console
console.log(pizzaSlices)
//--- Medium
//create a variable that holds a value from the input
// GOTCHA! addEventListener
document.querySelector('#mrRightNow').addEventListener('click', add21)

function add21() {
    let pizzaService = Number(document.querySelector('input').value) // GOTCHA! This will not work, since it's running auto-magically. We need it to wait for us with a smurf.

    //add 21 to that number
    pizzaService += 21
    //alert that number
    alert(pizzaService)
}

//--- Hard
//create a variable that holds the h1
let mrRightNow = document.querySelector('#mrRightNow')
//add an event listener to that element that places the product of the two previous variables in the DOM

// just going to do it with pizzaSlices
mrRightNow.addEventListener('click', stunt)

function stunt() {
    document.querySelector('#needSomeTLC').innerText = pizzaSlices * pizzaSlices
}

// funky cause we added 10 earlier on