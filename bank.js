function bankAccount(
  name,
  age,
  balance,
  city,
  street,
  buildingNumber,
  apartmentNumber,
) {
  return {
    name: name,
    age: age,
    balance: balance,
    address: {
      city: city,
      street: street,
      buildingNumber: buildingNumber,
      apartmentNumber: apartmentNumber,
    },

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
  const testBankAccounts = bankAccount(
    "Test",
    16,
    200,
    "New York",
    "Main st.",
    10,
    20,
  );
  console.log("\tBefore")
  testBankAccounts.accountInfo()
  console.log(`Balance: ${testBankAccounts.balance}`);


  console.log("\n\tAfter")
  await testBankAccounts.withdraw(300); // Should fail
  await testBankAccounts.withdraw(100); // Should Work
  await testBankAccounts.deposit(200);
}

tests();
