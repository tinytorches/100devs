// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let positiveAffirmation = 'you\'re breathtaking '
let whatDidYouSay = positiveAffirmation.repeat(10) 
console.log(whatDidYouSay)

// class solution
let positiveAff = 'You are beautiful'
console.log(`Again: ${positiveAff.repeat(24)}`)

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let movieTitle = ['S', 't', 'a', 'r', ' ', 'W', 'a', 'r', 's']
let combinedTitle = movieTitle.join('')
console.log(combinedTitle)

// class solution
let word = ['T', 'e', 's', 'l', 'a']
console.log(word.join(''))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
/*
The rules: "Scissors decapitate Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors
*/
// function 
// rockPaperLizardSpockScissors() {
//     let result = Math.random()
// }

function rpsls() {
    let random = Math.random()
    if(random < .2) {
        return 'rock'
    } else if (random < .4) {
        return 'paper' 
    } else if (random < .6) {
        return 'scissors'
    } else if (random < .8) {
        return 'lizard'
    } else {
        return 'spock'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice) {
    let botChoice = rpsls()
    if ()
}
