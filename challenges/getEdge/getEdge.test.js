const getEdges = require('./getEdge');
const { Vertex, Graph } = require('../graph/graph');

describe('`getEdges` function', () => {
  const graph = new Graph();

  const pandora = new Vertex('Pandora');
  const arendelle = new Vertex('Arendelle');
  const metoville = new Vertex('Metroville');
  const monstropolis = new Vertex('New Monstropolis');
  const narnia = new Vertex('Narnia');
  const naboo = new Vertex('Naboo');


  graph.addVertex(pandora);
  graph.addVertex(arendelle);
  graph.addVertex(metoville);
  graph.addVertex(monstropolis);
  graph.addVertex(narnia);
  graph.addVertex(naboo);

  //pandora
  graph.addDirectedEdge(pandora, arendelle, 150);
  graph.addDirectedEdge(pandora, metoville, 82);
  //arendelle
  graph.addDirectedEdge(arendelle, metoville, 99);
  graph.addDirectedEdge(arendelle, monstropolis, 42);
  graph.addDirectedEdge(arendelle, pandora, 150);
  //metoville
  graph.addDirectedEdge(metoville, pandora, 82);
  graph.addDirectedEdge(metoville, arendelle, 99);
  graph.addDirectedEdge(metoville, monstropolis, 105);
  graph.addDirectedEdge(metoville, naboo, 26);
  graph.addDirectedEdge(metoville, narnia, 37);
  //monstropolis
  graph.addDirectedEdge(monstropolis, arendelle, 42);
  graph.addDirectedEdge(monstropolis, metoville, 105);
  graph.addDirectedEdge(monstropolis, naboo, 26);
  //narnia
  graph.addDirectedEdge(narnia, metoville, 37);
  graph.addDirectedEdge(narnia, naboo, 250);
  //naboo
  graph.addDirectedEdge(naboo, narnia, 250);
  graph.addDirectedEdge(naboo, metoville, 26);
  graph.addDirectedEdge(naboo, monstropolis, 73);

  it('should give a falsy response to a one-node graph argument', () => {
    const expected = [false, 0];
    expect(getEdges(graph, [metoville, pandora])).toEqual(expected);
  });

});