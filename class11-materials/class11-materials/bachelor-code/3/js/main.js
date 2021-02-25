// adding a smurf to every element that has a class of 'contestant' 
// Easier than doing it one-by-one with IDs
const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}

// forgot the '.contestants' at the end of const contestants