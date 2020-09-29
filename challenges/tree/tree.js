'use strict';
// const Queue = require('../Data-Structure/stacksAndQueues/stacksAndQueues').Queue;
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
  findMaximumValue() {
    var max = 0;
    let _go = (node) => {
      try {
        // result.push(node.value);
        if (node.value > max) { max = node.value ;}
        if (node.left) _go(node.left);
        if (node.right) _go(node.right);
      } catch (error) {
        console.log(error);
      }
    };
    _go(this.root);
    return max;
  }
  breadthFirst() {
    // check if the root is null
    if (!this.root) {
      return null;
    }
    // push the root to the array
    const resultArr = this.root.value ? [this.root.value] : [];
    // create the traversal function
    const _breadthFirst = (arr) => {
      // new array that contain each level of the tree
      let levelArr = [];
      arr.forEach(node => {
        if (node.left) {
          levelArr.push(node.left);
          resultArr.push(node.left.value);
        }
        if (node.right) {
          levelArr.push(node.right);
          resultArr.push(node.right.value);
        }

      });
      // check if the tree didn't end yet
      // reDo the function using the new level Array
      if (levelArr.length > 0) _breadthFirst(levelArr);
    };
    // call the traversal function of the root
    _breadthFirst([this.root]);
    return resultArr;
  }
}
module.exports = BinaryTree;