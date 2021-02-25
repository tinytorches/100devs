// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = 'pizza'
favoriteFood = 'ramen'
alert(favoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let secondCharacter = 'The force is strong with this one.'
console.log(secondCharacter.charAt(1))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNumbers(n1, n2, n3) {
    let product = ( (n1 / n2) * n3 )
    alert(product)
}
threeNumbers(50, 2, 3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(number) {
    console.log(Math.cbrt(number))
}
cubeRoot(10)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

// WIP... forgot it's checking all the months
// function summerChecker(month) {
//     let summerCheckerLower = month.toLowerCase()
//     if ( summerCheckerLower === 'summer') {
//         alert('YAY')
//     } else {
//         alert('Booo')
//     }
// }
// summerChecker('')

function summerMonthCheck(month) {
    let lCMonth = month.toLowerCase()
    if ( lCMonth === 'june' || lCMonth === 'july' || lCMonth === 'august' ) {
        alert('YAY')
    } else {
        alert('Booo')
    }
}
summerMonthCheck('july')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(number) {
    for(let i = 1; i <= number; i++) {
        if ( i % 5 !== 0 ) {
            console.log(i)
        }
    }
}
skipFive(123)