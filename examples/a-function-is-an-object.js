//A Function is an object

//Make a function
var greet = function(name){
	return 'Hello ' + name;
}

//Assign it a stupid property
greet.usefulness = 0.2;

//Assign it a method
greet.different = function(name)
{
	return 'Wassup ' + name;
}

//greet should now be a Function with a property and a method
console.log("Value of greet:")
console.log(greet);

//We can call greet
console.log(greet('Team'));

//We can call greet's method
console.log(greet.different('Village'));
