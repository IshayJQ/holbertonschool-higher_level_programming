#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    
    if len(matrix) == 1 and len(matrix[0]) == 0:
        return print()
    else:
        for row in matrix:
            for col in range(len(row)):
                print("{:d}".format(row[col]), end=" ")
            print()
