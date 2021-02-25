// Coding Challenge
// 14 January 2021

// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 

let hobbits = ['Frodo', 'Sam', 'Pippin'] // names list mentioned at the end of the challenge

// function list(name) { // name parameter is intended to take a string
//     // add 'name' to a list
//     let pushName = nameQueue.push(name)
//     let positionName = nameQueue.indexOf(name)
//     console.log(`${pushName} is position ${positionName} on the list.`)
//     // let them know their position on the list (array?)
// }
// // list('John')
// console.log(nameQueue)

// // forEach for name and position?

// nameQueue.forEach(function(item, index) {
//     nameQueue.push(item)
//     console.log(index, item)
// })



// bring it backk to the basics
function shireHobbits(name) {
    hobbits.push(name)
    let positionName = hobbits.indexOf(name)
    alert(`${name} is position ${positionName} on the list`)
}
shireHobbits('Merry')
// shireHobbits('Bilbo')



// function list(name) { // name parameter is intended to take a string
//     // add 'name' to a list
//     hobbits.push(name);
//     let positionName = hobbits.indexOf(name);
//     console.log(`${name} is position ${positionName} on the list.`);
//     // let them know their position on the list (array?)
// }

// list("Merry");


// // Steve Griffith explanation
// // https://www.youtube.com/watch?v=159EAISAxwg

// let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Fili', 'Kili', 'Oin', 'Gloin', 'Thorin', 'Balin', 'Dwalin', 'Nori', 'Dori']

// // dwarves.forEach(output)

// // function output(item, index, array) {
// //     console.log(index, item)
// // } 

// dwarves.forEach(function(item, index, array) {
//     console.log(index, item)
// })

