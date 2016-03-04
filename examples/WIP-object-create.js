//object-create.js
// WIP - not ready yet

Object.create = function(o)
{
	var F = function(){};
	F.prototype = o;
	return new F();
}

Object.create(myTweet);