"use strict";

// Need a deck of cards, an array seems like the right storage medium,
// Cards will be A-K
// Following tutorial https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

let cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["spades", "clubs", "hearts", "diamonds"];

function getDeck() {
    let deck = [];
    for (let i = 0 ; i < suits.length ; i++) {
        for(let x = 0 ; x < cardValues.length ; x++) {
            let card = {
                value: cardValues[x],
                suit: suits[i]
            };
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (var i = 0 ; i < 1000 ; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let placeholder = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = placeholder;
    }
    return deck;
}