# ooops
class Student:
    name = ""
    rollNo = ""
    age = ""
    depart=""
    count = 0
    clgName = "Anna University - guindy "

# constructor
    def __init__(self, name, rollNo, age, depart):
        self.name = name
        self.rollNo = rollNo
        self.age = age
        self.stdClass = depart
        Student.count += 1

    def getDetails(self):
        print(self.name)
        print(self.rollNo)
        print(self.age)
        print(self.clgName)

    def updateDetials(self,upName,upRollNo,age,upDepart):
        self.name=upName
        self.rollNo=upRollNo
        self.age=age
        self.depart=upDepart

# to display all details in one line

    def __str__(self):
        return f"{self.name}({self.rollNo})({self.age})({self.clgName})({self.depart})"

Sangeetha = Student("sangeetha", 31, 22,"BE-ECE")
Divakar=Student(" Krishna Divakar",32,18,"Btech-IT")
AllanRaj=Student("Allan Raj",33,21,"BE - CSE")

Sangeetha.getDetails()
#updating 
Sangeetha.updateDetials("sharmila",31,21,"BE-IT")
#updated data
Sangeetha.getDetails()

# str print
# print(Sangeetha)


