# Code Challenge: Class 11

## Challenge :

Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

`enqueue(value)` which inserts value into the PseudoQueue, using a first-in, first-out approach.
`dequeue()` which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## enqueue(value) : 

### Problem Domain :

insert value into a queue using a first-in, first-out approach

### I/O :

[10]->[15]->[20]  enqueue(5)  [5]->[10]->[15]->[20]

### Big O :

Big O(1)

### Algorith :

create a function that use the stck function `push` to add given value

## dequeue() : 

### Problem Domain :

delete value from a queue using a first-in, first-out approach

### I/O :

[5]->[10]->[15]->[20]  dequeue()  [5]->[10]->[15])

### Big O :

Big O(n)

### Algorith :

create a function that loop throw the stack1
and each time push the value to the stack2
until stack2 will be the revers of the stak1 exept of the last value
then define a fuction and giv it the value of the deleted vode
and return that variable