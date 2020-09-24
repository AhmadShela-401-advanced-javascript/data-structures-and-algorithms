# Challenge 15

## Problem Domain 

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a BinaryTree class
Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

Create a BinarySearchTree class
Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Big O() :

Big O(n)

## I/O :

value ==> tree

## Algorithm :

* create Node class that contains `left` and `value` and `right` values
* create BinaryTree class that hav a `root`
* in the BinaryTree class create new method called `preOrder`
which return an arrat of node values 
* add new method called `postOrder` return an array of node values
* add new method called `inOrder` that return as array ofnodes values
* create new class called BinarySearchTree
that have a root value of null
* add new method called `add` to add values to the binarySearhTree
* add new method called `contains` takes in a value and return true if it is exist in the binarySearchTree and false if it is not