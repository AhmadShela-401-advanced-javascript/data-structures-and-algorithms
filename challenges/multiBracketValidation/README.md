# Code Challenge: Class 13

## Problem Domian :

make sure that the brackets in the string are balanced

## challenge :

make function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets

* Round Brackets : `()`
* Square Brackets : `[]`
* Curly Brackets : `{}`

## I/O :

`strint` ==> `boolean`

## visual :

`()[[Extra Characters]]` ==> `true`

## Algorithm :

1- create a function takes in a string as argument
2- apply regix rules on the input to return to us array of the characters that we wated in the regix
3- create new instance of stack class
4- create 3 objects that have 2 properties `open` and `clode` and the value will be the opened bracket and closed bracket in order
`Round Brackets`
`Square Brackets`
`Curly Brackets`
4- for loop throgh the Array
5- if the array item = any of the above objects open value push it to the stack
6- else check if the object equals the top of the stack closed value
7- if it is true pop the top out of the stack else return false
8- after the loop make sure that the stack is empty and if it is not return false