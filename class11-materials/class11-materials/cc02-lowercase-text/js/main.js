// Coding Challenge 02
// Make the following text all lowercase:
// COMMENT OUT YOUR JS
// TYPE IT ALL OUT AGAIN WITHOUT LOOKING
// PEAK IF YOU HAVE TOO
// REPEAT UNTIL YOU DO NOT HAVE TO PEAK
// DELETE YOUR JS ENTIRELY
// AND DO IT AGAIN
// THEN DO IT AGAIN BUT CHANGE SOMETHING!

// document.querySelector("#toneItDownButton").addEventListener("click", whisperPlease)

// // let yell = "COMMENT OUT YOUR JS TYPE IT ALL OUT AGAIN WITHOUT LOOKING PEAK IF YOU HAVE TOO REPEAT UNTIL YOU DO NOT HAVE TO PEAK DELETE YOUR JS ENTIRELY AND DO IT AGAIN THEN DO IT AGAIN BUT CHANGE SOMETHING!"

// // console.log(whisperPlease.toLowerCase())
// // alert(whisperPlease.toLowerCase())

// function whisperPlease() {
//     let yell = document.querySelector("#yelledMessage").value

//     let whisperText = yell.toLowerCase()

//     document.querySelector("#whisper").innerText = whisperText
// }

// Double tikka masala with garlic naan
// chicken vindaloo and mushroom masala with garlic naan
// lamb vindaloo and mushroom masala with garlic naan 

// smurf to listen for a click
// document.querySelector('#toneItDownButton').value

// record value of yelled plain text
// let yell = document.querySelector('#yelledMessage')
// add toLowerCase to make yelled text whisper

// display converted text from yell to whisper in DOM

// document.querySelector('#toneItDownButton').addEventListener('click', whisperPlease)

// function whisperPlease() {
//     const convertYell = document.querySelector('#yelledMessage').value.toLowerCase()

//     document.querySelector('#whisper').innerText = convertYell
// }

// Working version... WHAT??
document.querySelector("#toneItDownButton").addEventListener("click", whisperPlease);

function whisperPlease(){
 const convertYell = document.querySelector("#yelledMessage").value.toLowerCase();
 
  document.querySelector("#whisper").innerText = convertYell;
}

// something incorrect in the HTML after copy-paste test
