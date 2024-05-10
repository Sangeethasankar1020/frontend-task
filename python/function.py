# function
# A simple Python function
def fun():
    print("Welcome to GFG")
fun()

# types
# 1.default
def myfunc(a=7,b=8):
    print(a+b)
myfunc()
# 2.keyword
def myfunc(name,age):
    print(name,age)
myfunc(name="sangeetha",age=22)
# 3.arbitary
def myfunc(*number):
    result=0
    for x in number:
        result=result+x
    print(result)

myfunc(2,2,2,2)
myfunc(3,4,5)
#4.required
def myfun(a,n):
    print(a,n)
myfun(2,3)
