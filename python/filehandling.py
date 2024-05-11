# file handling

# we can read any file file python , txt
# we use file handling to store like database
f=open("tuple.py")
print(f.read())
f.close()

# we can also read image file in binary format
img=open("./src/sample.jpg","rb")
print(img.read())
img.close()

#
demo=open("./filehandling_sample_files/demo.txt","t+r")
print(demo.read(5))
demo.close()
#
demoReadline=open("./filehandling_sample_files/demo.txt","t+r")
print(demoReadline.readline())
print(demoReadline.readline())
demoReadline.close()
# we can also loop
demoReadline = open("./filehandling_sample_files/demo.txt", "t+r")
for x in demoReadline:
    print(x)
demoReadline.close()
