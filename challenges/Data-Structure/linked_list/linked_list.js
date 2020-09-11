'use strict';

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
}

module.exports = LinkedList;