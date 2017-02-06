/* Partial application allows you to create new functions from existing functions, while fixing some number of arguments. After setting the arguments t
o be partially applied, you get a new function ready to take the rest of the arguments and perhaps execute the original function.

More formally: Partial application refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.

As an example, say we have a function add, that takes 2 arguments and adds them together:


    function add(x, y) {
      return x + y
    }

    add(10, 20) // => 30

Now, pretend we have a function partiallyApply. partiallyApply takes a function, and some arguments to 'partially apply'.

Here we 'partially apply' the first parameter, x, of our add function:


    var addTen = partiallyApply(add, 10) // fix `x` to 10

addTen is a new function that takes the y parameter of add. add has not yet been called!

Once we pass the argument for y, we can execute the original add function:
addTen(20) // => 30
    addTen(100) // => 110
    addTen(0) // => 10

    // etc

All of the above examples are same as calling add(10, y), where y was supplied in the call to the appropriately named addTen.
 */
var slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
  return function() {
    var arr = Array.prototype.slice.call(arguments);

    console.log(namespace + " " + arr.reduce(function(a, b){
      return a + " " + b;
    }));
  }
}

module.exports = logger