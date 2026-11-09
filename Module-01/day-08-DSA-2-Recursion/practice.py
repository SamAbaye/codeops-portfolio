# Recursive sum

def sum(list_nums):
    if not list_nums:
        return 0
    else:
        return list_nums[0] + sum(list_nums[1:])
# Count down   
def count_down(n):
    print(n)
    if n == 1:
        return
    else:
        count_down(n-1)

#print(count_down(9))
print(f'The Sum is: {sum([1,2,3,4,11, 34, 5,6,7])}')

#Implement binary_search(items, target) on a sorted list

def binary_search(items, target):
    lo = 0
    hi = len(items) - 1

    while lo <= hi:
        mid = int((lo + hi )/2)
        if items[mid] == target:
            return 1
        elif items[mid] > target:
            hi = mid -1
        else:
            lo = mid + 1
    return -1

print(binary_search([1,2,3,4,5,6,7,8,9], 10))

#Implement merge_sort(items) and its merge helper

def merge_sort(items):
    if len(items) <= 1:
        return items
    mid = int(len(items) / 2)
    left_half = items[:mid]
    right_half = items[mid:]

    sorted_left = merge_sort(left_half)
    sorted_right = merge_sort(right_half)

    return merge(sorted_left, sorted_right)


def merge(left, right):
    sorted_array = []
    i = j = 0

    # Compare elements from both halves and append the smaller one
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_array.append(left[i])
            i += 1
        else:
            sorted_array.append(right[j])
            j += 1

    # If there are remaining elements in left, append them
    sorted_array.extend(left[i:])
    
    # If there are remaining elements in right, append them
    sorted_array.extend(right[j:])

    return sorted_array

print(merge_sort([1,12,31,4,11,34, 5,6,7]))

#Given a list of (name, balance) tuples, sort it by balance descending using sorted(key=...). 
accounts = [
    {"name": "Alice", "balance": 300},
    {"name": "Bob", "balance": 100},
    {"name": "Charlie", "balance": 500}
]

sorted_by_balance = sorted(accounts, key=lambda x: x["balance"])
print(sorted_by_balance)


sorted_descending = sorted(accounts, key=lambda x: x["balance"], reverse=True)
#. Write has_pair(nums, target) for a sorted list, returning whether two values sum to the target. 
nums = [100, 120, 150, 200, 250, 300]
def has_pairs(nums, target):
   lo = 0
   hi = len(nums) - 1
   while lo <= hi:
    current_sum = nums[lo] + nums[hi]
    print(f'hi: {hi} lo: {lo}')

    print(current_sum)
    if current_sum == target:
        return 1
    elif current_sum < target:
        lo += 1
    else:
        hi -= 1
   return -1
print(has_pairs(nums, 350))
