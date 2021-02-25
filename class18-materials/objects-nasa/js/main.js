//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// smurf
document.querySelector('button').addEventListener('click', getAPOD)

function getAPOD() {

    const inputValue = document.querySelector('input').value
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + inputValue
    // console.log(url) // test

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        //   console.log(data)

          document.querySelector('h2').innerText = data.title
          document.querySelector('img').src = data.url
          document.querySelector('h3').innerText = data.explanation

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}