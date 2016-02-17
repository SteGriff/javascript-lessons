# JavaScript Lesson 1

To improve JavaScript knowledge in Village Software

Ste Griffiths and Dom Bisset

2016

## Overview

We will use the book "JavaScript: The Good Parts" as a source and structure.

## This lesson

We can compress chapters 1 and 2 and then focus on 3 for this lesson.

## Chapter 1

**Read highlighted notes**

P. 2 "Why JavaScript?" sec 2

 > JavaScript is most despised because it isn't *some other language* ...
 
P. 3

 > JavaScript is a loosely-typed language...  
 > JavaScript has a class-free object system...
 
P. 4

 > Why should I use JavaScript?
 > A. You don't have a choice,
 > B. despite it's deficiencies, JS is really good

 
## Chapter 2 (Grammar)

 * Whitespace is optional in the same ways it is in C# but it's nice to include it for our sanity
 * Semicolons are optional in JavaScript but it's nice to include them for our sanity
 
### Names

A **valid name** in JavaScript is a letter, optionally followed by one or more letters, digits, or underscores. It cannot be one of the reserved words.

	abstract
	boolean break byte
	case catch char class const continue
	debugger default delete do double
	else enum export extends
	false final finally float for function
	goto
	if implements import in instanceof int interface
	long
	native new null
	package private protected public
	return
	short static super switch synchronized
	this throw throws transient true try typeof
	var volatile void
	while with
	
### Numbers

In C# we have single, double, float, decimal, byte...

Quiz: How many number types do you think there are in JS?

The answer is **one** and its name is `number`. It is a 64-bit floating point value, like a `double`. This means that it sucks at storing tenths, such that:

	> 0.1 + 0.2
	0.30000000000000004

This means that it's a good idea to use whole numbers when doing arithmetic, and then convert to a decimal only when you want to display results.

You can specify number literals as exponents if you want:

	> var x = 100
	> var y = 1e2
	> x + y
	200
	> x === y
	true
	> typeof y
	'number'
	
In that sample, I used the 'exact equality operators' to compare `x` and `y`. For those not familiar with loosely-typed languages:

	=== true if VALUE AND TYPE are the same
	!== true if either value or type are different
	== true if values are the "same" using type coersion but it works badly
	!= true if values are not similar

The latter two are considered the "evil twins" and the book recommends that you avoid them altogether! Perhaps a balanced approach is to use the exact equality operators (`===` and `!==`) always, unless you have a **reason** to use the others.

#### NaN is very special

`NaN` is the result of an operation that cannot produce a normal result. It is not equal to any value, *including itself*. Its type is 'number' because it basically represents 'the abnormal number', and it wouldn't be useful if a mathematical operation which produced an abnormal result produced data whose type was not 'number'.

	> 5 * ['1', '2']
	NaN
	> + 'hello'
	NaN
	> NaN === NaN
	false
	> NaN == NaN
	false

NaN is corruptive, so any calculation with NaN as an operand will equate to NaN. Because you can't check for it with ` === NaN`, there is a function, `isNaN()`. Even better is `isFinite()` which checks for NaN and Infinity.

#### Infinity

Division by 0 creates Infinity, whose type is `number`. Anything above `1.79769313486231570e308` is seen as Infinity. 

	> 1 / 0 === Infinity
	true
	> typeof Infinity
	'number'
	> 1.7e308
	1.7e+308
	> 1.8e308
	Infinity
	
### Strings

Strings are 16 bit unicode. There is no character type, it would just be a string with length 1.

Quiz: are single quotes and double quotes interchangeable and exactly the same for denoting JS string literals?

Yes they are! Obviously you have to match pairs correctly. You are allowed to use either because it makes it easier to put quote marks in a string.

	> 'So I said, "Hello!" and he ran away!'
	'So I said, "Hello!" and he ran away!'

There are no behavioural differences like there are in PHP.

### Arrays

You can use arrays like you would expect, but they are not actually `Array` type. There is no array type in JS; arrays are implemented as `Object` with a different *prototype*. This will become clear later.


## Chapter 3

