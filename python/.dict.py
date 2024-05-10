# dictionary
thisdict = dict(name="John", age=36, country="Norway")
print(thisdict)

# accessing method
# 1
thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}
x = thisdict["model"]
print(x)
# 2
x=thisdict.keys()
print(x)
# 3
x=thisdict.get("year")
print(x)
# 4
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

x = car.keys()

print(x)  # before the change

car["color"] = "white"

print(x)  # after the change

#values
x=thisdict.values()
print(x)
