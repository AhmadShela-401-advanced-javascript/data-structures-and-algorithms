'use strict';

function insertShiftArray(arr, val) {
    var newArr = [];
    var myIndex = 0;
    var x ;
    if (arr.length % 2 == 0) {
        myIndex = (arr.length / 2) + 1;
        // console.log(myIndex)
    } else {
      // console.log('odd')
        myIndex = ((arr.length - 1) / 2) + 1;
        console.log(arr.length)
    }
    x= Math.floor(arr.length/2)
    // console.log(x)
    for (let i = 0; i < arr.length; i++) {
      if( i == x -1){
        newArr.push(arr[i])
        newArr.push(val)
      }else{
        newArr.push(arr[i])
      }
    }
    // console.log('finish')
    return newArr;
}

function deleteShiftArray(arr) {
  var newArr = [];
  var myIndex = 0;
  var x ;
  if (arr.length % 2 == 0) {
      myIndex = (arr.length / 2) + 1;
      // console.log(myIndex)
  x= Math.floor(arr.length/2) +1
  } else {
    // console.log('odd')/
      myIndex = ((arr.length - 1) / 2) + 1;
      // console.log(arr.length)
  x= Math.floor((arr.length/2)+1)
  }
  // console.log(x)
  for (let i = 0; i < arr.length; i++) {
    if( i == x -1){
    
    }else{
      newArr.push(arr[i])
    }
  }
  // console.log('finish')
  return newArr;
}
