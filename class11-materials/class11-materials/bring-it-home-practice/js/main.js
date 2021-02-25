// Round 2
// *Variables*
// Create a variable and console log the value

// Create a variable, add 10 to it, and alert the value

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

// Create a function that divides one number by another and returns the remainder

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA


// Round 01 (12/12 Office Hours)
// *Variables*
// Create a variable and console log the value
const bestMate = Rose

// Create a variable, add 10 to it, and alert the value
let count = 0
count = count + 10
// count += 10
alert(count)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourAndAlert(n1, n2, n3, n4) {
    alert(n1 - n2 - n3 - n4)
}
subFourAndAlert(10, 7, 3, 1)

// Create a function that divides one number by another and returns the remainder
function divideAndReturnRemainder(bulbasaur, pikachu) {
    return bulbasaur % pikachu
}
console.log(divideAndReturnRemainder(10, 6))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
 function addTwoAlertJumanjiOverFifty(num1, num2) {
    let sum = num1 + num2 
    if(sum > 50) {
        alert("JUMANJI")
    } 
 }
addTwoAlertJumanjiOverFifty(60, 1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumCheckDivsByThreeAlertZebra(num1, num2, num3) {
    let product = num1 * num2 * num3
    if(product % 3 === 0) {
    } else {
        alert("Try again")
    }
}
multiplyThreeNumCheckDivsByThreeAlertZebra(3, 6, 9)