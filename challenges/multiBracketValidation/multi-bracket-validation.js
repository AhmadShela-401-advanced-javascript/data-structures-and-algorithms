'use strict';
const Stack = require('../Data-Structure/stacksAndQueues/stacksAndQueues').Stack;
function multiBracketValidation(input){
  let bracketRegex = /[{}()[\]*]/g
let roundBrackets ={
    open:'(',
    close:')'
};
let squareBrackets ={
    open:'[',
    close:']'
};
let curlyBrackets ={
    open:'{',
    close:'}'
};
let bracketArr = input.match(bracketRegex);
console.log('bracketArr ?????',bracketArr);

let tester = new Stack();
bracketArr.forEach(bracket => {
    switch (bracket) {
        case roundBrackets.open:
            tester.push(roundBrackets);
            break;
        case squareBrackets.open:
            tester.push(squareBrackets);
            break;
        case curlyBrackets.open:
            tester.push(curlyBrackets);
            break;
        default:
        if(bracket !== tester.top.value.close){
          return false
        }
            tester.pop();
            break;
    }
});
return tester.isEmpty() ? true : false
}

module.exports = multiBracketValidation;