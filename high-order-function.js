/* A higher-order function is a function that does at least one of the following:

  * Take one or more functions as an input
  * Output a function

All other functions are first order functions. [1]

Unlike many other languages with imperative features, JavaScript allows you to utilize higher-order functions because it has "first-class functions"
. This means functions can be treated just like any other value in JavaScript: just like Strings or Numbers, Function values can be stored as variab
les, properties on objects or passed to other functions as arguments. Function values are actually Objects (inheriting from Function.prototype) so y
ou can even add properties and store values on them, just like any regular Object.

The key difference between Functions and other value types in JavaScript is the call syntax: if a reference to a function is followed by parenthesis
 and some optional comma-separated values: someFunctionValue(arg1, arg2, etc), then the function body will be executed with the supplied arguments (
if any).

In this exercise we're going to demonstrate that functions can be passed as values by passing you a function as an argument. */

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for(var i = 0; i <= num; i++) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat