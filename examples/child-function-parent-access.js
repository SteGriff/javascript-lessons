//child-function-parent-access.js
//A child function can access parent variables

var automobile = function()
{
	//Automobile sets a variable
	var motorized = true;
	
	var go = function()
	{
		//We define another function inside
		// automobile and it can see `motorized`
		if (motorized)
		{
			console.log("GOOoo!");
		}
		
		//Inside go(), the value of `this` is the global root
		// becauase we will always invoke it using the Function invocation pattern
		//console.log(this);
	}
	
	go();
}

console.log(automobile);
automobile();

//This is a false friend
//it can't reach in and change the defined value
automobile.motorized = false;
automobile();

//You can't do this either
automobile.go();
