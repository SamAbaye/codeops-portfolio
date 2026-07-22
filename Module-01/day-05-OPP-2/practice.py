from abc import ABC, abstractmethod



class Vehicle(ABC):
    def __init__(self,  make, model, numbers):
        self.make = make
        self.model = model
        self.numbers = numbers

    def describe(self):
        return f"This car is {self.make} and the model is {self.model}"
    
    @abstractmethod
    def wheels(self):
        return self.numbers
class Car(Vehicle):
    def __init__(self, make, model, numbers, price):
        super(). __init__(make, model, numbers)
        self.price = price
    
    def describe(self):
        return f"This car is {self.make} and the model is {self.model}"
    
    def wheels (self):
        return f"The number of wheels {self.numbers}"

class Truck(Vehicle):
    def __init__ (self, make, model, numbers, price, capacity):
        super(). __init__(make, model, numbers)
        self.price = price
        self.capacity = capacity
    
    def describe(self):
        return f"This car is {self.make} and the model is {self.model}"
    
    def wheels (self):
        return f"The number of wheels {self.numbers}"

vehicles = [Car("Toyota", "Camry", 4, 25000), Truck("Ford", "F-150", 8, 30000, "2 Tonnes"), Car("BMW", "X5", 4, 50000), 
            Truck("Chevrolet", "Silverado", 8, 35000, "3 Tonnes"), Car("Mercedes", "S-Class", 6, 60000)]

for vehicle in vehicles:
    print(vehicle.describe())
    print(vehicle.wheels())

