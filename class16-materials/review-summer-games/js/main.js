//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// Review forEach example
// function multiplyArray(array) {
//     let product = 1
//     // short-hand of for Loop using forEach
//     array.forEach( (item, i) => ) { // parameter "item" and "i"... item correlates with the values in the argument
//         product *= item
//     }
// }
// multiplyArray([1, 2, 3, 4, 5])


// for loop solution
function multiArray(arr) {
    let product = 1

    for ( let i = 0; i < arr.length; i++ ) {
        product = product * arr[i]
    }
    alert(product)
}
multiArray([1, 2, 3, 4, 5])

// we have a function
// we have a function call in the bottom
// passing the argument into the function through its parameters
// we have a loop counter of "i"
// remember that arrays count from 0
// we're counting by 1 each time
