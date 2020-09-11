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
});
