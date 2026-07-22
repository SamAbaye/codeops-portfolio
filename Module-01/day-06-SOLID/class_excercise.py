# Inheritance 

class Account:
    def __init__(self,owner, number, balance = 0):
        self.owner = owner
        self.number = number
        self.__balance = balance
        self._observers = []

    @property
    def balance(self):
        return self.__balance

    def statement(self):
        return (f"owner: {self.owner} Balance: {self.__balance} Number: {self.number}")
    
    def subscribe(self, obj):
        self._observers.append(obj)
    
    def _notify(self, event):
        for obj in self._observers:
            obj.update(event)
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be greater than 0")
        self.__balance += amount
        self._notify(self.statement())

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount can not be 0 or less")
        else: 
            self.__balance += amount
            print(self.statement())
            self._notify(self.statement())
        
class BankConfig:
    _instance = None

    interest_rate = 0.05 
    overdraft_limit = 1000 
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
class SavingAccount(Account):
    def __init__(self, owner, number, balance = 0):
        super().__init__(owner, number, balance)
    config = BankConfig()
    rate = config.interest_rate
    
    def statement(self):
        return (f"owner: {self.owner} Balance: {self.balance} Number: {self.number} Interest: {self.rate}")
    
    def add_interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)
        print(f"Added {interest} ETB")
    

class CheckingAccount(Account):
    def __init__(self, owner, number, balance = 0):
        super().__init__(owner, number, balance)
    config = BankConfig()
    overdraft_limit = config.overdraft_limit

    def statement(self):
        return (f"owner: {self.owner} Balance: {self.__balance} Number: {self.number} Overdraft: {self.overdraft_limit}")
    
    def withdraw(self, amount):
        if amount > self.balance + self.overdraft_limit:
            raise ValueError("Insufficient funds")
        else:
            self.__balance -= amount
            self._notify(self.statement())
    
class  AccountFactory:
    @staticmethod 
    def create(kind, owner, number, balance=0):
        if kind == 'Savings':
            return SavingAccount(owner, number, balance)
        elif kind == 'Checking':
            return CheckingAccount(owner, number, balance)
        raise ValueError(f'type Unknown: {kind}')


class SavingDeposit():
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        bankConfig = BankConfig()
        rate = bankConfig.interest_rate
        if amount <= 0:
            raise ValueError("Amount can not be 0 or less")
        else: 
            self.balance += amount + (amount * rate)
            return self.balance
class CurrentDeposit():
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount can not be 0 or less")
        else: 
            self.balance += amount 
            return self.balance  
        
 
class SMSAlert:
    def update(self, event):
        print(f'{event}')  
class AuditLog:
    def update(self, event):
        print(f'{event}')  

acc = AccountFactory.create("Checking", "Samson", "C-1", 4000)

acc.subscribe(SMSAlert())
acc.subscribe(AuditLog())

acc.deposit(300)