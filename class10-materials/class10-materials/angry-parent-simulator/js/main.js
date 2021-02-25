// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // OLD WAY of concatentation
//   // have to hardcode the spaces in
//   document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   // NEW WAY with ES6
//   // Don't need to include empty spaces
//   // Anything that happens within the tick (`) will be placed in the DOM
//   // Spacing in-between will be carried into the DOM
//   // document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// SPEECCH SYNTHESIS API EXAMPLE
// Built-in feature 
const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

  document.querySelector('#placeToYell').innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}
