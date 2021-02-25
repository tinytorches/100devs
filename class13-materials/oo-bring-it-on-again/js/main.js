// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 100
alert(num)

// Create a variable, divide it by 10, and console log the value
let otherNum = 50
otherNum = otherNum / 10
console.log(otherNum)



// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiThreeAndAlert(n1, n2, n3) {
    let product = n1 * n2 * n3
    // alert(n1 * n2 * n3) // alternatively to re-use the math
    alert(product)
}
multiplyThreeNum(2, 3, 4) // not asked, but just calling it

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNumAddSub(n1, n2, n3, n4) {
    let result = n1 + n2 - n3 - n4 // called it result because it was asked for in the brief.
    console.log(result)
}



// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNumAndAlert(n1, n2, n3, n4) {
    let result = (100 + n1 - n2) / n3 // The way the brief is written could be open to interpretation
    if(result > 25) {
        console.log('WE HAVE A WINNNA')
    }
}
threeNumAndAlert(20, 10, 5)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(day = 'default') { // would not be using default if pulling from the DOM and would be left empty like ''
    let dayLowerCase = day.toLowerCase()
    if(dayLowerCase === 'saturday' || dayLowerCase === 'sunday') {
        alert('weekend')
    } else if(dayLowerCase === 'default') { // would not be using default if pulling from the DOM and would be left empty like ''
        alert('try again')
    } else {
        alert('weekday')
    }
}
// FINISH ME
// different version that takes more time
function dayOfWeek(day) {
    let dayLowerCase = day.toLowerCase()
    if(dayLowerCase === 'saturday' || dayLowerCase === 'sunday') {
        alert('weekend')
    } else if(dayLowerCase === 'monday' || dayLowerCase === 'tuesday' || dayLowerCase === 'wednesday' || dayLowerCase === 'thursday' || dayLowerCase === 'friday') {

    } else {
        alert(try again')
    }
}
// FINISH ME

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function logAllValuesToNum(num) {
    for(let i = 1; i <= num; i += 3) {
        console.log(i) // idea: console.log all the numbers from 1 to our number, but only counting by 3, will stop at the num we passed in as the argument.
    }
}