
class Account:
    def __init__(self, owner, account_number, balance):
        self.owner = owner
        self.account_number = account_number
        self.__balance = balance
    
    @property
    def balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount < 0:
            raise TypeError("Invalid input")
        else:
            amount += self.__balance
            return amount

    def statement(self):
        return print(f'{self.owner}: account number: {self.account_number}, Your balance is {self.__balance}')

acc = Account('Alemayehu', '123456789', 1000)
acc.statement()