var halfMan = {
  firstName: 'Tyrion',
  lastName: 'Lannister',
  nickName: 'Half Man',
  age: 37,
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// 1. typeof operator
typeof halfMan.firstName; //string
typeof halfMan.age; //number
typeof halfMan.getFullName; //function

// 2. Delegated property
//    Navigate through prototype chain
typeof halfMan.toString; //function

// 3. hasOwnProperty() method
halfMan.hasOwnProperty('firstName'); //true
halfMan.hasOwnProperty('getFullName'); //true
halfMan.hasOwnProperty('toString'); //false

// 4. Enumeration
//    For, For..in loop will list all properties of
//    halfMan including functions and properties from its prototype
//    Filter techniques: hasOwnProperty(), 'function' check
console.log('************Imp Enumeration********************');
var imp = Object.create(halfMan);
imp.culture = 'Andal';
for (var prop in imp) {
  if(typeof imp[prop] !== 'function' && imp.hasOwnProperty(prop)) {
      console.log(prop + ': ' + imp[prop]);
  }
}
// Output
// culture: Andal

// 5. Sorted Enumeration
console.log('************Half Man Sorted Enumeration********************');
var sortedProps = ['age', 'firstName', 'lastName', 'nickName'];
for(var i = 0; i < sortedProps.length; i++) {
  var prop = sortedProps[i];
  console.log(prop + ': ' + halfMan[prop]);
}
// Output
// age: 37
// firstName: Tyrion
// lastName: Lannister
// nickName: Half Man

// 6. Delete
//    delete will delete a property from object if found
//    It will not affect objects in its prototype linkage
//    Deleting a property will allow Prototype's property to shine through
imp.nickName = "The Imp";
console.log(imp.nickName); // The Imp
delete imp.nickName;
console.log(imp.nickName); // Half Man (Prototype's prop shining through)
