const quickSort = require('./quickSort');
const arr = [4,5,6,1,2,3];

describe('iteration Sorting for arrays',()=>{
  it('the iteration sort algoritm return the array sorted incremently',()=>{
    expect(quickSort(arr)).toEqual([1,2,3,4,5,6]);
  });
});