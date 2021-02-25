//---Easy
//create a function that subtracts two numbers and alerts the difference
function add(num1, num2) {
    let addedNum = num1 + num2
    alert(addedNum)
}
//create a function that divides three numbers and console logs the quotient
function divideThreeNum(num1, num2, num3) {
    let quotient = num1 / num2 / num3
    console.log(quotient)
}
//create a function that multiplys three numbers and returns the product
function multiplyThreeNum(num1, num2, num3) {
    let product = num1 * num2 * num3
    return product
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addAndReturnRemainderOfThreeNum(num1, num2, num3) {
    let total = (num1 + num2) % num3
    return total
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

//Class Results
//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNumAlert(num1, num2) {
    alert(num1 - num2)
}
subTwoNumAlert(100, 50)

//create a function that divides three numbers and console logs the quotient
function divideThreeAndLog(num1, num2, num3) {
    console.log(num1 / num2 / num3)
}
divideThreeAndLog(12, 4, 2)

//create a function that multiplys three numbers and returns the product
function multiThreeAndReturn(num1, num2, num3) {
    return num1 * num2 * numm3
}
multiThreeAndReturn(2, 3, 4)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndMod(num1, num2, num3) {
    return (num1 + num2) % num3) // watch out for Please Excuse My Dear Aunt Sally
}
addTwoAndMod(3, 3, 2)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
