# import module

import modules
print(modules.add(10, 2))
print(modules.sub(5,3))

# importing specific attribute

from math import factorial , sqrt 
print(sqrt(81))


# * symbol for import all names
from math import *
print(sqrt(100))
print(factorial(5))

# lists of dictionaries for module
import sys

print(sys.path)

# renaming the python module
import math as mh
print(mh.sqrt(4))
