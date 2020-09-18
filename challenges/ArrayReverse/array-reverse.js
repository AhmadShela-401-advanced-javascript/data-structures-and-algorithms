/* eslint-disable no-unused-vars */
'use strict';

// this function to return the revers of an array
function reverseArray(arr) {
  var reversArr = [] ;

  for (let i = 0; i < arr.length; i++) {

    reversArr.push(arr[(arr.length -1) - i]);
      
  }
  return reversArr;
}
// streach goal
function reverseArray2(arr) {
  var reversArr = arr ;
  var tempVal = 0;
  var rounds;
  if(arr.length%2 == 0){ // even
    rounds = (arr.length) / 2;
  }else{                 // odd
    rounds = (arr.length -1) / 2;
  }
  for (let i = 0; i < rounds; i++) {
    tempVal = reversArr[i]; 
    reversArr[i] = reversArr[(arr.length -1) - i];
    reversArr[(arr.length -1) - i] = tempVal;
  }
  return reversArr;
}