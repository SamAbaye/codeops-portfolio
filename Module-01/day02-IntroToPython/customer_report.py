#TeleBirr Tip Calculator

total_bill = int(input("Please Insert the total bill "))
number_of_people = int(input("Please Insert the number of people "))
def split_bill(total_bill, number_of_people, tip_rate = 0.10):
        single_bill = (total_bill/number_of_people)
        tip_bill = single_bill * tip_rate
        final_bill = single_bill + tip_bill
        return final_bill

result = split_bill(total_bill, number_of_people)

while number_of_people > 0:
    name = input("Insert your name ");
    print(f'{name} your bill is {result}')
    number_of_people -= 1
    

#Tele Birr Customer Report

customer = [ ("Samson", 1500), ("Alemu", 100), ("Hiwot", 1200), ("Selam", 5000), ("Amanuel", 3500), 
            ("Ruth", 500), ("Derese", 900)
]

def tier(balance):
        if balance >= 1000:
                return "Premium"
        elif balance >= 500:
                return "Standard"
        else:
                return "Basic"

for name, balance in customer:
       print(f'{name} your balance is {balance} your tier is {tier(balance)}')
       



