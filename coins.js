// I don't think this meets the message requirement since I couldn't get user input besides from a prompt??
var input = prompt("Enter dollar amount to convert to coins: ");

// I don't know how to make it so the coin amt can only take 2 decimal places like a dollar amount
function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

// 0 makes it so that these know there will be a number
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

// adds the user input that can be divided by the coin amount
  var coinAmt = input * 1;

  console.log(coinAmt);
  
  coinPurse.quarters = Math.floor(coinAmt/.25);
  coinAmt = coinAmt % .25;
  
  coinPurse.dimes = Math.floor(coinAmt/.10);
  coinAmt = coinAmt % .10;
  
  coinPurse.nickels = Math.floor(coinAmt/.05);
  coinAmt = coinAmt % .5;
  
  coinPurse.pennies = Math.floor(coinAmt/.01);

  return coinPurse;
}

var coins = coinCounter();
console.log(coins);
