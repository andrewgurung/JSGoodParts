// 1. Functional Inheritance Pattern
//    - Make a function that will produce objects
//    - Does not require new prefix
//    - Function starts with lowercase letter
//    - Optionally let user define private instance variables and methods
//    Steps:
//      - a) Create a function with lowercase letter
//      - b) Create a new object Eg: that
//      - c) [Optional] Define private instance variable and methods
//      - d) Augment new object with methods
//      - e) Return that new object


// Step a) Create a function with lowercase letter
var seasonOneCharacter = function(spec_object) {
  // Step c) Define private instance variable and methods
  var _dead = false;

  // Step b) Create a new object
  var that = {};

  // Step d) Augment new object with methods
  that.name = spec_object.name || 'Character One';
  that.kill = function(){
    _dead = true;
  };
  that.get_name = function ( ) {
    return spec_object.name;
  };

  // Step e) Return that new object
  return that;
};

var tyrion = function() {
  // private object
  var _gold = {
    totalGoldCoins: 1000
  };
  // Functional Inheritance
  var that = seasonOneCharacter({name: 'Tyrion Lannister'});
  // Augment child object
  that.getWord = function() {
    return that.get_name() + ' says A Lannister Always Pays His Debts';
  };
  that.getCoins = function() {
    return 'Total Gold Coins: ' + _gold.totalGoldCoins;
  };
  return that;
};

var ned = function() {
  // Functional Inheritance
  var that = seasonOneCharacter({name: 'Ned Stark'});
  // Augment child object
  that.getWord = function() {
    return that.get_name() + ' says Winter is Coming';
  };
  return that;
};
// Create objects
var tyrionLannister = tyrion();
var nedStark = ned();

console.log(tyrionLannister.getWord()); // Tyrion Lannister says A Lannister Always Pays His Debts
console.log(tyrionLannister.getCoins()); // Total Gold Coins: 1000

console.log(nedStark.getWord()); // Ned Stark says Winter is Coming
