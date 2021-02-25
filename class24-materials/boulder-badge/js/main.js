// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 
let rareCandyBulbasaur = 11
let rareCandyCaterpie = 6
let rarecandyWeedle = 6
let rareCandySun = rareCandyBulbasaur + rareCandyCaterpie + rarecandyWeedle

// CLASS SOLUTION
// let bulbasaurCandies = 11
// let caterpieCandies = 6
// let weedleCandies = 6

// let totalCandies = bulbasaurCandies + caterpieCandies + weedleCandies
// console.log(totalCandies)



//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
// function fahrenheitToCelsius(num) {
//     let result = (num - 32) * (5 / 9)
//     return result
// }

// function charmanderBattleOkay(num) {
//     if (fahrenheitToCelsius > 20) {
//         console.log('Charmander can battle!')
//     } else {
//         console.log('Sorry, but it\'s a little too chilly for Charmander.')
//     }
// }
// Need to debug so that the argument is registered for second function

// CLASS SOLUTION
function tempConvert(f) {
    return (f - 32) * 5 / 9
}
// console.log(tempConvert(212))

function canCharBattle(tempVal) {
    let temp = tempConvert(tempVal)
    if (temp > 0) {
        console.log('Char can battle')
    } else (
        console.log('Char can\'t battle')
    )
}



//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function underPokemonLeague(numOfPokemon) {
    for (let i = 0; i < numOfPokemon; i++) {
        console.log('Pikachi, I choose you!')
    }
}