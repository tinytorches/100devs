//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// push... what if the cocktail has a space in the name?

//  https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita


// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

// // const inputValue = 

// fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)

//       let drinkName = data.strDrink
//       let drinkImg = data.strDrinkThumb
//       let drinkInstructions = data.strInstructions

//       document.querySelector('h2').value

    
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });



// class solution

// lets trigger the function on a button press
// 1. We need our smurfs
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    // 2. Give the user a chance to search
    let drinkChoice = document.querySelector('input').value

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkChoice // 3. adding the user's search input
    
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        //   console.log(data)
        // 4. Grabbing the first object in the array of search results
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}



