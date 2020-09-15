'use strict';

const list = require('../Data-Structure/linked_list/linked_list.js')
// const ll = new list();

const ll_Zip = function (list1,list2) {
    console.log('>>>>>>>>> LL',list1);
    var zippedList = new list();
    var firstLL = list1;
    var secLL = list2;
    var firstListNode = firstLL.head;
    var secListNode = secLL.head;

    while(firstListNode || secListNode){
        zippedList.append(firstListNode.value);
        zippedList.append(secListNode.value);
        firstListNode = firstListNode.next
        secListNode = secListNode.next
    }
    return zippedList;
    
}

module.exports = ll_Zip;