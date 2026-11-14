
from logging import root

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = Node(value)
                return self.left
            else:
                self.left.insert(value)
                return self.left
        if value > self.value:
            if self.right is None:
                self.right = Node(value)
                return self.right
            else:
                self.right.insert(value)
                return self.right

values = [20,10,50,30,79]

root = Node(11)
new_tree = []
for value in values:
    root.insert(value)

print(root.left)
