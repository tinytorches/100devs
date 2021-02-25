//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// https://www.thecocktaildb.com/api.php

document.querySelector('button').addEventListener('click', getDrink) // smurfs return!

// placing our fetch request in an api should prevent it from starting automagically
function getDrink() {
    // let's get the value out of our input in the html
    let inputVal = document.querySelector('input').value

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + inputVal // concatonate the url with what the user types in the DOM; this concatentation is getting pasted into our fetch(url)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            // console.log(data.drinks) // starting to drill in to be more specific with the data we log

            // console.log(data.drinks[0]) // getting the first object out of the array in the api

            // console.log(data.drinks[0].strDrink)
            // console.log(data.drinks[0].strDrinkThumb)
            // console.log(data.drinks[0].strDrinkInstructions)

            let drinkName = data.drinks[0].strDrink
            let drinkThumb = data.drinks[0].strDrinkThumb
            let drinkInst = data.drinks[0].strDrinkInstructions

            document.querySelector('h2').innerText = drinkName
            document.querySelector('img').src = drinkThumb
            document.querySelector('h3').innerText = drinkInst
        })
        .catch(err => {
            console.log(`error ${err}`)
     })
}


// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'


// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
