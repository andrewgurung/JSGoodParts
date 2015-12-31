// 1. Function add()
var addCoins = function (goldCoins, silverCoins) {
  if(typeof goldCoins !== 'number' || typeof silverCoins !== 'number'){
    // 2. throw a custom exception object with
    //    name and message properties
    throw {
      name: 'TypeError',
      message: 'addCoins needs number'
    }
  }
    return goldCoins + silverCoins;
};


// 3. try/catch block
try {
  addCoins(5, "six");
}
// 4. Exception caught in 'e' object
catch(e) {
  console.log(e.name + ": " + e.message); //TypeError: addCoins needs number
}
