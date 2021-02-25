//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
// function StreetFighter() {
//     this.name = fighterName
//     this.species = fighterSpecies
//     this.birthPlace = fighterBirthPlace
//     this.fightingStyle = fighterStyle
    
//     this.moveset = function() {
//         console.log()
//     }

//     this.likes = function() {

//     }
// }

// class solution
function MakeSFCharacter(punch, kick, block, specialMove) {
    this.punch = punch // don't get tripped up when the property name has the same name as the parameter
    this.kick = kick
    this.block = block
    this.specialMove = specialMove

    this.taunt = function() {
        console.log(`You can't handle my ${this.specialMove}`) // grabbing the specialMove from the this. particulat object
    }

    this.runAway = function() {
        console.log('You can\'t catch me')
    }

    this.roll = function() {
        console.log('Rolled right past you!')
    }
}

let ryu = new MakeSFCharacter('low', 'high', true, 'Hadouken')

let chunLi = new MakeSFCharacter('high', 'high', true, 'Hyakuretsukyaku')

// MakeSFCharacter.prototype.jump = true
MakeSFCharacter.prototype.jump = function() {console.log('Weeeeeeeeeeeeeeee')}