/**
 * Check the selected state of the given element
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is elected or
 *                              not
 */
export default (selector, falseCase) => {
    const chai = require('chai');
    /**
     * The selected state
     * @type {Boolean}
     */
    const isSelected = $(selector).isSelected();

    if (falseCase) {
        chai.expect(isSelected).to.not
            .equal(true, `"${selector}" should not be selected`);
    } else {
        chai.expect(isSelected).to
            .equal(true, `"${selector}" should be selected`);
    }
};
