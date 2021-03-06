// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = ' beer '
favDrink = favDrink.trim()
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let favFood = 'nachos, ramen, pizza'
// let favFood = 'nachos, ramen, pizza, apple'
let favFoodCheck = favFood.includes('apple')
console.log(favFoodCheck)

// class solution
let multiWord = 'car rainbow apple'
// multiWord.search('apple')
console.log(multiWord.search('apple')) // gives '12', which is the charAt or the character location
if (multiWord.search('apple') !== -1) {
    console.log('yes')
} else {
    console.log('no')
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
// function rockPaperScissors() {
//     let random = Math.random()
//     if (random < .333) {
//         return 'rock'
//     } else if (random >= .333 && random < .666) {
//         return 'paper'
//     } else {
//         return 'scissors'
//     }
// }
// console.log(rockPaperScissors())

// class solution
function rockPaperScissors() {
    let random = Math.random() // returns a number between 0 and 1
    if (random < .33) {
        return 'rock'
    } else if (random < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
// function playerChoice(choice) {
//     let botChoice = rockPaperScissors() // calling the function we made above
//     if (choice === 'rock' && botChoice === 'scissors') {
//         console.log('you won')
//     } else if (choice === 'paper' && botchoice === 'rock') {
//         console.log('you won')
//     } else if (choice === 'scissors' && botchoice === 'paper') {
//         console.log('you won')
//     } else {
//         console.log('looks like the bot got you')
//     }
// }

// class solution
function checkWin(choice) {
    let botChoice = rockPaperScissors()
    if ((choice === 'rock' && botChoice === 'scissors') || (choice === 'paper' && botChoice === 'rock') || (choice === 'scissors' && botChoice === 'paper')) {
        console.log('you won') 
    } else if (choice === botChoice) {
        console.log('you tied')
    } else {
        console.log('you lost')
    }
}
checkWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

// we want to run our function multiple times

function playGame(arr) {
    arr.forEach((choice) => {
        checkWin(choice)
    })
}
playGame( ['rock', 'paper', 'paper'] ) // passing into playGame function