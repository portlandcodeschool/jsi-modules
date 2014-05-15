module.exports.map = function(array, fn) {
	//pseudo: receives array.
	//pseudo: iterates through array.
	var continueIterating = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      continueIterating(array, n+1, fn);
    }
  };
  continueIterating(array, 0, fn);
	//pseudo: performs function received on each iteration

	//pseudo: assigns the value from the function performed into the prev array
}
