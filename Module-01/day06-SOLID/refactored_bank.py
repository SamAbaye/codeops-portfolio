# Inheritance 

class Account:
    def __init__(self,balance):
        self.__balance = balance
        
    @property
    def balance(self):
        return self.__balance

class BankConfig:
    _instance = None

    interest_rate = 0.05 
    overdraft_limit = 1000 
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
class SavingAccount:
    def __init__(self, owner, number, balance):
        self.owner = owner
        self.number = number
        self.balance = balance

class CurrentAccount:
    def __init__(self, owner, number, balance):
        self.owner = owner
        self.number = number
        self.balance = balance


class  AccountFactory:
    @staticmethod 
    def create(kind, owner, number, balance=0):
        if kind == 'Savings':
            return SavingAccount(owner, number, balance)
        elif kind == 'Current':
            return CurrentAccount(owner, number, balance)
        raise ValueError(f'type Unknown: {kind}')

class Withdraw():
    def __init__(self, balance):
        self.balance = balance
   
    def withdraw(self, amount):
        bankConfig = BankConfig()
        if amount > self.balance + bankConfig.overdraft_limit:
            return "Insufficient funds"
        else:
            new_balance = self.balance - amount
            return f"Withdrawal successful. Your new balance is {new_balance}"

class Deposit():
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount can not be 0 or less")
        else: 
            self.balance += amount
            return self.balance
        
class Notification(Withdraw, Deposit):
    def __init__(self, alert):
        self.alert = alert
        self.events = []

    def subscribe(self, obj):
        self.events.append(obj)
    
    def notify(self, event):
        for obj in self.events:
            obj.update(event)
    
class SMSAlert:
    def update(self, event):
        print(f'{event}')  
