function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    const CURRENCY_VALUES = [
      ["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1],
      ["QUARTER", 0.25], ["DIME", 0.1], ["NICKEL", 0.05], ["PENNY", 0.01]
    ];
    
    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
    } else {
      let changeArr = [];
      for (let i = 0; i < CURRENCY_VALUES.length; i++) {
        let coinName = CURRENCY_VALUES[i][0];
        let coinValue = CURRENCY_VALUES[i][1];
        let coinAvailable = cid.find(coin => coin[0] === coinName)[1];
        let coinCount = (coinAvailable / coinValue < changeDue / coinValue) ? coinAvailable / coinValue : Math.floor(changeDue / coinValue);
        changeDue -= coinCount * coinValue;
        changeDue = changeDue.toFixed(2);
        if (coinCount > 0) {
          changeArr.push([coinName, coinCount * coinValue]);
        }
      }
      if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: changeArr };
      }
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  