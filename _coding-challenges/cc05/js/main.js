// Coding Challenge
// 15 January 2021

// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 

// Review our last practice problem from last class if you need some ideas.


// forEach(), possible to use map() too?


function newArrOdd(arr) {
    let newArr = []
    arr.forEach((item) => {
        if ( item % 2 !== 0 ) {
            newArr.push(item)
        }
    })
    return newArr
}
console.log(newArrOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]))