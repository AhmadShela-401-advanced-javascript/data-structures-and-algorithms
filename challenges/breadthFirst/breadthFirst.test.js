'use strict';

const Node = require('../Data-Structure/linked_list/node');
const bfGraph = require('./breadthFirst');
const log = jest.spyOn(global.console, 'log').mockImplementation(() => {});

describe('`breadthFirst` method', () => {
  it('returns `null` if the graph is empty', () => {
    const graph = new bfGraph();
    const result = graph.breadthFirst();
    expect(result).toBeNull();
  });
});