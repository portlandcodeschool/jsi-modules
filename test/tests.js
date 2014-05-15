var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

var names = ['bob', 'bill', 'bryan'];
var pluralize = function(name) {
	return name + 's';
};

describe('map()', function() {
	it('pluralizes an array of person names', function() {
		expect(_.map(names, pluralize)).to.eql(['bobs', 'bills', 'bryans']);
	});
});
