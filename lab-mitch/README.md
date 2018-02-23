# Mitch Hall 
##### Codefellows 401 FullStack Javascript
##### Lab 02

The point of this lab is to look under the hood of the JavaScript Functional Programming array utilities to see how they are implemented.

The stated objective for the lab is:

Manually implement the functional Programming functions: .forEach, .map, .filter, .reduce. Put them in one module called fp that you can import and use in other modules.


The modules are listed below with I/O descriptions. 

### ForEach 

This module sets up a For Loop to cycle through the passed in array. It is used by the other modules to perform other operations on the array that will then return values.

Input: This function accepts a passed in function.

Output: There is no specific output for this function, but it will be used by the other functions.

### map 

This function goes through each item in the array and performs the user defined operation.

Input:
This function accepts an array as the input.

Output:
This functions outputs a new array of the same length as the inputted array but with some sort of transform performed on each item. 

### filter

This function goes through an array and pushes each item of that array into a new array that meet the criteria specified. IE, the item is an even number. 

Input:
This function accepts an array as an input.

Output:
This function outputs another array containing items that match the criteria specified by the user.

### reduce

This function takes in an array, and performs a user specified action on each item in the array and returns a single item.

Input: 
This function accepts an array as an input.

Output:
This function returns a single item, or value. IE the passed in array is: [3, 9, 5, 2] and the user specified task is to add all the items together, the output would be 19.