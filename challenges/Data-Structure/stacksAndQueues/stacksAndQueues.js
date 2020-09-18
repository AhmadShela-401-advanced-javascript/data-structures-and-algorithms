'use strict';

let Node = require('../linked_list/node');

class Stack{
  constructor(){
    this.top = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val,this.top);
    this.top = newNode;
    this.length++;
    return this;
  }
  isEmpty(){
    return this.length > 0 ? false : true;
  }
  pop(){
    if(! this.isEmpty()){
      let allValues = this.top.next;
      this.top = allValues;
      this.length--;
    }else{
      throw new RangeError('the Stack is empty');
    }
    return this;
  }
  peek(){
    if(this.isEmpty()){
      throw new RangeError('the stack is empty');
    }
    return this.top;
  }

}

class Queue{
  constructor(){
    this.front = null;
    this.rare = null;
    this.length = 0;   
  }
  enqueue(val){
    var newnode = new Node(val);
    if(this.front){
      this.rare = newnode;
      this.front.next = this.rare;
    }else{
      this.front = newnode;
      this.rare = newnode;
    }
    this.length++;
    return this;
  }
  isEmpty(){
    return this.length > 0 ? false : true;
  }
  dequeue(){
    if (this.isEmpty()){
      throw new RangeError('the Queue is empty !!');
    }
    let deletedValue = this.front.value;
    let restValues = this.front.next;
    this.front = restValues;
    this.length--;
    return deletedValue;
  }
  peek(){
    if (this.isEmpty()){
      throw new RangeError('the Queue is empty !!');
    }
    return this.front.value;
  }
}
// let newOBJ = new Stack();
// newOBJ.push(4);
// console.log(newOBJ);
// console.log('test is empty' , newOBJ.isEmpty());
// newOBJ.pop();
// console.log(newOBJ);
module.exports = { Stack,Queue };