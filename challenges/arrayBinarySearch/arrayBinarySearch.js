'use strict';

// function BinarySearch(storedArray,searchKey){
//     var result;
//       storedArray.forEach(item =>{
//         if(item == searchKey){
//           result = item;
//         }
//       })
    
//       if (!result){
//         result = -1;
//       }
//       return result;
//     }
let BinarySearch = function (arr, x, start, end) { 
       
  // Base Condition 
  if (start > end) return false; 
 
  // Find the middle index 
  let mid=Math.floor((start + end)/2); 
 
  // Compare mid with given key x 
  if (arr[mid]===x) return arr[mid]; 
        
  // If element at mid is greater than x, 
  // search in the left half of mid 
  if(arr[mid] > x)  
      return BinarySearch(arr, x, start, mid-1); 
  else

      // If element at mid is smaller than x, 
      // search in the right half of mid 
      return BinarySearch(arr, x, mid+1, end); 
} 