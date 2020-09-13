'use strict';

const LinkedList = require('../challenges/Data-Structure/linked_list/linked_list');

describe('linked list module', () => {
    let list = new LinkedList();
    it('Can successfully instantiate an empty linked list', () => {
        expect(list.head).toBeNull();
    });
    it('Can properly insert into the linked list',()=>{
        list.insert(15);
        list.insert(20);
        expect(list.head.value).toEqual(20);
    })
    it('The head property will properly point to the first node in the linked list',()=>{
        list.insert(10);
        expect(list.head.value).toEqual(10);
    })
    it('Will return true when finding a value within the linked list that exists',()=>{
       expect(list.includes(15)).toBeTruthy();
    })
    it('Will return true when finding a value within the linked list that exists',()=>{
        expect(list.includes(1)).not.toBeTruthy();
     })
    it('Can properly return a collection of all the values that exist in the linked list',()=>{
        expect(list.tostring()).toEqual('{10} -> {20} -> {15} -> NULL')
    })
    it('the append method add the value to the end of the linked list',()=>{
        list.append(5);
        let currentNode = list.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        expect(currentNode.value).toEqual(5)
    })
    it('the insertBefore method add the newVal right befoer the val',()=>{
        //insertBefore(value, newVal)
        list.insertBefore(5,6);
        let currentNode = list.head
        while(currentNode.value != 6){
            currentNode = currentNode.next
        }
        console.log(currentNode);
        expect(currentNode.next.value).toEqual(5)
    })
    it('the insertAfter method add the newVal right After the val',()=>{
        //insertBefore(value, newVal)
        list.insertAfter(6,7);
        let currentNode = list.head
        while(currentNode.value != 6){
            currentNode = currentNode.next
        }
        console.log(list);
        expect(currentNode.next.value).toEqual(7)
    })
});
