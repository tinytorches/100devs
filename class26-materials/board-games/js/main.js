// in-class work
// We know we have a bunch of new animals coming to our farm
// We want to keep track of all of them.
// We want to make sure they all have a name because it's a loving farm and we want to know what kind of sound they make.

class Animal {
    constructor(name) {
        this._name = name
    }
    // our getter; just going to get this._name
    get name() {
        return this._name
    }
    speak() {
        console.log(`${this._name} makes a sound`)
    }
}

// left off here
// class Dog extends Animal

class Cat extends Animal {
    constructor(name, breed) {
        super(name)
        this._breed = breed
    }
    get breed() {
        return this._breed
    }
    speak() {
        super.speak()
        console.log(`${this.name} meows`)
    }
}
// didn't that feel weird? repetition?
// if everything has a breed, then we should put it on the animal class
// domestic animal and wild animal classes
// it's also a way of thinking or organizing your code, not necessarily how to use the language

let simba = new Animal('Simba')