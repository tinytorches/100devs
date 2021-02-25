//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// https://pokeapi.co/api/v2/pokemon/ditto

// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         // console.log(data)
//         // console.log(data.types) // drilling deeper to the thing you want; easier in postman
//         // console.log(data.types[0])
//         console.log(data.types[0].type.name) // grab the first type property in the array, but grab the name in the other type object; drill deeper!
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }



// let's get 2 values at once

// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const poke1 = document.querySelector('#poke1').value
//   const poke2 = document.querySelector('#poke2').value

//   const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
//   const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.types[0].type.name)
//         pokeStore.push(data.types[0].type.name)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });

//       fetch(url2)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.types[0].type.name)
//         pokeStore.push(data.types[0].type.name)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// console.log(pokeStore[0], pokeStore[1])

// two urls and two fetches
// pokeStore array to save our 
// request running too fast
// we're trying to console.log information that we don't have yet hence 'undefined' (hoist, await, async, call stack, callback)


// second fetch is ONLY running because it's inside the first
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const poke1 = document.querySelector('#poke1').value
//   const poke2 = document.querySelector('#poke2').value

//   const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
//   const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2

//   let pokeStore = []
//   let pokeImg = []

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.types[0].type.name)
//         pokeStore.push(data.types[0].type.name)
//         pokeStore.push(data.sprites.front_shiny)

//         // callback; making url2 only run after the first one
//         fetch(url2)
//           .then(res => res.json()) // parse response as JSON
//           .then(data => {
//            console.log(data.types[0].type.name)
//            pokeStore.push(data.types[0].type.name)
//            pokeImg.push(data.sprites.front_shiny)
//            console.log(pokeStore[0], pokeStore[1])

//            // simple conditional
//            // if the first pokemon has a type of grass and a type of water, then we're adding "2x" to the h2
//            if (pokeStore[0] === "grass" && pokeStore[1] === "water") {
//              document.querySelector('#pokeImg1').src = pokeImg[0]
//              document.querySelector('#pokeImg2').src = pokeImg[1]
//              document.querySelector('h2').innerText = " 2x > "
//            }
//          })
//          .catch(err => {
//               console.log(`error ${err}`)
//          });

//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }



// Cleaning up our code after the break and reviewing it
// This isn't the best practice today, but I wanted you to see how bad it can get
// Removed console.logs and added spacing to clean it up
// Promise.all([fetch1, fetch2])
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value

  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2

  // arrays are more accessible if we want to expand 
  let pokeStore = [] // hold information for pokemon types
  let pokeImg = [] // hold information for pokemon images

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      
        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)

        // nested another fetch to make a second request
        fetch(url2)
          .then(res => res.json()) // parse response as JSON
          .then(data => {

           pokeStore.push(data.types[0].type.name)
           pokeImg.push(data.sprites.front_shiny)

           // simple conditional
           // if the first pokemon has a type of grass and a type of water, then we're adding "2x" to the h2
           if (pokeStore[0] === "grass" && pokeStore[1] === "water") {
             document.querySelector('#pokeImg1').src = pokeImg[0]
             document.querySelector('#pokeImg2').src = pokeImg[1]
             // grass is 2x effective against water
             document.querySelector('h2').innerText = " 2x > "
           }
         })
         .catch(err => {
              console.log(`error ${err}`)
         });

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}