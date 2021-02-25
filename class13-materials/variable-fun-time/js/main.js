//--- Easy
//create a variable and assign it a number
let tacos = 12
//minus 10 from that number
let eatenTacos = tacos - 10
// tacos -= 10
//print that number to the console
console.log(eatenTacos)

//--- Medium
//create a variable that holds a value from the input
let userInput = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
userInput += 25
//alert that number
alert(userInput)

// be sure to set an event listener so it runs after a user does something... as is, it will simply alert 25 without allowing the user to add something into the input
// useriinput is originally assigned 

//--- Hard
//create a variable that holds the h1
let biggestHeader = document.querySelector('h1').value
//add an event listener to that element that console logs the sum of the two previous variables
biggestHeader.addEventListener('click', sum)

function sum() {
    console.log(Number(tacos) + Number(userInput))
}