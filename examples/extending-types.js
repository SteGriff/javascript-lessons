//extending-types.js
//Extending the basic types

var positiveNumber = 3.1415;
var negativeNumber = -2.449;

// We can add a method to Number to get integers
Number.prototype.integer = function(){
	return Math[this < 0 ? 'ceil' : 'floor'](this);
}

console.log(positiveNumber.integer());
console.log(negativeNumber.integer());
