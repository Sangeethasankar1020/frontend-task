##i=1
##while i<=10:
##    print(i)
##    i=i+1

##i=10
##while i!=0:
##    print(i)
##    i=i-1

#task -02
#sum of all positve integers untill the user enters 0

##number=int(input("enter a number"))
##sum=0
##
##while number!=0:
##    sum=sum+number
##    number=int(input("enter a number"))
##
##print("the sum is:",sum)

##task-03

##i=0
##sum=0
##while i<=50:
##    i=i+1
##    if i%2==0:
##        sum=sum+i
##        
##print(sum)
#----------------
#sum of odd num from 1 to 50
##i=0
##sum=0
##while i<=50:
##    i=i+1
##    if i%2 !=0:
##        sum=sum+i
##print(sum)


#task -04

##number=int(input("enter a number"))
##sum=0
##while number>0:
##    sum=sum+number
##    number=int(input("enter a number"))
##print(sum)


#task -05

##number=int(input("enter a positive number"))
##i=0
##sum=0
##while i<=number:
##    s=i**2
##    sum=sum+s
##    i=i+1
##print(sum)

#task -06

##newPassword=input("enter a password")
##password="Sangee@2001"
##while newPassword!=password:
##    newPassword=input("enter a password")
##else:
##    print("entered correct password")

#task-07

number = int(input("Enter a number: "))
reversed_number = 0
original_number = number
while number > 0:
    digit = number % 10
    reversed_number = reversed_number * 10 + digit
    number = number // 10
print("Reversed number of", original_number, "is:", reversed_number)
