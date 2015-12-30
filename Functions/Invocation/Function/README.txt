Notes
-----
- When function is not a property of an object, it is invoked as function
- 'this' is bound to the 'global' object
- Inner functions are also invoked as functions so 'this' points to
  global object for all inner functions
- When a method invokes a [inner] function, the passed 'this' object will
  point to wrong value of 'global' object
- Workaround: var that = this
  Use 'that' in place of this to invoke an [inner/external] function from within
  a method of an object
