/**
 * Check if the current URL path matches the given path
 * @param  {String}   falseCase    Whether to check if the path matches the
 *                                 expected value or not
 * @param  {String}   expectedPath The expected path to match against
 */
export default (falseCase, expectedPath) => {
    const chai = require('chai');
    /**
     * The URL of the current browser window
     * @type {String}
     */
    let currentUrl = web.getUrl().replace(/http(s?):\/\//, '');

    /**
     * The base URL of the current browser window
     * @type {Object}
     */
    const domain = `${currentUrl.split('/')[0]}`;

    currentUrl = currentUrl.replace(domain, '');

    if (falseCase) {
        chai.expect(currentUrl).to.not
            .equal(expectedPath, `expected path not to be "${currentUrl}"`);
    } else {
        chai.expect(currentUrl).to
            .equal(
                expectedPath,
                `expected path to be "${expectedPath}" but found `
                + `"${currentUrl}"`
            );
    }
};
