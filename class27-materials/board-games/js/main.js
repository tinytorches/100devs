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
// mechanisms
    // array of categories
// children classes based on categories?
// p: rpg, c: dungeon crawler, pen & paper
// genres:
    // deck-building
    // area control
    // cooperative
    // worker placement
    // roll-and-move
    // legacy
    // rpg:
        // dunegon crawler
    // eurogame (German-style)
    // social deduction (hidden traitor[boolean])
    // abstract strategy
    // educational
    // war games/wargaming
    // technology-enhanced

    // https://gamecows.com/types-of-board-games/



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

class Cooperative extends BoardGames {
    constructor(name, minPlayer, maxPlayer, type, hiddenTraitor) {
    super(name, minPlayer, maxPlayer, type)
    this._hiddenTraitor = hiddenTraitor
    }

    get hiddenTraitor() {
        return this.hiddenTraitor
    }

    shortDescription() {
        super.shortDescription()        
    }
}

class Card extends BoardGames {
    constructor(name, minPlayer, maxPlayer, type, cardCount) {
        super(name, minPlayer, maxPlayer, type, cardCount)
        this._cardCount = cardCount
        }

        shortDescription() {
            super.shortDescription()
        }
}


 let gloomhaven = new BoardGames('Gloomhaven', 1, 4, 'Dungeon Crawler')
 let pandemic = new Cooperative('Pandemic', 2, 4, 'strategy', false)
 let hardback = new Card('Hardback', 1, 5, 'Family', 190)

 const collection = [gloomhaven, pandemic, hardback]

 for (let game of collection) {
     game.shortDescription()
 }