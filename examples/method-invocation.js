//method-invocation.js
// Showing the scope of `this` 
// when using method invocation

var y = {};
y.x = function ()
{
	console.log(this);
}

y.x();