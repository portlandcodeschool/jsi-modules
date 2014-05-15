var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');




//-------------------
var nums = [1,2,3];

var squareNums = function(n) {
    return n * n;
  };

//----------------

var word = ['dog', 'cat'];

var pluralize = function(word) {
    return word + 's';
 }
 //map(['dog','cat'], pluralize);
 


//----------------



describe('map(array, squareNums())', function() {
	it('takes an array of numbers and squares those numbers', function() {
		expect(map(nums, squareNums)).to.eql([1,4,9]);
	});
	
    
    it('it takes an array of strings and adds an s to the end', function() {
		expect(_.map).to.not.be.null;
	});

});

describe('map(array, squareNums())', function() {
	it('it takes an array of strings and adds an s to the end', function() {
		expect(map(word, pluralize).to.eql(['dogs', 'cats']);
	});
});