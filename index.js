module.exports.map = function(array, fn) {
	return [fn(array[0]), fn(array[1]), fn(array[2])];
};
