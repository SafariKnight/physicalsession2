function bankAccount(name, age, balance, address) {
  return {
    name: name,
    age: age,
    balance: balance,
    address: address,
    accountInfo: function () {
      console.log(`Name: ${this.name}`);
    },
    balanceCompare: function (amount) {
      console.log("Checking balance...");
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (amount <= 0) {
            reject(new Error("Invalid Withdraw Amount"));
          }
          if (this.balance < amount) {
            reject(new Error("Withdraw Amount Higher than Balance"));
          }
          resolve(true);
        }, 1000);
      });
    },
    withdraw: async function (money) {
      try {
        await this.balanceCompare(money);
        this.balance -= money;
        console.log(`Withdrawal successful. New Balance: ${this.balance}`);
      } catch (err) {
        console.log(err.message);
      }
    },
    deposit: function (amount) {
      return new Promise((resolve, reject) => {
        if (amount <= 0) {
          reject("Invalid amount");
        }
        setTimeout(() => {
          this.balance += amount;
          resolve(amount);
        }, 1000);
      });
    },
    addAmount: function (amount) {
      this.deposit(amount)
        .then((amount) => {
          console.log(`Amount Deposited: ${amount}`);
          console.log(`New Balance: ${this.balance}`);
        })
        .catch((message) => {
          console.log(message);
        });
    },
  };
}