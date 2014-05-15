var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

var twoTimes = function(n) {
	return n * 2;
}

var pluralize = function(wurd) {
	return wurd + "s";
}

describe('_.map()', function() {
	it('fails a test', function() {
		expect(_.map(1)).to.eql(0);
	});

	it('returns the same array I send it', function () {
		expect(_.map([1,2], twoTimes)).to.eql([1,2])
	});

	it('performs a function that I pass to it', function () {
		expect(_.map(1, twoTimes)).to.eql(2);
	});

	it('converts an array of [1, 2] to [2, 4] ' +
		'when provided the function {*2}', function () {
		expect(_.map([1,2], twoTimes)).to.eql([2,4]);
	}

	);

	it
})
