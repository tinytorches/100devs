// card api site: https://deckofcardsapi.com/
// card api shuffle: https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// card api draw: https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

// war: draw cards according to players, whoever has the greater card keeps the drawn cards

// 1. Get the deck id
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    deckID = //
  })
  
  .catch(err => {
    console.log(`error ${err}`)
  });


