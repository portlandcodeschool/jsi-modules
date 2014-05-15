var chai = require('chai');
var expect = chai.expect;
var _ = require('..');

describe('map()', function() {
  it('handles an empty array', function() {
    var result = _.map([], function(element) {
      element = element + 1;
    });
    expect(result).to.eql([]);
  });

  it('handles an array of length one', function() {
    var result = _.map([1], function(element) {
      return element + 1;
    });
    expect(result).to.eql([2]);
  });

  it('maps an array of strings', function() {
    var result = _.map(['orange', 'apple', 'banana'], function(element){
      return element + 's';
    });
    expect(result).to.eql(['oranges', 'apples', 'bananas']);
  });

  it('maps an array of numbers', function() {
    var result = _.map([10, 78, 1024], function(element){
      return element - 4;
    });
    expect(result).to.eql([6, 74, 1020]);
  });

  it('maps an array of objects', function() {
    var result = _.map([{name: 'Adam'}, {name: 'Whitney'}], function(element){
      element.name = 'Foo';
      return element;
    });
    expect(result).to.eql([{name: 'Foo'}, {name: 'Foo'}]);
  });

});
