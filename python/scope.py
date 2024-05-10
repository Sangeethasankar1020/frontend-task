#local scope
def myfunc():
    x=3
    print(x)
myfunc()

#global
x="sangeetha"
def myfunc():
    print(x)
myfunc()
print(x)