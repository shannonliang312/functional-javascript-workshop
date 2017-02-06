function duckCount() {
  // SOLUTION GOES HERE
  var arr = Array.prototype.slice.call(arguments);

  return arr.reduce(function(num, obj){
    if(Object.prototype.hasOwnProperty.call(obj, 'quack')) {
      num += 1;
    }
    return num;
  }, 0);
}

module.exports = duckCount