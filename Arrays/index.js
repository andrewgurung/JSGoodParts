// 1. Array Literals
//  - A pair of square brackets [] containing any mixture of
//    values including objects
//  - Inherits from Array.prototype with additional properties such as length

var empty_Array = [];
var simple_Array = ['Tyrion', 'Daenerys', 'Jon'];
var complex_Array = ['Tyrion', 8.9, undefined, true, null, ['nested','array'], {'goldCoins': 200}, NaN, Infinity];
console.log(empty_Array[1]); // undefined
console.log(simple_Array[1]); // 'Daenerys'
console.log(complex_Array[1]); // 8.9

// 2. length property
console.log(complex_Array.length); // 9

// 3. push method
simple_Array.push('Robert');
console.log(simple_Array); // ["Tyrion", "Daenerys", "Jon", "Robert"]

// 4. delete method (Inherited from Object.prototype)
delete simple_Array[1];
console.log(simple_Array[1]); // undefined

// 5. splice (delete an element without creating a gap)
//  - some_Array.splice(ordinal, number_of_elements_to_delete)
//  - Delete elements and reassign new key
//  - Dot ideal for large arrays
simple_Array.splice(1, 1);
console.log(simple_Array[1]); // Jon

// 6. isArray() helper method
var isArray = function(value) {
  return value &&
    typeof value === 'object' &&
    typeof value.length === 'number' &&
    typeof value.splice === 'function' &&
    // An "enumerable" property is a property that shows up in for..in loops
    !(value.propertyIsEnumerable('length'));
};

console.log(isArray([])); //true
console.log(isArray({})); //false

// 7. Multi dimensional array
var characters = [
  ['Tyrion', 'Cersei', 'Jaime'],
  ['Jon', 'Sansa', 'Arya'],
  ['Myrcella', 'Joffrey', 'Tommen']
];
console.log(characters[2][1]); // Joffrey
