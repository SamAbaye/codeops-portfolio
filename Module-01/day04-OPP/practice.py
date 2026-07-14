class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def describe(self):
        print(f"{self.title} by {self.author}, {self.pages} pages.")

book_1 = Book("The Great Gatsby", "F. Scott Fitzgerald", 180)
book_2 = Book("To Kill a Mockingbird", "Harper Lee", 281)

book_1.describe()
book_2.describe()

class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.__quantity = quantity
    @property
    def restock(self):
        return self.__quantity
    @restock.setter
    def restock(self, n):
        self.__quantity += n
        print(f"Restocked {n} units. New quantity is {self.__quantity}.")
    
    def sell(self, n):
        if n > self.__quantity:
            return "Insufficient stock"
        else:
            self.__quantity -= n
            return f'you have bought {n} products and currently {self.__quantity} is remaining '
        
shirt = Product('Susus', 1200, 6)
trouser = Product('Tutu', 3400, 90)
bag = Product('Borsa', 2300, 67)

shirt.restock = 200
trouser.restock = 120

print(shirt.sell(100))
print(trouser.sell(700))
