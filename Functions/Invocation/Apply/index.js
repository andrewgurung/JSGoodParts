var Lannister = function (word) {
    this.word = word;
};

// 1. Add a public method to Lannister prototype
Lannister.prototype.displayWord = function() {
  return this.word;
};

//2. Create a Stark object without displayWord() method
var Stark = {
  word: "Winter is Coming"
};

//3. Use Lannister's displayWord() method to display Stark's word
console.log(Lannister.prototype.displayWord.apply(Stark)); //Winter is Coming
