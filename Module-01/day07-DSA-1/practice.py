
class  AccountFactory:
    @staticmethod 
    def create(kind, owner, number, balance=0):
        if kind == 'Savings':
            return SavingAccount(owner, number, balance)
        elif kind == 'Current':
            return CurrentAccount(owner, number, balance)
        raise ValueError(f'type Unknown: {kind}')

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

class AccountRegistry:
    def __init__(self):
        self.accounts = {}
        
    def add(self, acc):
        self.accounts[acc.number] = acc.owner, acc.balance
    def find(self, number):
        return self.accounts.get(number)

account = AccountRegistry()
account.add(AccountFactory.create("Savings", "Samson","CBE-1", 2000))
print(account.find("CBE-1"))



