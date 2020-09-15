# ll-Zip

# problem Domain:
zip tow givin linked lists togather and return the zipped list

# challenge :
Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
# I/O :

I : tow linked lists
O : zipped linked list

# visual : 

head -> [1] -> [3] -> [2] -> X
                                    ========> head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X
head -> [5] -> [9] -> [4] -> X

# solution :

* create a function named `ll-Zip` that takes tow linked lists as a parameters 
* define tow variable called `firstListsNode` and `secListsNode` that have an initial value
* create  new instance of the linked list class
fisrtList.head and secList.head
* loop through the first list and `append` the nodes one by one
* loop through the secound list and `append` the nodes one by one
* return the newList