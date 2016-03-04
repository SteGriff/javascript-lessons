//method.js
// Showing an object having a method
// and calling that method

var obj = {};
obj.adder = function add (a, b)
{
    return a + b;
}

console.log(obj);
console.log(obj.adder(2,3));