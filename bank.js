function bankAccount(name, age, balance, address) {
  return {
    name: name,
    age: age,
    balance: balance,
    address: address,
    accountInfo: function() {
      console.log(`Name: ${this.name}`)
    }
  }
}
