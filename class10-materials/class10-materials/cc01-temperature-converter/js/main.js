// Coding Challenge (due Thursday):
// Make a temperature converter that goes from Fahrenheit to Celsius!

// Write smurf for click event
document.querySelector("#convertButton").addEventListener("click", convert)

// Test
// function convert() {
//     alert("Ello There!")
// }

// write a function to convert from F to C
function convert() {
    // record value of user input
    const fahrenheit = document.querySelector("#fahrenheitValue").value
    // use math equation to convert F to C
    const convertedValue = (fahrenheit - 32) * 5/9
    // display the result on page (h1)
    document.querySelector("#result").innerText = convertedValue
}

// to-do list
// add details to html
// make it pretty with css
// write pseudo code above
// find out the math conversion for F to C
// write out function