'use strict';
const LinkedList = require('../challenges/Data-Structure/linked_list/linked_list');
require('../challenges/ll_zip/ll_zip');
describe('llZip',()=>{
  it('llZip return zipped list',()=>{
    let firstList = new LinkedList();
    let secList = new LinkedList();
    firstList.append(1);
    firstList.append(3);
    firstList.append(5);
    secList.append(2);
    secList.append(4);
    secList.append(6);
    console.log('firstList',firstList);
    console.log('secList',secList);
    // expect(ll_Zip(firstList,secList).head).toEqual(1)
    // console.log(ll_Zip(firstList,secList));;
  });
});