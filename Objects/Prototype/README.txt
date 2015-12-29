Notes
-----
- Every object is linked to a prototype from which it can inherit properties
- Objects created using object literals {} are linked to Object.prototype
- When creating an object, we can select its prototype

********************************************************************************
Helper method
--------------
- create() method that creates a new object based on the old object which is
passed as a parameter

if(typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  }
}
********************************************************************************

Example
-------
var halfMan = {
  "first-name": "Tyrion",
  "last-name": "Lannister",
  nickName: "halfMan"
}

var little_lion = Object.create(halfMan);
