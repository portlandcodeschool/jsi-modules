module.exports.map = function(array, fn) {
	var updateArray = function(array, fn, n) {
		if(n < array.length) {
			array[n] = fn(array[n]);
			n = n + 1;
			updateArray(array, fn, n);
		}
	};
	updateArray(array, fn, 0);
	return array;
};
