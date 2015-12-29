// 1. Global variable
//    MY_APP becomes the container for our application
//    Reduces global footprint to a single name
//    Reduces naming conflicts with other app, widgets, or libraries

var MY_APP = {};

MY_APP.halfMan = {
  "first-name": "Tyrion",
  "last-name": "Lannister",
  nickName: "halfMan"
};

MY_APP.lannisters = {
  sigil: "A golden lion rampant on a crimson field",
  words: "A Lannister Always Pays His Debts",
  titles: {
    first: "Lords of Casterly Rock",
    second: "Lord Paramount of the Westerlands",
    third: "Wardens of the West"
  }
};
