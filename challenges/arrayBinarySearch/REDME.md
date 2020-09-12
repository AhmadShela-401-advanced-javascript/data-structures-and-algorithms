## Challenge 3
# array-binary-search
search for a value in a function 

## Challenge
Write a function called BinarySearch which takes in 2 parameters:
 a sorted array and the search key.
 Without utilizing any of the built-in methods available to your language
 return the index of the array’s element that is equal to the search key,
 or -1 if the element does not exist.

## Approach & Efficiency
this Challenge take from me 20 min including tow ways to do that
I used in the first way for loop
and in the other way I used some mathhimatical logic to do so

## Solution
iterate the array and each time check if the element equals the search key then return it else retur n -1
I/O:
the funbction take an array and a value and then return true or false
Visual:
[0,1,2,3],0 ---> true
psudo code : 
for loop on the array items 
let result
if item = key
item = result
after for loop ends 
it result has a value return it else result = -1 and return result
![alt text](./assets/binarySearch.PNG)