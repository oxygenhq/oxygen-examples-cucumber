/**
 * Check if the given element has the given class
 * @param  {String}   selector              Element selector
 * @param  {String}   falseCase         Whether to check for the class to exist
 *                                      or not ('has', 'does not have')
 * @param  {String}   expectedClassName The class name to check
 */
export default (selector, falseCase, expectedClassName) => {
    const chai = require('chai');
    /**
     * List of all the classes of the element
     * @type {Array}
     */    
    const classesList = $(selector).getAttribute('className').split(' ');

    if (falseCase === 'does not have') {
        chai.expect(classesList).to.not
            .include(expectedClassName,
                `Element ${selector} should not have the class `
                    + `${expectedClassName}`);
    } else {
        chai.expect(classesList).to
            .include(
                expectedClassName,
                `Element ${selector} should have the class ${expectedClassName}`
            );
    }
};
