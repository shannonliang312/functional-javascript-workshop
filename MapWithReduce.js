module.exports = function arrayMap(arr, fn) {
  //SOLUTION GOES HERE
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }

  return res;
}

// module.exports = function arrayMap(arr, fn, thisArg) {
//   return arr.reduce(function (acc, item, index, arr) {
//     acc.push(fn.call(thisArg, item, index, arr))
//     return acc
//   }, [])
// }