// 1. Memoization: Functions using objects to
//    remember results of previous operation

var org_fibonacci = function(n) {
  return n < 2 ? n : org_fibonacci(n-1) + org_fibonacci(n-2);
};

for(var i = 0; i <= 10; i++) {
  console.log(i + ": " + org_fibonacci(i));
}

// Total calls: 11 times, and it calls itself 442 times
// Output
// ------
// 0: 0
// 1: 1
// 2: 1
// 3: 2
// 4: 3
// 5: 5
// 6: 8
// 7: 13
// 8: 21
// 9: 34
// 10: 55

// 2. Memoize original org_fibonacci() function
// IIFE
var memoized_fibonacci = function() {
  // Memoized array
  var memo = [0, 1];
  // shell function 'fb'
  var fib = function(n) {
    var result = memo[n];
    if(typeof result !== 'number'){
      result = fib(n-1) + fib(n-2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
}();

for(var i = 0; i <= 10; i++) {
  console.log(i + ": " + memoized_fibonacci(i));
}

// 3. Memoizer helper function
//    input: initial memo + fundamental function
//    output: shell function that is memoized
var memoizer = function (memo, fundamental) {
  var shell = function (n) {
  var result = memo[n];
  if (typeof result !== 'number') {
    result = fundamental(shell, n);
    memo[n] = result;
  }
    return result;
  };
  return shell;
};


// 4. Use Memoized
var fibonacci1 = memoizer([0, 1], function (shell, n) {
  return shell(n - 1) + shell(n - 2);
});
