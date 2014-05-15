
module.exports.map = function(array, fn) {
	var newArray = [];

	var continueIterating = function(array, n, fn) {
	if (n < array.length) {
	  newArray[n] = fn(array[n]);
	  continueIterating(array, n+1, fn);
	}
	};
	continueIterating(array, 0, fn);
	
	return newArray;
};



// module.exports.each = function(array, fn) {
//   var continueIterating = function(array, n, fn) {
//     if (n < array.length) {
//       fn(array[n]);
//       continueIterating(array, n+1, fn);
//     }
//   };
//   continueIterating(array, 0, fn);
// };

	