#random module

import random

# Generate a random floating-point number between 0.0 and 1.0
print("Random float between 0.0 and 1.0:", random.random())

# Generate a random floating-point number between 1.5 and 3.5
print("Random float between 1.5 and 3.5:", random.uniform(1.5, 3.5))

# Generate a random integer between 10 and 20
print("Random integer between 10 and 20:", random.randint(10, 20))

# Generate a random element from a range with step
print("Random element from range(0, 100, 5):", random.randrange(0, 100, 5))

# Choose a random element from a list
choices = ['apple', 'banana', 'cherry', 'date']
print("Random choice from list:", random.choice(choices))

# Choose multiple random elements from a list with replacement
print("Random choices from list (with replacement):", random.choices(choices, k=3))

# Choose multiple unique random elements from a list
print("Random sample from list:", random.sample(choices, 2))

# Shuffle a list in place
random.shuffle(choices)
print("Shuffled list:", choices)

# Seed the random number generator
random.seed(42)
print("Random float with seed 42:", random.random())

# Demonstrate repeatability with the same seed
random.seed(42)
print("Random float with seed 42 again:", random.random())
