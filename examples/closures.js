//Making a closure
// (A Function, with access to the context where it was created,
//  and a longer lifespan than said context)

var tweet = function (status){
	
	//I am a constructor
	
	return {
		// I have access to a variable (status) of
		// my parent function, but I'll live longer
		getStatus : function(){
			return status;
		}
	}
};

var myTweet = tweet("wow such code");


//Status is now private so it will be undefined
console.log("Try to get private status");
console.log(myTweet.status);

//The accessor will get us the real status
console.log("Try to get public status");
console.log(myTweet.getStatus());


//tweet is a constructor, so it has a named `prototype` property
console.log("tweet.prototype:");
console.log(tweet.prototype); // {}

//myTweet is not a constructor.
// You can't make children from it.
// It doesn't have 'prototype'
console.log("myTweet.prototype:");
console.log(myTweet.prototype); // undefined

//It's hidden proto link is __proto__
console.log("myTweet.__proto__");
console.log(myTweet.__proto__);
