var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

var names3 = ['bob', 'bill', 'bryan'];
var names4 = ['bob', 'bill', 'bryan', 'biff', 'bailey'];
var pluralize = function(name) {
	return name + 's';
};

describe('map()', function() {
	it('pluralizes an array of three person names', function() {
		expect(_.map(names3, pluralize)).to.eql(['bobs', 'bills', 'bryans']);
	});
	it('pluralizes an array of four person names', function() {
		expect(_.map(names4, pluralize)).to.eql(['bobs', 'bills', 'bryans', 'biffs', 'baileys']);
	})
});
