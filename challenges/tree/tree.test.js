/* eslint-disable no-unused-vars */
'use strict';

const Node = require('./Node');
const Tree = require('./tree');
const BinarySearchTree = require('./BinarySearchTree');

describe('Tree',()=>{
  it('Can successfully instantiate an empty tree',()=>{
    let tree = new Tree();
    expect(tree instanceof Tree).toBeTruthy();
  });
  it('Can successfully instantiate a tree with a single root node',()=>{
    let node = new Node(5);
    let tree = new Tree(node);
    expect(tree.root.value).toBe(5);
  });
  it('Can successfully add a left child and right child to a single root node',()=>{
    let node = new Node(5);
    let tree = new Tree(node);
    tree.root.left = new Node(4);
    tree.root.right = new Node(6);
    expect(tree.root.left).toBeTruthy();
    expect(tree.root.right).toBeTruthy();
  });
  // it('Can successfully return a collection from a preorder traversal',()=>{
  //   let node = new Node(5);
  //   let tree = new Tree(node);
  //   tree.root.left = new Node(4);
  //   tree.root.right = new Node(6);
  //   expect(tree.preOrder()).toBeTruthy();
  // });
  it('Can successfully return a collection from a preorder traversal',()=>{
    let node = new Node(5);
    let tree = new Tree(node);
    tree.root.left = new Node(4);
    tree.root.right = new Node(6);
    expect(tree.inOrder()).toBeTruthy();
  });
  it('Can successfully return a collection from a preorder traversal',()=>{
    let node = new Node(5);
    let tree = new Tree(node);
    tree.root.left = new Node(4);
    tree.root.right = new Node(6);
    expect(tree.postOrder()).toBeTruthy();
  });
  it('Can successfully return a collection from a preorder traversal',()=>{
    let node = new Node(5);
    let tree = new Tree(node);
    tree.root.left = new Node(4);
    tree.root.right = new Node(6);
    expect(tree.preOrder()).toBeTruthy();
  });
  it('Can successfully return a max Value from a when calling findMaxValue',()=>{
    let node = new Node(5);
    let tree = new Tree(node);
    tree.root.left = new Node(4);
    tree.root.right = new Node(6);
    expect(tree.findMaximumValue()).toBe(6);
  });
  it('test',()=>{
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
    let testArr = tree.breadthFirst();
    expect(testArr).toEqual([2,7,5,2,6,9,5,11,4]);
  });
});