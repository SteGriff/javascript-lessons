//Create a Tweet type

var Tweet = function(string){
	this.status = string;
}

//Create a tweet instance
var myTweet = new Tweet('Writing some JavaScript');

//Add a method to the prototype
// this method is given to all instances of Tweet
// past, present and future

Tweet.prototype.getStatus = function(){
	return this.status;
}

//Get the status and print it
console.log(myTweet.getStatus());