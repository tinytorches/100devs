//Get a dog photo from the dog.ceo api and place the photo in the DOM
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

// practice typing out the syntax
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => { // what we get back is being passed into data, we're getting a different photo back
        // console.log(data)
        console.log(data.message) // adding .message will print only the message into our log
        document.querySelector('img').source = data.message // we only have one img in the html so we don't have to be specific
     })
    .catch(err => {
        console.log(`error ${err}`)
    });