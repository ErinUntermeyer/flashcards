const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it('should store a guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
  })

  it('should store a card', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('this is the users guess', card);
    expect(turn.card).to.equal(card);
  })

  it('should return a guess', function () {
    const turn = new Turn('object');
    expect(turn.returnGuess()).to.equal('object');
  })

  it('should return a card', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(card);
  })

  it('should evaluate the guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  })

  it('should give feedback based on guess evaluation', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);
    expect(turn1.giveFeedback()).to.equal("correct!");
    expect(turn2.giveFeedback()).to.equal("incorrect!");
  })

});