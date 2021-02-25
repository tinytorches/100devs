//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
// let numArr = [2, 1, 4, 3]
// const sum = numArr.reduce()

// class solution
let arr = [3, 4, 5, 2, 3]
// console.log( arr.reduce((accumulator, currentValue) => 
//     accumulator + currentValue, 0) )

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

// if you hear 'new array', lean into using .map()

//Math.pow() works too
let newArr = arr.map(num => num ** 2) // saving it into a variable so it's not lost in the void
console.log(newArr)

//Create a function that takes string
//Print the reverse of that string to the console

// split, reverse, join
function unoReverse(str) {
    console.log( str.split('').reverse().join('') )
}
unoReverse('elon')

// split returns an array of characters
// reverse is a method on arrays, not strings
// join concatenates all of the elements in an array

//Create a function that takes in a string
//Alert if the string is a palindrome or not

let palindromeCheck = str => str === str.split('').reverse().join('')
// arrow syntax to do it all in one line
console.log(palindromeCheck('leon')) // false
console.log(palindromeCheck('leonnoel')) // true