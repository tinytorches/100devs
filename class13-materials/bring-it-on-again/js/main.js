// *Variables*
// Declare a variable, assign it a value, and alert the value
let burrito = 10
alert(burrito)
// Create a variable, divide it by 10, and console log the value
let enchilada
enchilada / 10
console.log(enchilada)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNum(n1, n2, n3) {
    alert(n1 * n2 * n3)
}
multiplyThreeNum(2, 2, 2)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNum(n1, n2, n3, n4) {
    console.log((n1 + n2) (n3 - n4))
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNumMath(n1, n2, n3) {
    let total = ((100 + n1) - n2) / n3
    if(total > 25) {
        console.log('WE HAVE A WINNA')
    }
}
threeNumMath(100, 100, 1)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// function dayOfTheWeek(day) {
//     if(day === 'saturday' || day === 'sunday') {
//         alert('weekend')
//     } else if(day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
//         alert('weekday')
//     } else if(day === '') {
//         alert('Try again!')
//     }
// }

function dayOfTheWeek(day) {

    day = day.toLowerCase()

    if(day === 'saturday' || day === 'sunday') {
        alert('weekend')
    } else if(day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
        alert('weekday')
    } else {
        alert('Try again!')
    }
}
// dayOfTheWeek('saturday')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num) {
    for(let i = 1; i <= num; i++) {
        if((i % 3) === 0) {
            console.log(i)
        }
    }
}

// answer by theD4ne
// function tripsCounter(n){
//     for(let i = 1; i <= n; i++){
//       if((i % 3) == 0 ){
//         console.log(i)
//       }
//     }
//   }