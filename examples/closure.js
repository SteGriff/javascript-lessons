var tweet = function (status){
	return {
		getStatus : function(){
			return status;
		}
	}
};

var myTweet = tweet("wow such code");

//A closure is not a prototype
console.log(tweet.prototype); // {}
console.log(myTweet.prototype); // undefined

//Status is now private so this will be undefined
console.log(myTweet.status);

//The accessor will get us the real status
console.log(myTweet.getStatus());
