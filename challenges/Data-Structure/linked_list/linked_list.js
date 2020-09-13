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
    }
}

module.exports = LinkedList;