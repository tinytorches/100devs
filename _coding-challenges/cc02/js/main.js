// Coding Challenge
// 12 January 2021

// Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!

function winnerWinnerChickenDinner(number, word) {
    userWinner = word.length * number
    
    if (userWinner > 100) {
        alert('WINNER!')
    } else {
        alert('Looks like you aren\'t a winner today.')
    }
}

// console.log(winnerWinnerChickenDinner(120, 'teriyaki'))