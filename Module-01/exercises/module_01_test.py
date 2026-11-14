# Question 1 
# Given an array of numbers, write a function that prints in the console another arraywhich contains all the even numbers in the original array, which also have even indexes only.
#       ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
#       ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
def getOnlyEvens(array):
    even_nums = []
    for i in array:
        if i % 2 == 0:
            even_nums.append(i)
    return even_nums

#print(getOnlyEvens([0, 1, 2, 3, 4]))

# Question 2
# ● Create a function that takes a two-digit number as an parameter and prints "Ok" inthe console if the given string is greater than its reversed digit version. If not, the function will print "Not ok"
#      ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
#      ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32
def reverseCompare(num1):
    reversed_num = str(num1)
    
    
#print(reverseCompare(24))

# Question 3
# ● Write a function that takes a positive integer and returns the factorial of the number. Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is 4 * 3 * 2 * 1 = 24)
#     ○ Test 1: returnFactorial(5) outputs 120
#     ○ Test 2: returnFactorial(6) outputs 720
#     ○ Test 3: returnFactorial(0) outputs 1

def factoral(n):
    if n <= 1:
        return 1
    return n * factoral(n-1)

#print(factoral(6))

# Question 4 (Meera array)
# ● A Meera array is defined to be an array containing only numbers as its elements and forall n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an array of numbered elements and prints “I am a Meera array” in the console if its array does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a Meera array”
#       ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 * 2 is 10
#       ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
#       ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3 *2 is -6 
def checkMeera(array):
    mera_check = 0
    flag = False
    for i in array:
        mera_check = i*2
        for j in array:
            if mera_check == j:
                flag = True
                break
    if flag == True:
        print('I am NOT a Meera array') 
    else:
        print('I am a Meera array')  

checkMeera([10, 4, 0, 5])    

# Question 5 (Dual array)
# ● Define a Dual array to be an array where every value occurs exactly twice. For example, {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5 occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
# times) Write a function named isDual that returns 1 if its array argument is a Dual array.
# Otherwise it returns 0.
def isDual(dual_array):
    counted_array1 = []
    counted_array2 = []
    for i in range(len(dual_array)):
        if len(dual_array) % 2 != 0:
            return -1
    j = 0
    new_array = sorted(dual_array)
    while j < len(new_array):
        counted_array1.append(new_array.pop())
        counted_array2.append(new_array.pop())
    if sorted(counted_array1) == sorted(counted_array2):
        return 1
    return -1
#print(isDual([1, 1, 1, 2, 2, 3]))
#print(isDual([1, 2, 1, 3, 3, 2]))
def isDual2(dual_array):
    if len(dual_array) % 2 != 0:
        return 0

    counts={}
    for num in dual_array:
        counts[num] = counts.get(num, 0) + 1
        print(counts)
    for count in counts.values():
        if count != 2:
            return 0
    return 1
print(isDual2([1, 2, 1, 3, 3, 2]))


from datetime import datetime 
# Question 6
# ● Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
#       ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45secs.
#       ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
#       ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
def digitalClock(sec):
    time_str = datetime.fromtimestamp(sec).strftime("%H:%M:%S")
    return time_str
#print(digitalClock(87000))

