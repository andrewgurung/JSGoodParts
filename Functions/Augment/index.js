// 1. Augment Function.prototype to make methods available to all functions
//    Due to Javascript's prototypal inheritance, all functions will
//    automatically receive the new methods, even functions that were
//    created before the methods were created

Function.prototype.method = function(name, func) {
  // 2. Only add method if it doesn't exist
  if(!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
};

// 3. Augment isEven method to Number.prototype
Number.method('isEven', function ( ) {
  return (this % 2 === 0);
});

var even = 10, odd = 13;
console.log(even.isEven()); //true
console.log(odd.isEven());  //false
