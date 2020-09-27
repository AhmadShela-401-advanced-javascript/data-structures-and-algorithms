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
});