'use strict';

const Stack = require('./stacksAndQueues.js').Stack;
const Queue = require('./stacksAndQueues.js').Queue;
// const Node = require('../linked_list/node.js');
describe('Stacks And Queue',()=>{
  it('Can successfully push onto a stack',()=>{
    let newStack = new Stack();
    expect(newStack instanceof Stack).toBeTruthy();
  });
  it('Can successfully push value onto a stack',()=>{
    let newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.value).toEqual(1);
  });
  it('Can successfully push multiple values onto a stack',()=>{
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    expect(newStack.top.value).toEqual(2);
  });
  it('Can successfully pop off the stack',()=>{
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    expect(newStack.top.value).toEqual(1);
  });
  it('Can successfully empty a stack after multiple pops',()=>{
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    newStack.pop();
    expect(newStack.isEmpty()).toBeTruthy();
  });
  it('Can successfully peek the next item on the stack',()=>{
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    expect(newStack.peek().value).toEqual(1);
  });
  it('Calling pop or peek on empty stack raises exception',()=>{
    let newStack = new Stack();
    expect(()=> newStack.peek()).toThrow(RangeError); 
    expect(()=> newStack.pop()).toThrow(RangeError); 
  });
  it('Can successfully enqueue into a queue',()=>{
    let newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.front.value).toEqual(1);
  });
  it('Can successfully enqueue multible values into a queue',()=>{
    let newQueue = new Queue();
    newQueue.enqueue(1);
    console.log('>>>>>>>newQueue : ',newQueue);
    newQueue.enqueue(2);
    console.log('>>>>>>>newQueue : ',newQueue);
    expect(newQueue.rare.value).toEqual(2);
  });
  it('Can successfully dequeue out of a queue the expected value',()=>{
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.dequeue();
    expect(newQueue.front.value).toEqual(2);
  });
  it('Can successfully peek into a queue, seeing the expected value',()=>{
    let newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.peek()).toEqual(1);
  });
  it('Can successfully empty a queue after multiple dequeues',()=>{
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.isEmpty()).toBeTruthy();
  });
  it('Can successfully instantiate an empty queue',()=>{
    let newQueue = new Queue();
    expect(newQueue instanceof Queue ).toBeTruthy();
  });
  it('Calling dequeue or peek on empty queue raises exception',()=>{
    let newQueue = new Queue();
    expect(()=> newQueue.peek()).toThrow(RangeError); 
    expect(()=> newQueue.dequeue()).toThrow(RangeError); 
  });

});