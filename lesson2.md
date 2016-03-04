# Lesson 2

The best thing about JS is it's implementation of functions, which gets "almost everything right".

Functions are the fundamental modular unit of JS. They are used for code reuse, information hiding, and composition.

## Writing a function

Function objects are created with Function literals:

	function (a, b)
	{
		return a + b;
	}

Above is an anonymous function that adds together the parameters `a` and `b`. You can also give it a name. The only use of a name is that it allows the function to call itself and it allows you to identify it more easily in debugger tools.

	function add (a, b)
	{
		return a + b;
	}
	
We can also assign a function into a variable or property:

	var obj = {};
	obj.adder = function add (a, b)
	{
		return a + b;
	}
	

### Nesting functions

A function can appear anywhere an expression can appear, including inside another function. When you define a function inside a function, the inner one has access to it's own parameters and the parameters of the parent:

[child-function-parent-access.js](./examples/child-function-parent-access.js)

This leads to a few false friends; from outside a function, you can't reach in and change a variable, or call an inner function.


## Invoking a function

There are four ways a function can be invoked.

 1.	**Function invocation**  
	This is the basic call to a function from global scope.  
	The value of `this` will be the global object (a root object that contains all the global variables)
	
 2.	**Method invocation**  
	When the call involves a dot or indexes, then the function is being invoked as a method.  
	The value of `this` will be the parent object.
	
 3.	**Constructor invocation**
	You can call a function as a constructor using the `new` keyword. We'll come onto this in a minute.
	
 4.	**Apply invocation**
	There is a way of calling a function by name using the `apply` method and we're going to ignore this too.


Hopefully you can see that the value of `this` isn't decided until the point when a function is called. It is a very late binding.

## Functions are objects

Functions are objects, in that objects are collections of key-value pairs which have a hidden connection to a prototype. That means that Functions, like objects, can have properties and methods attached. It doesn't mean that the syntax is the same.

When we write an object literal, the braces block means "I'm going to give you a list of key-value pairs now". When we write a function literal, the braces block means "I'm going to give you a series of Expressions now". That's just the syntax difference.

We can prove that a Function is an object by assigning it properties and methods just like an Object would have.

[a-function-is-an-object.js](./examples/a-function-is-an-object.js)


## Prototypes

A 'prototype' is a template for objects to be made from. From MDN:

 > A prototype-based language, such as JavaScript, does not make the distinction between Class and Instance: it simply has objects. A prototype-based language has the notion of a prototypical object, an object used as a template from which to get the initial properties for a new object. Any object can specify its own properties, either when you create it or at run time. In addition, any object can be associated as the prototype for another object, allowing the second object to share the first object's properties.

Everything has a secret link to the prototype that made it. The secret link is kept in `__proto__`.[1][]

**Functions** have a named `prototype` property. It is the prototype of objects constructed *by that function*.

Objects produced from an object literal (that is, objects that you haven't specifically given an inheritance relationship) have a link to `Object.prototype`.

Function objects have a link to `Function.prototype`, which inherits from `Object.prototype`. This is the root of the Prototypal inheritance tree of JavaScript.

	Object.prototype
	        \
		  Function.prototype


[1]: http://stackoverflow.com/a/9959771


### Augmenting a type

You can add a feature to a prototype, even the prototypes of the basic types. In this example, we add a function to the prototype of Number:

[extending-types.js](./examples/extending-types.js)


## Constructors

JavaScript has a `new` keyword. This is a compromise to help classical object-oriented programmers feel comfortable.

Functions that are intended to be invoked by the `new` keyword are called constructors. By convention, we capitalise the names of these functions.

[prototype-with-new.js](./examples/prototype-with-new.js)

If you call a constructor without the `new` keyword, there will be no warning, and it will not do what you expect, and it will mess up variables in the global scope.

For that reason, you should avoid `new`. There is a better way!

## Closures

Closures let us hide information, making it private.

Let's make our tweet example, but this time, the `status` property will be private, accessible only through the `getStatus()` getter.

[closures.js](./examples/closures.js)

(Read top of page 38)


## Writing prototypally



