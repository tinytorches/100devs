//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

// solution without map
function newArrEven(arr) { // we created a function that takes in an array as a function
    let newArr = [] // remember: literal notation // we made a new array
    arr.forEach( (item, i) => { // we're using forEach to make a new loop; it'll run once for each element in the array
        if ( item % 2 === 0 ) { // is 1 divisible by 2? is 2 divisible by 2? e? etc.
            newArr.push(item) // if it's true we push it onto the new array
        }
    } )
    return newArr
}
// newArrEven([1, 2, 3, 4, 5])
console.log(newArrEven([1, 2, 3, 4, 5]))

