// 1. Function add()
var addCoins = function (goldCoins, silverCoins) {
    return goldCoins + silverCoins;
};

// 2. Invoke add() function
var totalCoins = addCoins(100, 50);
console.log(totalCoins); //150

// 3. Original lannister object
var lannister = {
  totalGoldCoins: 0,
  deposit: function (goldCoin) {
    this.totalGoldCoins += typeof goldCoin === 'number' ? goldCoin : 0;
  }
};

// 4. Augment 'doubleCoins' method to lannister object
lannister.doubleCoins = function () {
  // Here addCoins is a function where 'this' points to 'global' object
  // 'this' bound to wrong value
  // addCoins(this.totalGoldCoins, this.totalGoldCoins);

  //Workaround
  // Set lannister object 'this' to a new variable 'that'
  // use 'that' to invoke addCoins() function
  var that = this;
  that.totalGoldCoins = addCoins(that.totalGoldCoins, that.totalGoldCoins);
};

// 5. Initial Deposit
lannister.deposit(1000);
console.log(lannister.totalGoldCoins); //1000

// 6. Invoke doubleCoins method --> invoke addCoins function
lannister.doubleCoins();
console.log(lannister.totalGoldCoins); //2000
