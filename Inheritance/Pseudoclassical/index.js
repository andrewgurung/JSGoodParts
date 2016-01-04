// 1. Object is created by 'new' / constructor function
// 2. Methods and default properties are in prototype
// 3. In other languages with static type checking, class hierarchies is fine
//    But Javascript is loosely typed language, there are better ways
//    to inherit

// Pseudoclass
function Character(name) {
  this.name = name;
}

// Add methods to prototype
Character.prototype = {
  dead: false
};

// Another pseudoclass inherit from Character
var SeasonOneCharacter = function(name) {
  this.name = name;
};

SeasonOneCharacter.prototype = new Character();
SeasonOneCharacter.prototype.kill = function(){
  this.dead = true;
};

var nedStark = new SeasonOneCharacter('Ned Stark');
console.log(nedStark.dead); // false
nedStark.kill();
console.log(nedStark.dead); //true


// 3. Helper Function 'inherits'
//    -helper method()
Function.prototype.method = function (name, func) {
  if(!this.prototype[name]){
    this.prototype[name] = func;
    return this;
  }
};

//    -helper 'inherits' method
Function.method('inherits', function(Parent){
  this.prototype = new Parent();
  return this;
});

// 4. Use 'inherits' to hide some ugliness
var Lannister = function(name){
  this.name = name;
  this.totalGoldCoins = 0;
}.inherits(SeasonOneCharacter)
  .method('getWord',function() {
    return this.name + ' says A Lannister Always Pays His Debts';
  })
  .method('depositCoins', function(goldCoin){
    this.totalGoldCoins += typeof goldCoin === 'number' ? goldCoin : 0;
  })
  .method('getCoins', function(){
    return this.totalGoldCoins;
  });

var tyrionLannister = new Lannister("Tyrion Lannister");
tyrionLannister.depositCoins(1000);
console.log(tyrionLannister.getCoins()); // 1000
console.log(tyrionLannister.getWord()); // Tyrion Lannister says A Lannister Always Pays His Debts
