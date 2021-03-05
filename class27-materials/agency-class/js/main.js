// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }

    // getters
    get name() {
        return this._name
    }

    get role() {
        return this._role
    }

    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at #100Devs`)
    }
}

// have developer with with front and back extending from it instead
class Front extends Contractor {
    constructor(name, role, tech) {
        super(name, role)
        this._tech = tech
    }

    get tech() {
        return this._tech
    }

    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at 100Devs and I use ${this._tech}`)
    }
}

class Back extends Contractor {
    constructor(name, role, tech) {
        super(name, role)
        this._tech = tech
    }

    get tech() {
        return this._tech
    }

    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at 100Devs and I use ${this._tech}`)
    }
}

let bob = new Contractor('Bob', 'Front-end')
let simba = new Front('Simba', 'Front-end', 'React')
let machi = new Back('The Machine', 'Back-end', 'Node')

// we're typing sayHello() a lot
let agency = [bob, simba, machi]

for (person of agency) {
    // every person has a sayHello() interface (method in this case)
    person.sayHello()
}
// code just works because of poly-

// parent class
// extend it
// talk through oop