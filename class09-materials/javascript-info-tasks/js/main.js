// Tasks 01: Variables
// https://javascript.info/variables

// Working with variables
// 1. Declare two variables: admin and name.
let admin
let name
// 2. Assign the value "John" to name.
name = "John"
// 3. Copy the value from name to admin.
admin = name
// 4. Show the value of admin using alert (must output “John”).
alert(admin)

// Giving the right name
// 1. Create a variable with the name of our planet. How would you name such a variable?
let planet = "Earth"
// 2. Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentUser

// Uppercase const?
// Examine the following code:
// const birthday = '18.04.1982';
// const age = someCode(birthday);

// Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

// Would it be right to use upper case for birthday? For age? Or even for both?
// const BIRTHDAY = '18.04.1982'; // make uppercase?
// const AGE = someCode(BIRTHDAY); // make uppercase?
let answer = yesBIRTHDAY
let answer = noAGE



// Tasks 02: Functions
// https://javascript.info/function-basics

// Is "else" required?
let answer = noDifference

// Rewrite the function using '?'
// (conditon ? ifTrue : ifFalse)
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

// Rewrite the function using '||'
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Function min(a, b)
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b; 
    }
}

// Function pow(x, n)
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

  // last two problems were quite difficult



  // Tasks 03: Function expressions
  // N/A



  // Tasks 04: Arrow Functions
  // https://javascript.info/arrow-functions-basics

  // Rewrite with arrow functions
  // let func = (arg1, arg2, ...argN) => expression

  function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no()
  }

  ask(
      "Do you agree?",
      () => alert("You gareed."),
      () => alert("You canceled the execution.")
  )