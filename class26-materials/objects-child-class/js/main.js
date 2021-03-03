//Create an a class and extend it - Can be anything you would like it to be! 

// ideas
// alcohol
// vehicles
// buildings
// board games
// video games
// collectables
// books

// parent class
class Alcohol {
    constructor(type, abv, from, availability) {
        this.type = type
        this.abv = abv
        this.from = from
        this.availability = availability
    }
}
// child class
// class Beer extends Alcohol {
//     constructor(type, abv, from, availability) {
//         super(style)
//     }
// }
// why use super over another this


// CLASS EXAMPLE
class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    } 
}

let simba = new Dog('Simba', 'Sheperd')

// if the original example was confusing because of super
class Animal{
    constructor(name){
        this.name = name
        this.age = age
        this.farmName = farmName
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name, age, farmName) // we trade three lines of code for one
        this.breed = breed
    } 
}

let simba = new Dog('Simba', 'Sheperd')