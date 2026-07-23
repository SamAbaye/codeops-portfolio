import heapq

class Node:
    def __init__(self, item_dict):
        self.value = item_dict  
        self.key = list(item_dict.keys())[0]  
        self.left = None
        self.right = None


def insert(node, new_item_dict):
    if node is None:
        return Node(new_item_dict)
    
    new_key = list(new_item_dict.keys())[0]

    if new_key < node.key:
        node.left = insert(node.left, new_item_dict)
    else:
        node.right = insert(node.right, new_item_dict)
        
    return node


def in_order(node): 
    if node is None:        
        return 
        
    in_order(node.left)    
    print(node.value)      
    in_order(node.right)   

def height(node):
    if node is None:
        return -1
    else:
        return 1 + max(height(node.left), height(node.right))

from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    
    while queue:
        vertex = queue.popleft()
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
                
    return visited

def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
            
    return visited



task_queue = []

heapq.heappush(task_queue, (3, "Write documentation"))
heapq.heappush(task_queue, (1, "Fix critical bug"))
heapq.heappush(task_queue, (4, "Refactor code"))
heapq.heappush(task_queue, (2, "Review pull request"))
heapq.heappush(task_queue, (5, "Answer emails"))

print("Items popped by priority:")

while task_queue:
    priority, task = heapq.heappop(task_queue)
    print(f"Priority {priority}: {task}")


root = Node({'CBE-2': ("Samson", 2000)})


insert(root, {'CBE-1': ("Alice", 5000)})  
insert(root, {'CBE-3': ("Bob", 500)})      

print("In-Order Traversal Result:")
in_order(root)




