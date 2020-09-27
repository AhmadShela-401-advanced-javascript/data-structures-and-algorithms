/* eslint-disable no-dupe-class-members */
'use strict';
const Node = require('./Node');
class BinarySearchTree{
  constructor(){}
  contains(data){ 
    const node = this.root;
    let search =(node, data) =>
    { 
      // if trees is empty return null 
      if(node === null) 
        return false; 
      
      // if data is less than node's data 
      // move left 
      else if(data < node.data) 
        return this.search(node.left, data); 
      
      // if data is less than node's data 
      // move left 
      else if(data > node.data) 
        return this.search(node.right, data); 
      
      // if data is equal to the node data  
      // return node 
      else
        return true; 
    }; 
    search(node,data);
  }
  add(value) {

    const node = this.root;
    
    if (!node) {
      this.root = new Node(value);
      return;
    }
    
    let _add = (node) => {
      if (value < node.value) {
    
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _add(node.left);
        }
    
      } else if (value >= node.value) {
    
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _add(node.right);
        }
    
      } else {
        return null;
      }
    };
    _add(node);
  }
}

module.exports = BinarySearchTree;