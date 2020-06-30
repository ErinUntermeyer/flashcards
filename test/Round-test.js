const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function () {
  let card1, card2, card3, deck, round;
  beforeEach(function() {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function () {
    expect(round).to.be.an.instanceOf(Round);
  })

  it('should store a deck', function () {
    expect(round.deck).to.equal(deck.cards);
  })

  it('should store the number of turns taken', function () {
    expect(round.turns).to.equal(0);
    round.takeTurn("object");
    expect(round.turns).to.equal(1);
    round.takeTurn("array");
    round.takeTurn("function");
    expect(round.turns).to.equal(3);
  })

  it('should store incorrect guesses in an array via id', function () {
    round.takeTurn("object");
    round.takeTurn("function");
    round.takeTurn("accessor method");
    expect(round.incorrectGuesses).to.deep.equal([2, 3]);
  })

  it('should return the current card', function () {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  })

  it('should create new Turn instance when guess is made', function () {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
    round.takeTurn("function");
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  })

  it('should give feedback', function () {
    expect(round.takeTurn("object")).to.equal("correct!");
    expect(round.takeTurn("object")).to.equal("incorrect!");
  })

  it('should calculate percent of correct answers', function () {
    round.takeTurn("object");
    round.takeTurn("object");
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn("object");
    expect(round.calculatePercentCorrect()).to.equal(33);
  })


});