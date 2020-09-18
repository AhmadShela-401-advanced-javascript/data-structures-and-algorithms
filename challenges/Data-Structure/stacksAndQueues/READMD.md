# challange 10

Problem Domain :

Start working with `Stacks` and `Queues`

# Challange :

to create new classes for staks and queues and add the methods that controls them.

# solution :

Create a Stack class that has a top property. It creates an empty Stack when instantiated..

This object should be aware of a default empty value assigned to top when the stack is created.
 
start add the methods :

## Push() :

### problem Domain :

Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.

### Big O :

Big O(1)

### I/O :

I : value
O : stack

### Visual :

[1] =>[2] =>[3] =>Null  push(4) [1] =>[2] =>[3] =>[4] => Null

### Algorithm :

1- define new instace of the `Node` class `newNode` with the value
2- assign the `newNode` to the stack `top`
3- increase the stack `length` by 1
4- return the stack

## is(Empty) :

### problem Domain :

Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

### Big O :

Big O(1)

### I/O :

I : stack
O : boolean

### Visual :

[1] =>[2] =>[3] =>Null  isEmpyt() => false

### Algorithm :

1- return true if the stack length > 0 and else return false

## pop() :

### problem Domain :

Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Should raise exception when called on empty stack

### Big O :

Big O(1)

### I/O :

I : No input
O : stack

### Visual :

[1] =>[2] =>[3] =>Null  push(4) [1] =>[2] => Null

### Algorithm :

1- check if the stack is empty rais a Range error
2- define new variable `allValues` = the next value of the top Node in the stack
3- assign the allValues variable to the `Top` of the stack
4- decrese the length by one;
5- return the stack

## peek() :

### problem Domain :

Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
Should raise exception when called on empty stack

### Big O :

Big O(1)

### I/O :

I : No input
O : stack

### Visual :

[1] =>[2] =>[3] =>Null  peek() => 1

### Algorithm :

1- check if the stack is empty rais a Range Error
2- return the top node's vlaue

#### ***********************************************

Create a Queue class that has a front property. It creates an empty Queue when instantiated.

# Queues Methods :


## enqueue() :

### problem Domain :

Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

### Big O :

Big O(1)

### I/O :

I : value
O : stack

### Visual :

[1] =>[2] =>[3] =>Null  push(4) [1] =>[2] =>[3] =>[4] => Null

### Algorithm :

1- define new instace of the `Node` class `newNode` with the value
2- check if the queue `front` is not null
assing the newNode to the rare and
assign the rare to the front.next
else
assign the newNode to the rare and front of the queue
ass
3- increase the queue `length` by 1
4- return the queue

## is(Empty) :

### problem Domain :

Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

### Big O :

Big O(1)

### I/O :

I : queue
O : boolean

### Visual :

[1] =>[2] =>[3] =>Null  isEmpyt() => false

### Algorithm :

1- return true if the queue length > 0 and else return false

## dequeue() :

### problem Domain :

Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
Should raise exception when called on empty queue

### Big O :

Big O(1)

### I/O :

I : No input
O : queue

### Visual :

[2] =>[3] =>Null  push(4) [1] =>[2] =>[3] => Null

### Algorithm :
1- define new varible equals the front.next
2- check if the stack is empty rais a Range error
3- define new variable `restValues` = the next value of the front Node in the queue
4- assign the restValues variable to the `front` of the stack
5- decrese the length by one;
6- return the deletedValue

## peek() :

### problem Domain :

Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
Should raise exception when called on empty queue

### Big O :

Big O(1)

### I/O :

I : No input
O : queue

### Visual :

[1] =>[2] =>[3] =>Null  peek() => 1

### Algorithm :

1- check if the queue is empty rais a Range Error
2- return the top node's vlaue