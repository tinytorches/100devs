//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// how you listen for clicks
document.querySelector('#check').addEventListener('click', check)

// how to run instructions after hearing a click
function check() {

  // const day = document.querySelector('#day').value
  const day = document.querySelector('#day').value.toLowerCase() // toLowerCase to make to make user entries case insensitive

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
  }else{
    console.log("BORING")
  }

}

// document.querySelector() // DOM