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

});