
# Mitch Hall 
##### Codefellows 401 FullStack Javascript
##### Lab 01


Answers:

The function printGreeting can be called before the function is actually written due to the JavaScript concept of hoisting. When a Javascript module is first read into system memory two passes are made over the file. The first pass identifies all the declared functions and variables. Because this function was specifically declared as a function it was read into system memory as a function. So when the second pass was made and the function was called, the system already knew the function existed so calling the function before it was written so when it is called the processor knows what function is related to the call. 

The function printGoodbye cannot be called before the function is written because the function was not specifically declared as a function. It was assigned to a variable so the system knows the variable exists from the first pass, but not that the variable is actually a function.


