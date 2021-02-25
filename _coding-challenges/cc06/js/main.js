// Coding Challenge
// 16 January 2021

// Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2.

function wickedMaths(number) {
    for (let i = 0; i <= number; i++) {
        if ((i * 3) % 2 !== 0) {
          console.log(i)  
        }
    }
}
wickedMaths(21)