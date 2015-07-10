'use strict';

import Card from './card';

var cardRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  , cardSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

function generateDeck() {
  var deck = [];
  cardSuits.forEach(function(suit) {
    cardRanks.forEach(function(rank, index) {
      deck.push(new Card(suit, rank, index));
    });
  });

  return deck;
}

export default generateDeck();
