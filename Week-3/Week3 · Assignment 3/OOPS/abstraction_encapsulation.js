class BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      this.accountNumber = accountNumber;
      this.balance = balance;
      this.accountHolderName = accountHolderName;
    }
  }
  
  class CheckingAccount extends BankAccount {
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      this.balance -= amount;
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  class SavingsAccount extends BankAccount {
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (this.balance - amount >= 0) {
        this.balance -= amount;
      } else {
        console.log("Insufficient funds. Withdrawal failed.");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  // Create instances
  const checkingAccount = new CheckingAccount("123456789", 1000, "John Doe");
  const savingsAccount = new SavingsAccount("987654321", 5000, "Jane Smith");
  
  // Deposit and withdraw
  checkingAccount.deposit(500);
  checkingAccount.withdraw(200);
  savingsAccount.deposit(1000);
  savingsAccount.withdraw(6000);
  
  // Get balances
  console.log("Checking Account balance:", checkingAccount.getBalance());
  console.log("Savings Account balance:", savingsAccount.getBalance());
  