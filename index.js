module.exports.map = function(array, fn) {
  var mapVal = array;
  var rollAlong = function(array, n, fn) {
    if (n < array.length) {
      mapVal[n] = fn(array[n]);
      rollAlong(array, n+1, fn);
    }
  }
  rollAlong(array, 0, fn);
  return mapVal;
};

