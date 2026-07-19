# Inheritance 

class Account:
    def __init__(self, owner, number, balance):
        self.owner = owner
        self.number = number
        self.__balance = balance
        
    @property
    def balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount < 0:
            raise TypeError("Invalid input")
        self.__balance += amount
        return self.__balance
    
    def withdraw(self, amount):
        if amount <= 0:
            return "Invalid Input"
        elif amount > self.__balance:
            return "insufficient balance"
        else:
            self.__balance -= amount
            return self.__balance
            
    def statement(self):
        return print(f'{self.owner}: Your balance is {self.__balance}')

class SavingAccount(Account):
    def __init__(self, owner, number, balance, rate = 0.05):
        super().__init__(owner, number, balance)
        self.rate = rate

    def add_interest(self):
        interest = self.balance * self.rate
        return self.deposit(interest)

    def statement(self):
        return print(f'{self.owner} Saving Account balance is {self.balance}')
    
class CurrentAccount(Account):
    def __init__(self, owner, number, balance, overdraft):
        super().__init__(owner, number, balance)
        self.overdraft = overdraft
        self.deposit(overdraft)

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds"
        else:
            new_balance = self.balance - amount
            return f"Withdrawal successful. Your new balance is {new_balance}"

    def statement(self):
        return print(f'{self.owner} Current Account balance is {self.balance}')

accounts = [CurrentAccount("Samson", "1000339822143", 4500, 2200),SavingAccount('Alemayehu',"100034453222", 5000, 0.3)]


for account in accounts:
    account.statement()


