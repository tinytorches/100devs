//---Easy
//create a function that adds two numbers and alerts the sum
function addTwoNum(num1, num1) {
    sum = num1 + num2
    alert(sum)
}

// function addTwoNum(num1, num1) {
//     alert(num1 + num2)
// }

//create a function that divides two numbers and console logs the quotient
function divTwoNum(num1, num2) {
    quotient = num1 / num2
    console.log(quotient)
}

// function divTwoNum(num1, num2) {
//     console.log(num1 / num2)
// }

//create a function that multiplys four numbers and returns the product
function multiFourNum(num1, num2, num3, num4) {
    product = num1 * num2 * num3 * num4
    return product
}

// function multiFourNum(num1, num2, num3, num4) {
//     return num1 * num2 * num3 * num4
// }

//---Medium
//create a function that takes in four numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the difference of the last two numbers
function complicatedMath (num1, num2, num3, num4) {
    return (num1 + num2) % (num3 - num4)
}
console.log(complicatedMath(5, 5, 4, 1))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
//saving solution for january 9 office hours