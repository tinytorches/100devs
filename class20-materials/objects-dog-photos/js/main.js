//Get a dog photo from the dog.ceo api and place the photo in the DOM
// document.querySelector('img').addEventListener('click', dogGenerator)

// function dogGenerator() {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }

// class solution
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    //   console.log(data)
    console.log(data.message)

      document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


