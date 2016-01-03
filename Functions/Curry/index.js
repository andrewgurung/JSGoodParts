// 1. Curry: works by creating a closure that holds original function
//    and the arguments to curry

Function.prototype.method = function(name, func){
  if(!this.prototype[name]){
    this.prototype[name] = func;
    return this;
  }
};


Function.method('curry', function() {
  // Original function
  var that = this;

  // 'arguments' array is not an array
  // Use slice() method to convert arguments to array
  var slice = Array.prototype.slice;

  // Original arguments passed when creating curry
  var args = slice.apply(arguments);

  // return curried function with placeholder for new arguments
  // passed in during invocation
  return function(){
    // args = orginal arguments passed while invoking curry function
    // arguments = new arguments which will be
    //             passed while invoking curried function
    return that.apply(null, args.concat(slice.apply(arguments)));
  }
});


var deadCharacters = function (character) {
  var deadChars = Array.prototype.slice.apply(arguments);
  return deadChars;
};

var seasonOneDeadChars = deadCharacters.curry("Robert Baratheon", "Ned Stark", "Khal Drogo");
var bothSeasonDeadChars = seasonOneDeadChars("Hugh of the Vale");
console.log(bothSeasonDeadChars.toString()); //Robert Baratheon,Ned Stark,Khal Drogo,Hugh of the Vale
