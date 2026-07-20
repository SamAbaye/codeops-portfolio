
class Samson:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.interest_rate = 0.05 # type: ignore
            cls._instance.overdraft_limit = 1000 # type: ignore
        return cls._instance

class Account:
    def __init__(self, balance):
        self.balance = balance
        self.observers = []
    
    def subscribe(self, obj):
        self.observers.append(obj)
    
    def notify(self, event):
        for obj in self.observers:
            obj.update(event)
    
    def withdraw(self, amount):
        self.balance -= amount
        self.notify(f'-{amount} ETB')

class SMSAlert:
    def update(self, event):
        print(f'[Telebirr SMS] {event}')

class Log:
    def update(self, event):
        print(f'[Log] {event}')

class AppSettings:
    _instance = None
    def __new__(cls):
        if cls._instance is not None:
            cls._instance.currency = 'ETB'
            return cls._instance
       
print(AppSettings() is AppSettings())

class ShapeFactory:
    def __init__(self, kind):
        self.kind = kind
        if kind == 'Circle':
            return Circle(kind)
        elif kind == 'Traingle':
            return Triangle(kind)
        elif kind == 'Square':
            return Square(kind)
        else:
            return 'incorrect kind'
        
class Circle:
    def __init__(self,kind):
        self.kind = kind

    def create(self):
        print(f'Created {self.kind}')
         
class Triangle:
    def __init__(self,kind):
        self.kind = kind

    def create(self):
        print(f'Created {self.kind}')

class Square:
    def __init__(self,kind):
        self.kind = kind

    def create(self):
        print(f'Created {self.kind}')

class  NewsAgency:
    def __init__(self, alert):
        self.alert = alert
        self.observers = []
    
    def subscribe(self, obj):
        self.observers.append(obj)
    
    def _notify(self, event):
        for obj in self.observers:
            obj.update(event)

    def news(self):
        self._notify(f'{self.alert}: is the news')

class Person1:
    def update(self, event):
        print(f'Person1 {event}')

class Person2:
    def update(self, event):
        print(f'Person2 {event}')

etv = NewsAgency("Addis Ababa is Lit")
etv.subscribe(Person1())
etv.subscribe(Person2())
etv.news()

circle = Circle('Circle')
circle.create()
triangle = Triangle('triangle')
triangle.create()


acc = Account(5000)
acc.subscribe(SMSAlert())
acc.subscribe(Log())
acc.withdraw(2000)

