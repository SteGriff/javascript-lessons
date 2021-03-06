//closures.js
// Making a closure
// (A Function, with access to the
//  context where it was created,
//  and a longer lifespan
//  than said context)

//This allows us to create privacy

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
