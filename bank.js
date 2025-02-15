function bankAccount(name, age, balance, address) {
  return {
    name: name,
    age: age,
    balance: balance,
    address: address,
    accountInfo: function () {
      console.log(`Name: ${this.name}`);
    },
    balanceCompare: async function (amount) {
      console.log("Checking balance..."),
        setTimeout(() => {
          if (amount <= 0) {
            throw new Error("Invalid Withdraw Amount");
          }
          if (this.balance <= amount) {
            throw new Error("Withdraw Amount Higher than Balance");
          }
          return true;
        }, 1000);
    },
    withdraw: async function (money) {
      try {
        if (this.balanceCompare(money)) {
          this.balance -= money;
          console.log(`Withdrawal successful. New Balance: ${this.balance}`);
        } else {
          console.log("Invalid withdrawal amount or insufficient balance.");
        }
      } catch (err) {
        console.log(err.message)
      }
    },
  };
}
