//Create an array of movie titles. Loop through the array and add each element to the h2.
let movieCollection = ['Shaun of the Dead', 'Hot Fuzz', 'The World\'s End']

// class solution using .forEach()
// movieCollection.forEach((item, i) => {
//     document.querySelector('h2').innerText += item
// })

for (let i = 0; i < movieCollection.length; i++) {
    // console.log(movieCollection[i])
    document.querySelector('h2').innerText += movieCollection[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numberArray = [1, 2, 3]

// .forEach() solution
numberArray.forEach((item, i) => {
    numberArray[i] = item + 3
}) // we are reassigning each time we go through, which is why in the console we get: "Array(3) [ 4, 5, 6]"

console.log(numberArray)

//Find the average of all the numbers from question two
let sum = 0
for (let i = 0; i < numberArray.legnth; i++) {
    sum += numberArray[i]
}

console.log(sum / numberArray.length)

// could utilize other helper message like .forEach(), etc.
