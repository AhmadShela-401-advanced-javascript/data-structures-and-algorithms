// import Node from  './node'
// import LinkedList from './LinkedList'
const LinkedList = require('../Data-Structure/linked_list/linked_list');
// const Node = require('./node');
class HashTable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size); // bucket
  }
  hash(key) {
    // return hash Index
    let charArr = key.split('');
    return charArr.reduce((p, n )=> {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }
  add(key, value) {
    // Linked List to represent the value for each key in the bucket
    if(this.contains(key)){
      return console.log('the key is exist before');
    }
    let hashIndex = this.hash(key);
    console.log('hashIndex: ',hashIndex);
    if(!this.entries[hashIndex]) {
      // create a new one
      this.entries[hashIndex] = new LinkedList();
    }
    let entry = { [key]: value };
    this.entries[hashIndex].append(entry); // LinkedList append method
  }
  get(key) {
    return this.entries[this.hash(key)] ? this.entries[this.hash(key)].getBykeyName(key) : 'NotFound';
    // return 
  }
  contains(key) {
    // console.log(this.entries[this.hash(key)])
    return this.entries[this.hash(key)] ? this.entries[this.hash(key)].includes(key) : false;
  }
}
module.exports = HashTable;