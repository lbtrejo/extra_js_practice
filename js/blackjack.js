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
let playerValue = 0;
let dealerValue = 0;
let playerBusted = false;
let dealerBusted = false;
let winner = false;

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
    } else if (card.type === "K" || card.type === "Q" || card.type === "J") {
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
        if (playerBusted === true) {
            console.log("Game over!");
            let again = confirm("Play again?");
            if (again === true) {
                return playAgain();
            } else {
                return console.log("Thanks for playing!");
            }
        }
        if (winner === true) {
            stay();
            let again = confirm("Play again?");
            if (again === true) {
                playAgain();
            }
            return console.log("Thanks for playing!");
        }
        if (confirm("Hit 'OK' to hit, 'Cancel' to stand") === true) {
            hitMe(playerHand);
            console.log("=========================");
            continue;
        } else
            stay();
            break;
    }

}
// TODO: Hit me function

function hitMe(hand, owner) {
    // console.log("Owner type", typeof owner);
    if (typeof owner === "string") {
        console.log("Dealer hits.");
        console.log("=========================");
    } else {
        console.log("Player hits.");
        console.log("=========================");
    }
    drawCard(hand);
    displayHand(hand, owner);
    evaluateScore(handValue(hand));
    // This doesn't work because I'm not recalculating the hand values after the draw
//     if (typeof owner === "string") {
//         console.log("Dealer Score: ", dealerValue);
//     } else {
//         console.log("Player Score: ", playerValue);
//     }
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

function stay() {
    // calculate updated hand values (  TODO: possibly function this to make it cleaner)
    playerValue = handValue(playerHand);
    dealerValue = handValue(dealerHand);
    // Show the full dealer hand
    console.log("Player stays.");
    console.log("=========================");
    console.log("");
    displayHand(dealerHand, "final")
    console.log("Player Score: ", playerValue);
    console.log("Dealer Score: ", dealerValue);
    console.log("=========================");
    // Evaluate the current scores of both hands
    // If dealer > player and dealer < 17, dealer hits
    while (dealerValue < 17) {
        hitMe(dealerHand, "final");
        dealerValue = handValue(dealerHand);
    }
    playerValue = handValue(playerHand);
    console.log("Player Score: ", playerValue);
    console.log("Dealer Score: ", dealerValue);
    if (dealerValue >= 17) {
        console.log("Dealer stays.");
        console.log("=========================")
    }
    if (dealerValue > 21) {
        console.log("Dealer busts.");
        console.log("Player wins. " + String.fromCodePoint(0x1F3C6));
        console.log("=========================");
        let again = confirm("Play again?");
        if (again === true) {
            playAgain();
        }
    }
    if (dealerValue > playerValue) {
        console.log("Dealer wins.");
        console.log("=========================");
        let again = confirm("Play again?");
        if (again === true) {
            playAgain();
        }
    }
    if (playerValue > dealerValue) {
        console.log("Player wins. " + String.fromCodePoint(0x1F3C6));
        console.log("=========================");
        let again = confirm("Play again?");
        if (again === true) {
            playAgain();
        }
    }
}

// TODO: Logic for win/lose conditions (player blackjack, bust, dealer blackjack)

function evaluateScore(score){
    // Instead of using a score param, use a hand param, calc the length and conditionally set a win message for a 'blackjack'
    if (score === 21) {
        // Doesn't take into account the dealer score, will need more logic for that in the future.
        return (winner = true);
    } else if (score > 21) {
        console.log("Drats, you've busted!")
        return (playerBusted = true);
    }
    return console.log("Make your next move.");
}

function playAgain() {
    // hard refresh browser to reload all resources and reset all values
    location.reload();
}

// TODO: Ace 1/11 array and resulting math calculations

let play = document.getElementById('play');
play.addEventListener('click', playBlackjack);