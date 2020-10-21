'use strict';

const ht = require('../hashTable/hashTable');
const joinLeft = require('../joinLeft/joinLieft')

describe('iteration Sorting for arrays',()=>{
  let ht1=new ht(1024);
  ht1.add('fond','enamored');
  ht1.add('warth','anger');
  ht1.add('diligent','employed');
  ht1.add('outfit','grab');
  ht1.add('guide','usher');

  let ht2=new ht(1024);
  ht2.add('fond','averse');
  ht2.add('warth','delight');
  ht2.add('diligent','idle');
  ht2.add('flow','jam');
  ht2.add('guide','follow');

  it('the iteration sort algoritm return the array sorted incremently',()=>{
    expect(joinLeft(ht1,ht2).get('fond')[0]).toEqual('enamored');
    expect(joinLeft(ht1,ht2).get('fond')[1]).toEqual('averse');
  });
});