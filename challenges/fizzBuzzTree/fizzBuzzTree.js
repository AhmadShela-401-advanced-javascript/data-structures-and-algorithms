'use strict';
const Tree = require('../tree/tree.js');
function fizzBuzzTree(kTree) {
  //   var currentNode = kTree.root;
  var newTree = new Tree(kTree.root);
  //   var newTreeNode = newTree.root;
  var _go = function (node) {
    if (node.value % 3 == 0) {
      if (node.value % 5 == 0) {
        node.value = 'FizzBuzz';
      } else {
        node.value = 'Fizz';
      }
    } else if (node.value % 5 == 0) {
      node.value = 'Buzz';
    } else {
      node.value = node.value.toString();
    }

    if (node.left) _go(node.left);
    if (node.right) _go(node.right);
  };
  _go(newTree.root);
  return newTree;
}

module.exports = fizzBuzzTree;