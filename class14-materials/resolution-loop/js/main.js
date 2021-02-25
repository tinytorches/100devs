//Create a function that has a loop that prints your resolution 365 times to the console and then call that function

document.querySelector('h1').addEventListener('click', travoltaResolution)

function travoltaResolution() {
    let res = document.querySelector('#resolution').value // resolution is in the html with an id already
    for (let i = 0; i < 365; i++) {
        // console.log(res) // for the regular problem, not the bonus
        document.querySelector('#letsGo').innerText += ` ${res} `
    }
}
//Bonus can you make it print your resolution 365 times to the DOM?
