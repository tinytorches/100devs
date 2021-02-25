//Arrays

//Create and array of tv shows. Loop through and print each show to the console
// let bestShows = ['Breaking Bad', 'Truth Seekers', 'Game of Thrones', 'Band of Brothers']
// for (let i = 1; i < bestShows.length(); i++) {
//     console.log(i)
// }
// console.log(bestShows[i]) 

// class solution
let powerRangers = ['mighty morphin', 'alien rangers', 'zeo']
powerRangers.forEach(show => console.log(show)) // built-in arrow function
// powerRangers.forEach( (show, chickenButt => console.log(show, chickenButt))) // chickenButt counts as the index, can be named anything

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numArray = [17, 74, 84, 77, 66, 10, 80]
// let mapArray = numArray.map(x => )
// didn't finish!

// class solution
let nums = [2, 7, 9, 18, 118, 9]

function onlyEvens(arr) {
    return arr.filter(num => num % 2 === 0) // filter takes in a function and helps you filter out things that meets that requirement (the numbers that are divided by 2 with a remainder of 0 will be returned) 
}
console.log(onlyEvens(nums))

// codewars flex version
let nums = [2, 7, 118, 18, 9]
let onlyEvens = arr => arr.filter(num => num % 2 === 0) // nums vs. num is just made-up labeling because JavaScript is weird; could be chickenButt again
console.log(onlyEvens(num))

// filter or map would be good options for the solution

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function secondLowAndHigh(arr) {
    let sorted = array.sort((a, b) => a-b) // arrow function telling it which way to sort it
    alert(sorted[1] + sorted[sorted.length - 2])
}
secondLowAndHigh([2, 3, 4, 5, 1])

// extra credit: write this in one line
// arr.sort()[1] + arr.sort()[arr.length -2]