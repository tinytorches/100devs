//Create a stopwatch object that has four properties and three methods

// literal notation
let stopwatch = {}    

// adding properties and methods with dot notation
// properties
stopwatch.color = 'black'
stopwatch.brand = 'nike'
stopwatch.shape = 'round'
stopwatch.size = 'large'

// methods
stopwatch.start = function() {console.log('STARTING')}
stopwatch.stop = function() {console.log('STOPPING')}
stopwatch.sayBrand = function() {alert(stopwatch.brand)}

// EVERYTHING IN JAVASCRIPT IS AN OBJECT