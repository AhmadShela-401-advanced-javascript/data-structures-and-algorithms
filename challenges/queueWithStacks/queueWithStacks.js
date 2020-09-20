'use strict';

const Stack = require('../Data-Structure/stacksAndQueues/stacksAndQueues').Stack

class PseudoQueue{
    constructor(){
        this.stack1 = new Stack;
        this.stack2 = new Stack;
    }
    enqueue(value){
        this.stack1.push(value);
    }
    dequeue(){
        let newStack = new Stack;
        let currentNode = this.stack1.top;
        var deletedValue ;
        while(currentNode){
            if(! currentNode.next){
                deletedValue = currentNode.value
            }
            newStack.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log('>>>>>this.stack1',this.stack1);
        console.log('>>>>>newStack',newStack);
        this.stack1 = newStack
        return deletedValue;
    }
    // dequeue() {
    //     if (!this.stack1.top) {
    //       throw new RangeError('Cannot dequeue from an empty queue!');
    //     }
    
    //     let currentNode = this.stack1.top;
    //     while (currentNode) {
    //       currentNode = currentNode.next;
    //       this.stack2.push(this.stack1.pop().top);
    //     }
    
    //     let result = this.stack2.pop().top;
    
    //     currentNode = this.stack2.top;
    //     while (currentNode) {
    //       currentNode = currentNode.next;
    //       this.stack1.push(this.stack2.pop().top);
    //     }
    //     console.log('>>>>>this.stack1',this.stack1);
    //     console.log('>>>>>newStack',this.stack2);
    //     return result;
    //   }
}

module.exports = PseudoQueue;