document.writeln("JS 2016!");

// 'method' method is used to define new methods
Function.prototype.method = function (name, func) {
  if(!this.prototype[name]){
    this.prototype[name] = func;
    return this;
  }  
}
