'use strict';
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  // >> (Root, Left, Right) 
  preOrder() {
    let result = [];
    console.log('Hiiii');
    let _go = (node) => {
      try {
        result.push(node.value);
        if (node.left) _go(node.left);
        if (node.right) _go(node.right);
      } catch (error) {
        console.log(error);
      }
    };
    _go(this.root);
    return result;
  }
  // >> (Left, Root, Right) 
  inOrder() {
    let result = [];
    let _go = (node) => {
      try {
        if (node.left) _go(node.left);
        result.push(node.value);
        if (node.right) _go(node.right);
      } catch (error) {
        console.log(error);
      }
    };
    _go(this.root);
    return result;
  }
  // >> (Left, Right, Root)
  postOrder() {
    let result = [];
    let _go = (node) => {
      try {
        result.push(node.value);
        if (node.left) _go(node.left);
        if (node.right) _go(node.right);
      } catch (error) {
        console.log(error);
      }
    };
    _go(this.root);
    return result;
  }
}
module.exports = BinaryTree;