//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reversePokemonParty(arr) {
    return arr.reverse()
}
console.log(reversePokemonParty(["Charzard", "Blastoise", "Oddish"]))

// CLASS SOLUTION
// function reverseParty(arr) {
//     return arr.reverse()
// }
// console.log(reverseParty(["bulba", "pika", "butter"]))


//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// CLASS SOLUTION
function compareArr(a, b) {
    // whole value of using reduce will reduce it into one sum
    return a.reduce((acc, currVal) => acc + currVal ** 2, 0) > b.reduce((acc, currVal) => acc + currVal ** 3, 0)
}
console.log(compareArr([2, 2, 2], [2, 2, 2]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
// function multipleOfTheirOwnIndex(arr) {
    
// }

// CLASS SOLUTION
// "return a new array" should give two alarm bells: map() or filter()
function isMultiple(arr) {
    return arr.filter((element, index) => element % index === 0)
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
// ["2", 5, "11", 4]

// CLASS SOLUTION 01
function couldBeNumSum(arr) {
    return arr.reduce((acc, c) => acc + Number(c), 0)
}
console.log(couldBeNumSum(["2", 5, "11", 4]))
// concatentation returns a weird result: as soon as string "2" was added, it turned the returning data type into a string... maybe we can use Number to our current value
// if we delete the "0", then the concatentation comes back... the accumulation becomes a string before the conversion even happens if we're missing the "0" initializer... optionally could make our acc a Number too, but the "0" is saving our butts
// secret solution is usingthe urnary operator "+acc + +c" and this will work without our "0" initliazer too
// BUT WHITE SPACE MATTERS FOR THIS CASE "()acc, c =>+acc++c" will give something funky
// flex solution for example: x => x.reduce((a, c) =>+a+ +c)
// ... a "clever solution"