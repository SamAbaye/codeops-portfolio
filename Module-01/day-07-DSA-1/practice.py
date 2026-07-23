# 1. Name the Big-O. For five short snippets (a list index, a single loop, a nested loop, a dict 
# lookup, a binary search), write the Big-O of each as a comment and explain why. 

# Answers: - list index(O(1)), a single loop(O(n)), a nested loop(O(n^2)), a dict lookup (O(1)), a binary search(O(log n))

# 2. List vs. dict lookup. Build a list and a dict of 100,000 fake account numbers. Time how long it takes to find one near the end in each. 

# 3. Build a stack. Write a Stack class with push, pop, and peek, and use it to reverse a list of 
# names. 

import collections


num = [1,2,3,45,6]
class Stack:
    def __init__(self, stack):
        self.stack = stack
        self.updated_stack = []

    def reverse(self):
        while len(self.stack) > 0 :
            pop = self.stack.pop()
            push = self.updated_stack.append(pop)
        return self.updated_stack

stack = Stack(num)
print(stack.reverse())

collections.deque
# 4. Build a queue. Use collections.deque to model a bank service line: enqueue five customers, 
# then serve them in order. 

bank_line = collections.deque()

bank_line.append("Samson 1")
bank_line.append("Samson 2")
bank_line.append("Samson 3")
bank_line.append("Samson 4")

while bank_line:
    current_customer = bank_line.popleft()
    print(f'Now Serving: {current_customer}')
print("All Customers have been served and the line is clear!")

# 5. Singly linked list. Implement a Node and a LinkedList with push_front and a print_all() that 
# walks the chain. 

