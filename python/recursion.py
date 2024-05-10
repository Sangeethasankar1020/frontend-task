# recursion
def factorial(n):
    # Base case: If n is 0 or 1, return 1
    if n == 0 or n == 1:
        return 1
    # Recursive case: Call the factorial function with n - 1
    else:
        return n * factorial(n - 1)


# Test the factorial function
print(factorial(5))  # Output: 120


