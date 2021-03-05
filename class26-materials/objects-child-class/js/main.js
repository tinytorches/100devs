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


// reference material: https://boardgamegeek.com/
class BoardGame {
    constructor() {
        // properties
    }
    // method()
    
}