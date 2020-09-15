'use strict';
/**
 * 
 * Methods :
 * insert(value)  to add a node to the beginning of the linked list
 * includes(value) to search for a value in a linked list
 * tostring() to return all the value of the linked list as one chained string
 * append(value) to add new Node to the end of the linked list
 */
const { wheat } = require('color-name');
const Node = require('./node.js');

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    insert(val){
    let newNode = new Node(val,this.head);
    this.head = newNode;
    this.length++;
        return this;
    }
    includes(val){
        let currentNode = this.head
        while(currentNode){
            if(currentNode.value == val){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;

    }
    tostring(){
        let string = '';
        let currentNode = this.head
        while(currentNode){
            string = string + `{${currentNode.value.toString()}} -> `
            currentNode = currentNode.next;
        }
        string = string + 'NULL';
        return string;
    }
    append(val){
        //  new Node(val);
        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = new Node(val)
        this.length++;
    }
    insertBefore(value, newVal){
        let targetNode ;
        let currentNode = this.head
        while(currentNode.next.value != value){
            currentNode = currentNode.next
        }
        targetNode = currentNode.next
        let newNode = new Node(newVal,targetNode)
        currentNode.next = newNode;
        this.length++;
    }
    insertAfter(value, newVal){
        let targetNode ;
        let currentNode = this.head
        while(currentNode.value != value){
            currentNode = currentNode.next
        }
        targetNode = currentNode.next
        let newNode = new Node(newVal,targetNode)
        currentNode.next = newNode;
        this.length++;
    }
    kthFromEnd(k){
        if (typeof k != 'number') { throw Error('K must be a number'); }

        if (k < 0) {
            throw Error('Value can not be less than 0');
        }

        var arrLength = 0;
        var currentNode = this.head;
        while(currentNode){
            currentNode = currentNode.next;
            arrLength++;
        }
        if (k > arrLength) {
            console.log('>>>>>>>>>>>>>>arrLength',arrLength);
            console.log('>>>>>>>>>>>>>>k',k);
            throw Error('Value aout of range');
        }
        arrLength--;
        arrLength = arrLength - k;
        currentNode = this.head
        for (let i = 0; i < arrLength; i++) {
            currentNode = currentNode.next
        }
        return currentNode.value;

    }
}

module.exports = LinkedList;