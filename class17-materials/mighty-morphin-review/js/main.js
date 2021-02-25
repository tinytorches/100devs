// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
// let favHoliday = 'JULYFOURTH'

// class solution
let favHoliday = 'Halloween'
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let dayOfTheWeek = 'Tuesday' 
let dayCopy = 'Tuesday'.substring(4)
console.log(dayCopy)

// class solution
let bestPizza = 'Dominos'
alert(bestPizza.slice(-3)) // counting back from the last number

// substring is valid
// could've built an array

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
// function fiveNumbers(n1, n2, n3, n4, n5) {
//     alert(n1 - n2 - n3 - n4 - n5 - 100)
// }
// fiveNumbers(5, 10, 15, 20, 25)
// missed incorporating "absolute value" in my solution

// class solution
function subFiveAndCheck(n1, n2, n3, n4, n5) {
    let difference = 100 - n1 - n2 - n3 - n4 - n5
    alert( Math.abs(difference) ) // absolute value of a number is the distance a number is from 0
}
subFiveAndCheck(118, 2, 44, 5, 5)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNumbers(n1, n2, n3) {
    console.log(Math.min(n1, n2, n3))
    console.log(Math.max(n1, n2, n3))
}
threeNumbers(10, 4, 18)

// class solution
function lowestAndHightestNum(n1, n2, n3) {
    console.log(`The lowest is ${Math.min(n1, n2, n3)} and the highest is ${Math.max(n1, n2, n3)}`)
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails() {
//     let coinSides = =['heads', 'tails']
//     console.log(coinSides.random())
// }
// still need to test

// class solution
function headsOrTails() {
    let random = Math.random() // Math.random() returns a number between 0 and 1 (.01 - .99)
    if (random < .5) { // .5 will return half; you would check for anything less than .33, .66 for rock, paper,scissors
        return 'heads'
    } else {
        return 'tails'
    }
}
console.log(headsOrTails())

// class solution - ternary way
// function headsOrTailsTernary() {
//     return Math.random() < .5 ? 'heads' : 'tails'
// }
// console.log(headsOrTailsTernary())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.


// class solution
function flipFlipFlipadelphia(num) {
    for (let i = 1; i <= num; i++) {
        let result = headsOrTails()
        console.log(result)
    }
}
flipFlipFlipadelphia(5)
// we're using two functions together!
// now we're cooking