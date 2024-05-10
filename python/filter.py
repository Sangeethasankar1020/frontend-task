def even(x):
    return x%2 ==0
numbers=[1,2,3,4]
filteredNum=filter(even,numbers)
print(list(filteredNum))
