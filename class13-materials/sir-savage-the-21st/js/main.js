//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
// function printTwentyOne() {
//     for (let i = 1; i <= 21; i++ ) {
//         console.log(i)
//     }
// }
// printTwentyOne()

// hard mode
function printTwentyOne() {
    for (let i = 1; i <= 21; i++ ) {
        document.querySelector('#savageSays').innerText += " 21 " // += is important for concatentation because '=' will just refresh itself
    }
}
printTwentyOne()

// Pro-tip: type out your parentheses and curly braces out so you don't miss it later -- write out the syntax