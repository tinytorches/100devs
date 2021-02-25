//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods
// function SkaterChracterGenerator(name, air, hangtime, ollie) {
//     this.name = skaterName
//     this.air = skaterAir
//     this.hangtime = skaterHangtime
//     this.ollie = skaterOllie
    
//     this.trickOne = function() {
//         console.log(`${this.trickOne} is easy`)
//     }

//     this.trickTwo = function() {
//         console.log(`Watch my ${this.trickTwo}`)
//     }

//     this.trickSpecial = function() {
//         console.log(`Prepare yourself. Here's my ${this.trickSpecial}`)
//     }
// }

// class solution
function TonyHawkProSkaterCharacter(chName, sponsor, specialTrick, stance) { // the actual properties the object is going to have
    this.characterName = chName
    this.sponsor = sponsor
    this.specialTrick = specialTrick
    this.stance = stance

    this.grind = function() { console.log('5050') }
    this.flip = function() { console.log('Kickflip Underflip') }
    this.taunt = function() { console.log('FIRST TRRRYYYY') }
}

let kareemCampbell = new TonyHawkProSkaterCharacter('Kareem', 'Element', 'Laserflip', 'Goofy')