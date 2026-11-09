import numbers
from collections import deque

class BankConfig:
    _instance = None

    interest_rate = 0.05 
    overdraft_limit = 1000 
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
class Account:
    def __init__(self, owner, number, balance):
        self.owner = owner
        self.number = number
        self.__balance = balance
        self._observers = []
        self.transactions = []
        
    @property
    def balance(self):
        return self.__balance
    
    def subscribe(self, obj):
        self._observers.append(obj)

    def _notify(self, event):
        for obj in self._observers:
            obj.update(event)
            
    def statement(self):
        return print(f'{self.owner}: Your balance is {self.__balance}')
    
    def deposit(self, amount):
        if amount < 0:
            raise TypeError("Invalid input")
        self.__balance += amount
        self.transactions.append(f"Withdrew ${amount}. New Balance: ${self.balance}")
        self._notify(self.statement())
        
    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Invalid Input")
        elif amount > self.__balance:
            raise ValueError("insufficient balance")
        else:
            self.__balance -= amount
        self.transactions.append(f"Deposited ${amount}. New Balance: ${self.balance}")
        self._notify(self.statement())

    def undo_last(self):
        if not self.transactions:
            print("No transactions to undo.")
            return None
        return self.transactions.pop()

class SavingAccount(Account):
    def __init__(self, owner, number, balance, rate = 0.05):
        super().__init__(owner, number, balance)
        self.rate = rate

    def add_interest(self):
        interest = self.balance * self.rate
        return self.deposit(interest)
    
class CurrentAccount(Account):
    def __init__(self, owner, number, balance):
        super().__init__(owner, number, balance)
        bank_config = BankConfig()
        overdraft = bank_config.overdraft_limit
        self.deposit(overdraft)
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        else:
            self.balance -= amount # type: ignore
            self._notify(self.statement())

class  AccountFactory:
    @staticmethod 
    def create(kind, owner, number, balance=0):
        if kind == 'Savings':
            return SavingAccount(owner, number, balance)
        elif kind == 'Current':
            return CurrentAccount(owner, number, balance)
        raise ValueError(f'type Unknown: {kind}')

class SMSAlert:
    def update(self, event):
        print(f'Hello {event}')  

class AuditLog:
    def update(self, event):
        print(f'Below {event}') 

class AccountRegistry:
    def __init__(self):
        self.accounts = {}
        print(self.accounts.keys())
    def add(self, acc):
        self.accounts[acc.number] = acc.owner, acc.balance
    def find(self, number):
        return self.accounts.get(number)
    def list_all(self):
        print(f"List of accounts: {self.accounts}")
    def leaders_board(self, acc):
        sorted_by_Balance = sorted(acc,  key=lambda x: acc[x][1])
        return sorted_by_Balance
    def find_by_number(self, number):
        self.number = number
        sorted_key = sorted(self.accounts.keys())
        lo = 0
        hi = len(sorted_key) - 1
        while lo <= hi:
            mid = int((hi + lo)/2)
            current_key = sorted_key[mid]
            if current_key == number:
                return self.accounts[number]
            elif current_key > number:
                lo = mid + 1
            else:
                hi = mid - 1
        return -1

class Branch: 
    def __init__(self, name): 
        self.name = name 
        self.children = []      
        self.accounts = [] 

    def total_balance(self): 
        total = sum(a.balance for a in self.accounts) 
        for child in self.children:   # recurse 
            total += child.total_balance() 
        return total

def bfs(transfers, start):
    if start not in transfers:
        return {start}
        
    visited = set([start])
    queue = deque([start])
    
    while queue:
        current_account = queue.popleft()
        recipients = transfers.get(current_account, [])
        
        for recipient in recipients:
            if recipient not in visited:
                visited.add(recipient)
                queue.append(recipient)
                
    return visited

account = AccountRegistry()

first_account = AccountFactory.create("Savings", "Samson","CBE-1", 2000)
second_account = AccountFactory.create("Current", "Israel","CBE-2", 3000)
print(f'Balnce: {second_account.balance}')

account.add(first_account)
account.add(second_account)

print(f'Sorted: {account.leaders_board(account.accounts)}')
account.list_all()
print(account.find_by_number("CBE-1"))



