/* eslint-disable no-unused-vars */
'use strict';
const HashTable = require('./hashTable');

describe('HashTable', () => {
  const hashTable = new HashTable(20);
  it('test if the hash table add values', () => {
    hashTable.add('ahmad',123);
    expect(hashTable.get('ahmad')).toBe(123);
  });
  it('test if the hash table contains returns true if the value exist', () => {
    hashTable.add('ahmad',123);
    expect(hashTable.contains('ahmad')).toBeTruthy();
  });
});