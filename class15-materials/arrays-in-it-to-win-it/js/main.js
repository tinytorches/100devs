//Create an array of movies with at least three movies.
let movieArray = ['Interstellar', 'Life Aquatic with Steve Zissou', 'Rush Hour']

//Using the array from above, store the first movie in a variable
let christoperNolan = movieArray[0]

//Get the length of the original array and store it in a new variable
let numOfMovies = movieArray.length
// console.log(movieArray.length) // 3

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movieArray[ numOfMovies - 1 ] // always have to subract by 1 because we start counting by 0
// let lastMovie = movieArray[ movieArray.length - 1 ] // another solution
// pop and slice make things easier