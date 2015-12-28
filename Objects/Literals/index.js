// 1. Empty object
var empty_obj = {};

// 2. Object with illegal property name: Must be enclosed in quotation marks
//    Property name must be a string, including an empty string
//    Legal: firstName, first_Name
//    Illegal: first-name
var halfMan = {
  "first-name": "Tyrion",
  "last-name": "Lannister",
  nickName: "halfMan"
}


// 3. Property value can be obtained from any expression including another
//    object literal
var lannisters = {
  sigil: "A golden lion rampant on a crimson field",
  words: "A Lannister Always Pays His Debts",
  titles: {
    first: "Lords of Casterly Rock",
    second: "Lord Paramount of the Westerlands",
    third: "Wardens of the West"
  }
};

// 4. Retrieval: string expression in [] suffix
console.log(halfMan["first-name"]); //Tyrion

// 5. Retrieval: dot . notation "Preferred Way"
console.log(lannisters.sigil); //A golden lion rampant on a crimson field
console.log(lannisters.titles.first); //Lords of Casterly Rock

// 6. Retrieve non-existing property value
console.log(lannisters.randomProp); //undefined

// 7. Retrieve from 'undefined'
// console.log(lannisters.heir.firstName);
//TypeError: Cannot read property 'deeper' of undefined

// 8. Safeguarding against TypeError
console.log(lannisters.heir && lannisters.heir.firstName); //undefined

// 9. Default value
console.log(lannisters.heir || "disputed"); //disputed

// 10. Update existing property
lannisters.words = "Hear me Roar!";

// 11. Augment a new property
lannisters.lord = "Cersei Lannister";

// 12. Reference: Objects are passed around by reference
var imp = halfMan;
imp.nickName = "Imp";
console.log(imp.nickName); //Imp
console.log(halfMan.nickName); //Imp
