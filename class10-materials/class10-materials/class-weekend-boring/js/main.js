//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()
  // toLowerCase() built into JS
  // lets us use upper-  or lowercase letters
  // Takes every single letter to lowercase to make our statement true

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
  }else if( day === "saturday" || day == "sunday"){
    console.log("Its The Weekend")
  }else{
    console.log("BORING")
  }

}
