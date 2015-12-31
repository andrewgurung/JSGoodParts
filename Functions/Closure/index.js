// 1. Scope
//    In Javascript, there is no block Scope
//    But it has function scope
//    Best Practice:
//    -Declare all variables used in a function on the top of function body
var foo = function() {
  var a = 3, b = 5;

  var bar = function() {
    var b = 7; c = 11;
    a += b + c;
  };

  bar(); //a is 21, b is 5
};

// 2. Closure
// Example: Protecting the value from unauthorized changes
// Plain object literal
var lannister = {
  totalGoldCoins: 500,
  deposit: function (goldCoin) {
    this.totalGoldCoins += typeof goldCoin === 'number' ? goldCoin : 0;
  }
};
// IIFE returning an object that hides 'totalGoldCoins' from rest of the program
// function() { } ();
var closureLannister = function() {
  var totalGoldCoins = 500;

  return {
    deposit: function (goldCoin) {
      totalGoldCoins += typeof goldCoin === 'number' ? goldCoin : 0;
    },
    getTotalGoldCoins: function() {
      return totalGoldCoins;
    }
  }
}();

// 3. This is Closure
//    getTotalGoldCoins() has does not have access to a copy of the parameter;
//    it has access to the parameter itself.
//    This is possible because the function has access to the context in
//    which it was created. This is called closure.
console.log(closureLannister.getTotalGoldCoins()); //500
closureLannister.deposit(500);
console.log(closureLannister.getTotalGoldCoins()); //1000
closureLannister.deposit(500);
console.log(closureLannister.getTotalGoldCoins()); //1500

// 4. Fade
var fade = function (node) {
  var level = 1;
  var step = function ( ) {
    var hex = level.toString(16);
    node.style.backgroundColor = '#FFFF' + hex + hex;
    if (level < 15) {
      level += 1;
      setTimeout(step, 100);
    }
  };
  setTimeout(step, 100);
};
fade(document.body);
