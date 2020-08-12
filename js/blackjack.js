"use strict";

// Need a deck of cards, an array seems like the right storage medium,
// Cards will be A-K
// Following tutorial https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

// let cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let cardTypes = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["spades", "clubs", "hearts", "diamonds"];
let deck = [];
let playerHand = [];
let dealerHandVis = [];
let dealerHandHid = [];

function getDeck() {
    for (let i = 0 ; i < suits.length ; i++) {
        for(let x = 0 ; x < cardTypes.length ; x++) {
            let card = {
                suit: suits[i],
                type: cardTypes[x],
            };
            card.value = determineValue(card);
            deck.push(card);
        }
    }
    return deck;
}

function determineValue(card) {
    let value = 0;
    if (card.type === "A") {
        return (value = [1, 11]);
    } else if (card.type === "K" || card.type === "Q" || card.type === "J" || card.type === "10" ) {
        return (value = 10);
    } else
        return (value = parseInt(card.type));
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

function drawCard(hand) {
    // probably need some logic to see if the deck is empty later on
    let location = Math.floor((Math.random() * deck.length));
    hand.push(deck[location]);
    deck.splice(deck[location], 1);
    return hand;
}

// TODO: Hand calculation
// TODO: Deal function
// TODO: Hit me function
// TODO: Stay function


shuffleDeck(getDeck());