/**
 * Check if the given elements contains text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  text or not
 */
export default async (elementType, selector, falseCase) => {
    const chai = require('chai');
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    let command = 'getValue';

    if (
        elementType === 'button'
        || await (await $(selector)).getAttribute('value') === null
    ) {
        command = 'getText';
    }

    /**
     * False case
     * @type {Boolean}
     */
    let boolFalseCase;

    /**
     * The text of the element
     * @type {String}
     */
    const text = await (await $(selector))[command]();

    if (typeof falseCase === 'undefined') {
        boolFalseCase = false;
    } else {
        boolFalseCase = !!falseCase;
    }

    if (boolFalseCase) {
        chai.expect(text).to.equal('');
    } else {
        chai.expect(text).to.not.equal('');
    }
};
