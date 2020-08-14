"use strict";

// Need a deck of cards, an array seems like the right storage medium,
// Cards will be A-K
// Following tutorial https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

// let cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let cardTypes = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["spades", "clubs", "hearts", "diamonds"];
let deck = [];
let playerHand = [];
let dealerHand = [];
let dealerHandHid = [];
let playerValue = 0;
let dealerValue = 0;

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
        // Need to make this an array of [1, 11], but still working out how to handle the resulting math
        return (value = 11);
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

// Hand score calculation
function handValue(hand){
    let score = 0;
    for (let i = 0 ; i < hand.length ; i++) {
        score += hand[i].value
        // console.log(hand[i].value);
    }
    return score;
 }

// Main Game function
function playBlackjack() {
    console.log("Good luck, player!");
    console.log("=========================");
    console.log("");
    shuffleDeck(getDeck());
    drawCard(playerHand);
    drawCard(dealerHand);
    drawCard(playerHand);
    drawCard(dealerHand);
    playerValue = handValue(playerHand);
    dealerValue = handValue(dealerHand);
    displayHand(playerHand);
    displayHand(dealerHand, "initial");
    // At this point, we need to evaluate if the dealer has a blackjack and if so end the game accordingly
    evaluateScore(playerValue);
    // If not, then prompt the user for a hit
    while (true) {
        if (confirm("Hit 'OK' to hit, 'Cancel' to stand") === true) {
            hitMe(playerHand);
            continue;
        } else
            stay();
            break;
    }

}
// TODO: Hit me function

function hitMe(hand) {
    drawCard(hand);
    displayHand(hand);
    evaluateScore(handValue(hand))
}

function displayHand(hand, status) {
    let display = [];
    if (status === "initial") {
        for (let i = 1 ; i < hand.length ; i++) {
            display.push(hand[i].type);
        }
        display.unshift("?");
        return console.log("Dealer Hand: ", display);
    } else if (status === "final") {
        for (let i = 0 ; i < hand.length ; i++) {
            display.push(hand[i].type);
        }
        return console.log("Dealer Hand: ", display)
    } else
    for (let i = 0 ; i < hand.length ; i++) {
        display.push(hand[i].type);
    }
    return console.log("Player Hand: ", display);
}


// TODO: Stay function

function stay(){
    // Show the full dealer hand
    displayHand(dealerHand, "final")
    // Evaluate the current scores of both hands
    // If dealer > player and dealer < 17, dealer hits
}

// TODO: Logic for win/lose conditions (player blackjack, bust, dealer blackjack)

function evaluateScore(score){
    // Instead of using a score param, use a hand param, calc the length and conditionally set a win message for a 'blackjack'
    if (score === 21) {
        // Doesn't take into account the dealer score, will need more logic for that in the future.
        return console.log("Congrats, you've won!")
    } else if (score > 21) {
        return console.log("Drats, you've busted!")
    }
    return console.log("Make your next move.");
}

function playAgain() {
    // hard refresh browser to reload all resources and reset all values
    location.reload();
}

// TODO: Ace 1/11 array and resulting math calculations

