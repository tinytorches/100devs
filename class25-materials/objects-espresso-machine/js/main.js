//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
// class EspressoMachine {
//     constructor(espressoMachineBrand,espressoMachineModel, espressoMachineColor, espressoMachine, espressoMachinePrice) {
//         this.brand = espressoMachineBrand
//         this.model = espressoMachineModel
//     }
// }

// CLASS SOLUTION
class EspressoMachine {
    constructor(color, make, model, price) {
        this.color = color
        this.make = make
        this.model = model
        this.price = price
    }
    start() {
        console.log('Starting to make espresso')
    }

    strop() {
        console.log('Turning off')
    }

    steam() {
        console.log('Building steam')
    }
}

let gaggia = new EspressoMachine('red', 'Gaggia', 'CLassic Pro', 400)