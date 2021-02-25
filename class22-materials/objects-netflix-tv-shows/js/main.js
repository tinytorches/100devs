//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

// class solution
class MakeNetflixShow {
    constructor(title, genre, rating, numOfEp) {
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEp = numOfEp
    }
    // method 1
    addToList() {
        console.log('Added to list')
    }
    // method 2
    play() {
        console.log('Show starting')
    }
    // method 3
    stop() {
        console.log('Show stopping')
    }
}

let areYouAfraidOfTheDark = new MakeNetflixShow('Are You Afraid of the Dark', 'horror', 4.5, 94)