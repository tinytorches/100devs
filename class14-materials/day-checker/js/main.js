//Create a conditonal that checks the day
//If Tuesday or Thursday, tell them they have class
// if (day === 'tuesday' || 'thursday') {
//     console.log('You have class!')
// //If Saturday, tell them they have Office Hours
//     } else if (day === 'saturday') {
//     console.log('There\'s office hours today!')
// //If Friday and House Turing, they have private office hours
//     } else if (day === 'friday' && house === 'turing') {
//         console.log('House Turing has private office hours today!')
// //If Wednesday and House Hopper, tell them they have private office hours    
//     } else if (day === 'wednesday' && house === 'hopper') {
//         console.log('House Hopper has private office hours today!')
// //If Monday and House Hamilton, tell them to book a 1on1    
//     } else if (day === 'monday' && house === 'hamilton') {
//         console.log('Book a 1-on-1 House Hamilton!')
// //If any other day or wrong house, tell them to study    
//     } else {
//         console.log('Study today!')
//     }
// forgot there was the html to utilize

// class solution
document.querySelector('h1').addEventListener('click', dayCheck)

function dayCheck() {
    const whatDay = document.querySelector('#whatDay').value.toLowerCase()
    const whatHouse = document.querySelector('#whatHouse').value.toLowerCase()
    console.log(whatDay, whatHouse) // checking to see if it works
    //Create a conditonal that checks the day
    //If Tuesday or Thursday, tell them they have class
    if (whatDay === 'tuesday' || whatDay === 'thursday') {
        console.log('We have class') 
    //If Saturday, tell them they have Office Hours    
    } else if (whatDay === 'saturday') {
        console.log('We have office hours')
    //If Friday and House Turing, they have private office hours    
    } else if (whatDay === 'friday' && whatHouse === 'turing') {
        console.log('We have private office hours')
    //If Wednesday and House Hopper, tell them they have private office hours
    } else if (whatDay === 'wednesday' && whatDay === 'hopper') {
        console.log('We have private office hours for hopper')
     //If Monday and House Hamilton, tell them to book a 1on1
    } else if (whatDay === 'monday' && whatHouse === 'hamilton') {
        console.log('Book a one-on-one')
    //If any other day or wrong house, tell them to study
    } else {
        console.log('STUDY!')
    }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
