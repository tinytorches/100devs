document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value; // looks at the value typed by the user in the HTML input tag and storing it in the "day" variable
  // console.log(day); // DevTools test
  //Conditionals go here
  // still trying to get case-sensitivity to work though
  if (day === "tuesday" || day === "thursday") {
    console.log("There's class today.");
  } else if (day === "saturday" || day === "sunday") {
    console.log("It's the weekend!");
  } else {
    console.log("Boooooooring...");
  }
}
