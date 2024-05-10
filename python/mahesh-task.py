#ooops
class student:
    name=""
    rollNo=""
    age=""
    count=0
    schoolName ="GGHSS"

    #constructor
    def _init_(self,name,rollNo,age):
        self.name=name
        self.rollNo=rollNo
        self.age=age
        student.count+=1

Sangeetha=student("sangeetha",1,21)

print(Sangeetha.name)
print(Sangeetha.rollNo)
print(Sangeetha.age)
print(Sangeetha.schoolName)


