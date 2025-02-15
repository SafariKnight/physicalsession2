function bankAccount(name, age, balance, address) {
  return {
    name: name,
    age: age,
    balance: balance,
    address: address,
    accountInfo: function () {
      console.log(`Name: ${this.name}`);
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
