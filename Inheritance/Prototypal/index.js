// 1. Prototypal inheritance
//    New object inherits the properties of an old object
//    No need of nested abstract classes
//    Use in built Object.create() object

// 2. Old object
var seasonOneCharacter = {
  name: 'Character One',
  dead: false,
  kill: function(){
    this.dead = true;
  }
};

// 3. Create a new object using Object.create() method
var tyrionLannister = Object.create(seasonOneCharacter);
tyrionLannister.name = 'Tyrion Lannister';
tyrionLannister.getWord = function() {
  return this.name + ' says A Lannister Always Pays His Debts';
};
console.log(tyrionLannister.getWord());
// Output:
// Tyrion Lannister says A Lannister Always Pays His Debts

// create() operator that implements true prototypal inheritance
if(typeof Object.create !== 'function') {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var newObject = Object.create(oldObject);
