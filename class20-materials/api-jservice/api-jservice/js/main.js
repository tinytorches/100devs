//https://jservice.io/

// we get a random question and we make a prediction uf blawlawlaw can get it right

document.querySelector('#question').addEventListener('click', getFetch)
// extra event listener to reveal the answer
document.querySelector('#answer').addEventListener('click', showAnswer)

let answer = ''

function getFetch(){
  
  const url = 'http://jservice.io/api/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data[0].question
        document.querySelector('h3').innerText = data[0].category.title
        answer = data[0].answer
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// simple function to show the answer through the button
function showAnswer() {
  document.querySelector('h2').innerText = answer
}
