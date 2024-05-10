# reduce
from functools import reduce
def addNumbers(x, y):
    return x + y
inputList = [12, 4, 10, 15, 6, 5]
print("The sum of all list items:")
print(reduce(addNumbers, inputList))
