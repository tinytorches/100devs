// Coding Challenge
// 13 January 2021

// Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

let mathArray = [101, 749, 125, 200]

function sumOfFirstAndLastValue(mathArray) {

    let firstValue = mathArray.shift() 
    let lastValue = mathArray.pop()

    return sumOfMathArray = firstValue + lastValue
}
console.log(sumOfFirstAndLastValue(mathArray))