'use strict';

const {Graph} = require('../graph/graph');
const {Queue} = require('../Data-Structure/stacksAndQueues/stacksAndQueues');

class depthFirstGraph extends Graph {

  constructor(){
    super();
  }

  breadthFirst(node) {

    if (node.value == null || node == undefined) {

      return 'wrong input';
    }
  
    let arr = [];
    let complete = [];
    arr.push(node);
    // complete.push(node.value)
    // let current;
  
    while (arr.length > 0) {
      let current = arr.pop();
      // console.log('cc',current)
      complete.push(current.value);
      let ni = this.getNeighbours(current);
  
      for (let k of ni) {
        // console.log('k', k.vertex);
        if (!arr.includes(k.vertex))
          arr.push(k.vertex);
      }
      console.log(arr);
  
    }
    return complete;
  }
  
}
  
module.exports = depthFirstGraph;