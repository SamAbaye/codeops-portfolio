import numpy

#First i created a dictionary called customer, where the key is the name of the customer and the value is a list of transactions. 
# Then i created another dictionary called customer_updated, where the key is the name of the customer and the value is the total of all transactions. 
# Finally i sorted the customer_updated dictionary by value in descending order and printed it.

try:
    with open('transaction.txt') as transaction:
        customer = {}
        customer_updated = {}
        for line in transaction:
            name, *transaction = line.split()
            customer[name] = transaction

    #I created a variable called total and set it to 0, then i iterated through the customer dictionary and summed the values of each transaction and added it to the total variable. 
    #Then i added the total to the customer_updated dictionary with the key being the name of the customer.
    total = 0    
    for key, value in customer.items():
        total += sum(map(int, value))
        customer_updated[key] = total


    #I googled this part because i had no idea how to sort a dictionary by value, and I found this solution on stackoverflow.com
    final_customer = dict(sorted(customer_updated.items(), key=lambda item: item[1], reverse=True))

    #I created a file called report.txt and opened it in write mode, then i iterated through the final_customer dictionary and wrote the key and value to the file.
    #Added the If statement to check if the file already exists, if it does not exist it will create the file and write the data to it, if it does exist it will append the data to the file.
    if not 'report.txt':
        with open('report.txt', 'x'):
            for key, value in final_customer.items():
                with open('report.txt', 'a') as report:
                    report.write(f"{key} {value}\n")

except FileNotFoundError:
    print("File not found")

except ValueError:
    print("Value error occurred")

else:
    print("File processed successfully")

finally:
    print("Execution completed")





        

        



        
        

