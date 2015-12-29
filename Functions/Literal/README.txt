Notes
-----
- Functions are Objects
- Function objects are linked to Function.prototype (which is
  itself linked to Object.prototype)
- Every function has 2 hidden properties: function's context and
  code that implements function's behavior
- When creating an object, we can select its prototype
- Function has a 'prototype' property which point to an object with
  a 'constructor' property
- The 'constructor' property's value is the function itself
- Since functions are objects, they can be stored in variables, arrays, objects,
  passed as arguments to functions, returned from other functions, have methods
  and be invoked too.

  Function object            Function.prototype object
  ----------------           --------------------------
  prototype (value)---------->constructor (prop)
  Function<-------------------constructor (value)
  This is distinct from  the hidden link to Function.prototype


1.  Function Literal: Function objects can be created with function literals.
    Function literal has four parts:
    i)   reserved 'function' keyword
    ii)  function name (optional). If not defined, it is said to be anonymous
    iii) parameters wrapped in parentheses
    iv)  function body wrapped in curly braces

    Example
    -------
    var addGoldCoins = function (a, b) {
      return a + b;
    };

    i)   function
    ii)  function name: anonymous
    iii) parameters: (a, b)
    iv)  function body: { return a + b; }
    v)   addGoldCoins: variable name that stores function object
