'use strict';

function leftJoin(ht1,ht2){
  ht1.entries.forEach(item=>{
    let key =Object.keys(item.head.value)[0];
    let value=item.head.value[key];
    let secondValue=ht2.get(key)==='Key not found' ? null : ht2.get(key);
    ht1.update(key,[value,secondValue]);    
  });
  return ht1;
}

module.exports = leftJoin;