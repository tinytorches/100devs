// board game parent class
// two children

// properties
// [x] name
// year
// score/rating
// players
// play time
// age
// weight
// designer
// artist
// publisher
// type
// category
// mechanisms
// reimplements
// [x] short descrition (method) 
// 


class BoardGames {
    constructor(name, minPlayer, maxPlayer, type) {
        this._name = name
        this._minPlayer = minPlayer
        this._maxPlayer = maxPlayer
        this._type = type 
    }

    get name() {
        return this._name
    }

    get minPlayer() {
        return this._minPlayer
    }

    get maxPlayer() {
        return this._maxPlayer
    }

    get type() {
        return this._type
    }

    shortDescription() {
        console.log(`${this._name} is a ${this._minPlayer} to ${this._maxPlayer} player ${this._type} game.`)
    }
}

console.log(BoardGames)