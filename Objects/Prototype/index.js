if(typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  }
}

var halfMan = {
  firstName: "Tyrion",
  lastName: "Lannister",
  nickName: "Half Man"
}

// 1. Create a new object'little_lion' based on old object 'halfMan'
var little_lion = Object.create(halfMan);
little_lion.nickName = "Little Lion";

// 2. Changing new object will not affect its Prototype
console.log(little_lion.nickName); // Little Lion
console.log(halfMan.nickName); // Half Man

// 3. Delegation: If property is not found, it is delegated to the
//    prototype chain, all the way up to Object.prototype
console.log(little_lion.firstName); //Tyrion

// 4. Dynamic relationship
//    Any new property added to Prototype will be immediately available
//    to objects based on that Prototype
halfMan.age = 37;
console.log(little_lion.age); //37

for (var i in little_lion) {
  if(little_lion.hasOwnProperty(i)){
    console.log(i);
  }
}
