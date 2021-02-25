//Create a mouse object that has four properties and three methods
// let mouse = {}

// mouse.name = 'mickey'
// mouse.color = 'white'
// mouse.ears = 2
// mouse.tail = 1

// incorrect solution to assigning functions... oops
// mouse.chew()
// mouse.cook()
// mouse.sleep()

// class solution
let mouse = {} // declaring an object first, since we don't always know what properties it will have
// let mouse = {'brand': 'logitech', 'ergo': true, 'model': 'mx ergo'} // could place these in different lines for readability

mouse.brand = 'logitech'
mouse.ergo = true
mouse.model = 'mx ergo'
mouse.trackball = 'true'

mouse.leftClick = function() {
    console.log('click left')
}

mouse.rightrClick = function() {
    console.log('click right')
}

mouse.scrollWheel = function() {
    console.log('jump')
}