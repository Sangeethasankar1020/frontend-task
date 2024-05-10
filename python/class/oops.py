#oops
# oops  =>class,function,inheritance,encapsulation,polymorphism,abstraction
# code reusablity
# oop => to solve the real world problems

# class is a group of variables and functions, constructor

class Student:

    #global variable
    name = "dasfra"
    studClass = ""
    rollNo= ""
    count = 0
    schoolName = "ghss"
    
    # constructor
    def _init_(self,name,age,rollNo):
        self.name= name
        self.age = age
        self.rollNo = 2
        Student.count +=1

    def setName(self,name):
        self.name = name
    def getName(self):
        print(self.name)
        return self.name
        
    
    


##allan = Student()
##print(allan.name)
##allan.setName("allan raj")
##diva = Student()
##diva.setName("krishnadivakar")
##diva.getName()

##allan = Student("allan raj",23,564)
diva = Student("krishnadivakar",20,564)
##ala
print(Student.count)
print(diva.schoolName)
studentName = diva.getName()
print(diva.rollNo)