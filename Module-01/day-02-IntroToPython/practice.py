#Excercise 1 - Temperature label
temp = int(input('input the temprature in celcius '))

if temp < 15:
    print("Cold")
elif temp > 15 and temp < 28:
    print("Warm")
else:
    print("Hot")

#Excercise 2 -  Receipt loop
for i in range(10):
    print(f'Receipt #{i}')

#Excercise 3 - Even numbers
for i in range(20):
    if i % 2 == 0:
        print(i)

#Excercise 4 -  Discount function
def apply_discount(price, percent=10):
    return price - (price * 1/percent)

print(apply_discount(250))

#Excercise 5 - Countdown
i = 5
while i > 0:
    print(i)
    if i == 1:
        print('Liftoff')
    i -= 1