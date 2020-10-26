// import {Vertex,Edge,Graph} from './graph';
const {Vertex,Edge,Graph} = require('../graph/graph');
const {Queue} = require('../Data-Structure/stacksAndQueues/stacksAndQueues');

class bfGraph extends Graph {

  constructor(){
    super();
  }

  breadthFirst(node) {
    if (node === undefined || node.value === undefined) {
      return null;
    }

    const q = new Queue();
    q.enqueue(node);

    const arr = [];
    while (q.front !== null) {
      const current = q.dequeue();
      if (arr.includes(current)) {
        continue;
      }
      arr.push(current);
      const n = this.getNeighbors(current);
      for (let i = 0; i < n.length; i++) {
        if (!arr.includes(n[i].node)) {
          q.enqueue(n[i].node);
        }
      }
    }
    console.log(arr);
    return arr;
  }
  
}
  
module.exports = bfGraph;