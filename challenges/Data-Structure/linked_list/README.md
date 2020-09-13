## Challenge 5
# linked list
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency
this Challenge take from me 20 min including tow ways to do that
I used in the first way for loop
and in the other way I used some mathhimatical logic to do so

## Solution

psudo code :
* create a class for Nodes that contain Head and next as property
* require it in a new class called linked list that contain the head as a property
* create a method iside the linked list class called insert to insert values into the linked list
* the insert method must take tow params the value and the next
* so in the insert method , create new instance of the node classe and give it the value as and giv it the head of the linked list as a value of the next property 
* then giv the head of the linked list a value of the new node 
* then create new method called includes which take in a value as a property and return true or false depending on if the value is exist ibn the linked list as a value of a node or not
* so inside the includes methode define new variable called currentNode and giv it the value of the head of the linked list
* now we need to see if the value of the current node  = the value that we are looking for then it return true else 
* the currentNode = currentNode.next
* and will repeat this process as long until the value of the current node become null which means the end of the linked list
* after that create a new method called toString this method should return the values of all the nodes in the linked list on this form `"{ a } -> { b } -> { c } -> NULL"`
* insed the toString method define variable called currentNode that equals to the head of the list .
* create new variable called myString that equals empty string
* now we need to make myString = mystring + `{ the value of the currentNode } -->` .
* and after currentNode = currentNode.next and erpeat that until the value of the current node equals 'Null'
* at the end of ther method and before returning myString we need to add to myString new value
`mystring =mystring + 'NULL'` .
* Add new method to the linked list class that called `append(val)` to Add new node to the end of the linked list
and takes in a value as a parameter.
* create new instance from the node classe and give it the new value as a value and null as a next
*  in the append methiod we will define new variable `currentNode` that equals the head of the and check `currentNode.next` is null
then the `currentNode.next = newNode` if not loop in the linked list until it happend
* after that we need to create new method that call `insertBefore(value, newVal)` which add a new node with the given `newValue` immediately before the first `value` node
* now in the the insertBefore method we will create new instane of the the Node class that take a `newVal` as value and null as next
* and define new variable called transNode = the head of the linked list
* and define a variable vall myNode
* now if the value of the `transNode` = the `value` then the `myNode = transNode.next`
* then `newNode.next = myNode`
* and then `transNode.next = newNode`
![insert](./assets/linkedList1.PNG)
![include](./assets/linkedList2.PNG)
![include](./assets/linkedList3.PNG)