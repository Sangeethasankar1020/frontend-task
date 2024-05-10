# variables
s = 3
s = 6
print(s)  # we can't reassign

s = 7
S = 9
print(s)  # case sensitive

x = 4  # int - integer
x = "sangeetha"  # alphabets - string
print(x)

# casting to declare the data type
x=str(3)
y=int(3)
z=float(3)
print(x)
print(y)
print(z)

# get tha type
x=5
y="shantha kumar"
print(type(x))
print(type(y))

# string declare single or double quotes
a="sangeetha"
b='gayu'
print(a)
print(b)
# multiple assign variables
x,y,z=4,5,7
print(x)
print(y)
print(z)

# assign one value
x=y=z=6
print(x)
print(y)
print(z)

# unpack a list
fruits=["banana","apple","grapes"]
x,y,z=fruits
print(x)
print(y)
print(z)

#output variables
x="python is awesome"
print(x)
#when we not use output variable
x="python "
y="is "
z="awesome "
print(x+y+z) # we can use + operator 
print(x,y,z)# comma also

#global variable
x="global"
def myfunction():
    x="local" # local we can call only here
    print(x)
myfunction()
print(x) # global we can use inside the function also

#global keyword - we can declare inside function like local by using global keyword
def myfunction():
    global x
    x="global keyword"
myfunction()
print(x)