//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === "image"){
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }else{
          alert('Media Not Supported - Contact NASA IMMEDIATLY')
        }
       
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// https://openlibrary.org/dev/docs/api/books
// https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json
// site has a bit of quirks, but lets look at the documentation for isbn and books
// samoke request has an isbn and json in the url

// read through the documentation
// read through the examples
// play around with the query parameters
// could try to add ".json" to a url if you're getting html or a format you don't like or "format=json"
// if there's issues then try out chrome

// curl is like fetch in the terminal or the command line

// get a book back and place it into local storage
// long-term: enter any of our books and have those books stay in local storage