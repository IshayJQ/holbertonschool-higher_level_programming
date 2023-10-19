#!/usr/bin/python3
"""
Creating a class that represents a square
"""

class Square:
    """
    The class that represents a square
    """
    pass
Square = __import__('0-square').Square

my_square = Square()
print(type(my_square))
print(my_square.__dict__)

