//Example fetch using DnD5eAPI - place subclasses in ul
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://www.dnd5eapi.co/api/spells/${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
       
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// get a specific spell back and put it into the DOM
// Make a request to the API
// Get the subclasses and put them in the <ul>

// class solution
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.subclasses)
        // data.subclasses.forEach( x => console.log(x.name) )
        data.subclasses.forEach( obj => {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
       } )
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// let's make sure we're getting data back (console.log)
// data we care about are the 'sub-classes' 'lore' and 'land'
// GETTING A 404 ERROR... typing spell name wrong? Just kidding, need a dash between words
// let's use forEach to iterate through our array
// x is going to be holding each object in the array
// we just want the name, we should get back only the lore and land
// changed x to obj because we know it's an object
// generating an li in the DOM with createElement
// we got two subclasses back, the forEach is going to run twice and each time it runs it's going to create an li, name it from the data in the object, and append it to the ul
// adding results dynamically into the DOM, so no hidden tags required since we don't know what we're displaying until we get our results



// solution explained...maybe

// // 01 evemt listener listening for a click on our button
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//     // 02 going to get spell out of input
//   const choice = document.querySelector('input').value
//   // 03 plug it into our url
//   const url = `https://www.dnd5eapi.co/api/spells/${choice}`

//   // 04 put it into our fetch request
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       // 05 we get two objects back
//       .then(data => {
//         console.log(data.subclasses)
//         // data.subclasses.forEach( x => console.log(x.name) )
//         // 06 created a forEach to affect each object
//         data.subclasses.forEach( obj => {
//             const li = document.createElement('li')
//             li.textContent = obj.name
//             document.querySelector('ul').appendChild(li)
//        } )
//        //07 forEach runs twice, creates a new li, adds a name property to that li, appends the li to the ul
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }