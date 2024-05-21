# task-01 square pattern

##n=4
##for i in range(n):
##    for j in range(n):
##        print("*",end='') #end='' prevent nxt line
##    print()


#in while

##n=4
##i=0
##while i<4:
##    j=0
##    while j<4:
##        print("*",end='')
##        j=j+1
##    print()
##    i=i+1


#task -02 # Right-Angled Triangle Pattern

##n=5
##i=0
##for i in range(n):
##    for j in range(i):
##        print("*",end='')
##    print()
##
###in while loop
##
##n=4
##
##i=0
##while i<=n:
##    j=0
##    while j<i:
##        print("*", end='')
##        j=j+1
##    print()
##    i=i+1

#task -03 Inverted Right-Angled Triangle Pattern

##n=4
##for i in range(n,0,-1):
##    for j in range(i):
##        print("*",end='')
##    print()
##  
###in while

##n=4
##i=n
##while i>0:
##    j=0
##    while j<i:
##        print("*",end='')
##        j=j+1
##    print()
##    i=i-1

#task -04 Pyramid Pattern

##n = 4
##for i in range(1, n + 1):
##    # Print leading spaces
##    for j in range(n - i):
##        print(' ', end='')
##    # Print stars
##    for k in range(2 * i - 1):
##        print('*', end='')
##    print()

#in while loop
n = 4
i = 1
while i <= n:
    j = 0
    while j < n - i:
        print(' ', end='')
        j += 1
    k = 0
    while k < 2 * i - 1:
        print('*', end='')
        k += 1
    print()
    i += 1
