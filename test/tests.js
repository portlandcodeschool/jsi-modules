var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

var twoTimes = function(n) {
	return n * 2;
};

var pluralize = function(wurd) {
	return wurd + "s";
};

describe('_.map()', function() {

	it('converts an array of [1, 2] to [2, 4] ' +
		'when provided the function {*2}', function () {
		expect(_.map([1,2], twoTimes)).to.eql([2,4]);
	}

	);

	it('converts ["pod", "pond", "rattle", "snake"] to ' +
		'["pods", "ponds", "rattles", "snakes"] when provided ' +
		'the function {add an s}', function() {
			expect(_.map(["pod", "pond", "rattle", "snake"], pluralize)).to.
			eql(["pods", "ponds", "rattles", "snakes"]);
		});
});
