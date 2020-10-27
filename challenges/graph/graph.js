class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
    this.size = 0;
  }


  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
    // console.log('hi',this);
    this.size++;
  }
  addUndirectedEdge(a, b, weight) {
    const first = this.addDirectedEdge(a, b, weight);
    const second = this.addDirectedEdge(b, a, weight);
    return [first, second];
  }
  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      // console.log("Vertex not found !!!")
    } else {
      // to cover the undirected
      //1->2 
      //2->1
      // get neighbours 
      const adjacencies = this._adjacencyList.get(startVertex);
      // console.log('--1---',adjacencies)
      // add vertex and weight
      adjacencies.push(new Edge(endVertex, weight));
      const adjacencies1 = this._adjacencyList.get(startVertex);
      // console.log('--2---',adjacencies1)


    }
    // console.log('addDirectedEdge',this)
  }

  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex) ) {
      console.log('vertex does not exist');
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  printAll() {
    // console.log(this._adjacencyList.entries());
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log('V ====> ', vertex);
      console.log('E ====> ', edge);
    }
  }

}

module.exports ={Vertex,Edge,Graph};