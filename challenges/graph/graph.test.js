/* eslint-disable no-unused-vars */
'use strict';

const {Graph,Vertex,Edge} = require('./graph');

describe('Graph', () => {

  const graph = new Graph();

  const palastain = new Vertex('palastain');
  const syrai = new Vertex('syrai');
  const egypt = new Vertex('egypt');
  const jordan = new Vertex('jordan');
  const libanon = new Vertex('libanon');
  const suadia = new Vertex('suadia');
  const iraq = new Vertex('iraq');

  graph.addVertex(palastain);
  // graph.addVertex(three);
  // graph.addVertex(six);
  graph.addVertex(syrai);
  graph.addVertex(egypt);
  graph.addVertex(jordan);
  graph.addVertex(libanon);
  graph.addVertex(suadia);
  graph.addVertex(iraq);
  // graph.addVertex(eight);
  // graph.addVertex(ten);

  graph.addDirectedEdge(palastain, syrai);
  graph.addDirectedEdge(palastain, egypt);
  graph.addDirectedEdge(palastain, jordan);
  graph.addDirectedEdge(palastain, libanon);

  graph.addDirectedEdge(jordan, syrai);
  graph.addDirectedEdge(jordan, egypt);


  // graph.addDirectedEdge(three, eight);
  // graph.addDirectedEdge(six, seven);
  // graph.addDirectedEdge(six, eight);
  // graph.addDirectedEdge(ten, two);
  // graph.addDirectedEdge(ten, eight);
  // graph.addDirectedEdge(eight, seven);

  // graph.printAll();
  // console.log(graph.size)

  it('add vertix', () => {
    graph.addVertex(iraq);
    expect(graph._adjacencyList.has(palastain)).toBeTruthy();
    graph.addDirectedEdge(palastain, syrai);
    graph.addDirectedEdge(palastain, egypt);
    graph.addDirectedEdge(palastain, jordan);
    graph.addDirectedEdge(palastain, libanon);
    graph.addDirectedEdge(jordan, syrai);
    graph.addDirectedEdge(jordan, egypt);
    graph.addDirectedEdge(jordan, palastain);
    graph.addDirectedEdge(jordan, suadia);
    graph.addDirectedEdge(jordan, iraq);
    expect(graph._adjacencyList.get(palastain).length).toEqual(4);
  });
});