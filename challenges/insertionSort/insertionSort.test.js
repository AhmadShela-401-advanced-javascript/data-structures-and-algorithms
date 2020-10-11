const insertionSort = require('./insertionSort');
const arr = [4,5,6,1,2,3];

describe('iteration Sorting for arrays',()=>{
  it('the iteration sort algoritm return the array sorted incremently',()=>{
    expect(insertionSort(arr)).toEqual([1,2,3,4,5,6]);
  });
});