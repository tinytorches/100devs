//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
// let numberArray = [2, 4, 2, 5, 1]
// let sum = numberArray.reduce(function(a, b) {
//     return a + b
// }, 0)
// console.log(sum)

// class solution
let nums = [2, 333, 432, 545, 24542]
let sum = nums.reduce((a, b) => a + b, 0) // 0 is in the place of the value you're starting from; in this case you can crop the 0, but for best practice, add it in there to help avoid concatentation and make sure the value is a number 
// a is the accumulator or bucket holding our total value as the function runs
console.log(sum)




// reserved for office hours

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared


//Create a function that takes string
//Print the reverse of that string to the console


//Create a function that takes in a string
//Alert if the string is a palindrome or not
