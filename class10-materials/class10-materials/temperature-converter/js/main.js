//Write your pseduo code first! 
// 1. Record the initial temperature value
// 2. Convert the temperature whether it's celcius/fahrenheit to the other value
// 3. Return the conversion



// psuedo code written in class
// click event 
 document.querySelector('#zebra').addEventListener('click', convert)

 //tester
//  function convert() {
//    alert("WORKS!")
//   }

function convert() {
    // get the value from the input
    const celcius = document.querySelector('#brainStorm').value
    // quick mafs, convert it
    const convertedValue = celcius * 9/5 + 32
    // display the value
    // console.log(convertedValue)
    document.querySelector('#talkThatTalk').innerText = convertedValue
}