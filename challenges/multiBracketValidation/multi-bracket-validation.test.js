'use strict';

const multiBracketValidation = require('./multi-bracket-validation');

describe('multiBracketValidation model', () => {
    it('the function retyurn true if the brackets in the string are balanced', () => {
        expect(multiBracketValidation('{}')).toBeTruthy();
        expect(multiBracketValidation('{}(){}')).toBeTruthy();
        expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
        expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
        expect(multiBracketValidation('(hello [Ahmad]{hi})')).toBeTruthy();
    });
    it('the function retyurn false if the brackets in the string are not balanced', () => {
        expect(multiBracketValidation('[({}]')).toBeFalsy();
        expect(multiBracketValidation('(](')).toBeFalsy();
        expect(multiBracketValidation('{(})')).toBeFalsy();
    });
})
