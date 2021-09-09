/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector
 *                              is enabled or not
 */
export default async (selector, falseCase) => {
    const chai = require('chai');
    /**
     * The enabled state of the given selector
     * @type {Boolean}
     */
    const isEnabled = await (await $(selector)).isEnabled();

    if (falseCase) {
        chai.expect(isEnabled).to.not
            .equal(true, `Expected element "${selector}" not to be enabled`);
    } else {
        chai.expect(isEnabled).to
            .equal(true, `Expected element "${selector}" to be enabled`);
    }
};
