/* eslint-disable no-unused-vars */
'use strict';

const Node = require('../tree/Node');
const Tree = require('../tree/tree');
const fizzBuzzTree = require('./fizzBuzzTree');

describe('fizzBuzzTree funtion', () => {
  it('test', () => {
    let node = new Node(2);
    let tree = new Tree(node);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    console.log('Rooooooooot : ', tree.root);
    let testTree = fizzBuzzTree(tree);
    let testArr = testTree.breadthFirst();
    console.log('>>>>>>>>>>>>>testArr : ', testArr);
    expect(testArr).toEqual(['2', '7', 'Buzz', '2', 'Fizz', 'Fizz', 'Buzz', '11', '4']);
  });
});