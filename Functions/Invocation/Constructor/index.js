// 1. Constructor called Lannister
// Creates an object with a 'name' property
var Lannister = function(name) {
  this.name = name;
};

// 2. Augment a public method getName to all instances of Lannister
Lannister.prototype.getName = function() {
  return this.name;
}

// 3. Make an instance of Lannister
var tyrion = new Lannister("Tyrion Lannister");

// 4. Invoke function
tyrion.getName(); //Tyrion Lannister
