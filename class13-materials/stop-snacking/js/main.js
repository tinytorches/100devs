//Create a function that grabs the number of snacks from the input and tells you to stop that many times

// need a smurf that only runs on click events
// document.querySelector('#help').addEventListener('click', stopSnacking)

// function stopSnacking() {
//     let numOfSnacks = Number(document.querySelector('input').value) // wrapping it in Number because we know we want a number as the outcome... just being safe
//     for (let i = 1; i <= numOfSnacks; i++) {
//         document.querySelector('#stops').innerText += " Stop! "
//     }
// }
// since we didn't clearm the output on the DOM will continue to concatenate

// version without concatenation
document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {
    let numOfSnacks = Number(document.querySelector('input').value) // wrapping it in Number because we know we want a number as the outcome... just being safe
    document.querySelector('#stops').innerText = ' ' // for concatentation
    for (let i = 1; i <= numOfSnacks; i++) {
        document.querySelector('#stops').innerText += " Stop! "
    }
}