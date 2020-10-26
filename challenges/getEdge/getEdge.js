'use strict';
const { Graph } = require('../graph/graph');

function getEdge(myGraph,cityArr) {
  console.log(myGraph._adjacencyList);
  if (cityArr.length < 2 || !(myGraph instanceof Graph)) {
    return [false, 0];
  }
  
  let sum = 0;
  for (let i = 0; i < cityArr.length - 1; i++) {
    const current = cityArr[i];
  
    const n = myGraph.getNeighbours(current);
    const index = n.findIndex(neighbor => neighbor.node === cityArr[i + 1]);
    if (index >= 0) {
      sum += n[index].weight;
    } else {
      return [false, 0];
    }
  }
  return [true, sum];
}

module.exports = getEdge;