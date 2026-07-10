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









