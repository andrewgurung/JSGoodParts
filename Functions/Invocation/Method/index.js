var lannister = {
  totalGoldCoins: 0,
  // 1. Method: deposit()
  deposit: function (goldCoin) {
    this.totalGoldCoins += typeof goldCoin === 'number' ? goldCoin : 0;
  }
};

//Initial coins
console.log(lannister.totalGoldCoins); //0

// 2. Invoke deposit() Method
//    Deposit 1000 coins
lannister.deposit(1000); //1000
console.log(lannister.totalGoldCoins);

//Passing string value: Defaults to 0 coins
lannister.deposit('fakeCoins');
console.log(lannister.totalGoldCoins); //1000
