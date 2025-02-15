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
      console.log("Checking balance...");
      if (amount <= 0) {
        return false;
      }
      if (this.balance <= amount) {
        return false;
      }
      return true;
    },
    withdraw: async function (money) {
      this.balanceCompare(money).then((result) => {
        if (result) {
          this.balance -= money;
          console.log(`Withdrawal successful. New Balance: ${this.balance}`);
        } else {
          console.log("Insufficent balance or invalid input");
        }
      });
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

async function tests() {
  const testBankAccounts = bankAccount("Test", 16, 200, "Street");
  await testBankAccounts.withdraw(300); // Should fail
  await testBankAccounts.withdraw(100); // Should Work
  await testBankAccounts.deposit(200);
  console.log(`Balance: ${testBankAccounts.balance}`);
}

tests();
