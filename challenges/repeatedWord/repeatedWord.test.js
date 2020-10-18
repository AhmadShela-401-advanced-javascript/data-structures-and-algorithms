'use strict';
const repeated_word = require('./repeatedWord');
let myStr = 'Once upon a time, there was a brave princess who';

describe('iteration Sorting for arrays', () => {

  it('return the first word to occur more than once in that provided string.', () => {
    expect(repeated_word(myStr)).toEqual('a');
  });
});