/**
 * Check the URL of the given browser window
 * @param  {String}   falseCase   Whether to check if the URL matches the
 *                                expected value or not
 * @param  {String}   expectedUrl The expected URL to check against
 */
export default (falseCase, expectedUrl) => {
    const chai = require('chai');
    /**
     * The current browser window's URL
     * @type {String}
     */
    const currentUrl = web.getUrl();

    if (falseCase) {
        chai.expect(currentUrl).to.not
            .equal(expectedUrl, `expected url not to be "${currentUrl}"`);
    } else {
        chai.expect(currentUrl).to
            .equal(
                expectedUrl,
                `expected url to be "${expectedUrl}" but found `
                + `"${currentUrl}"`
            );
    }
};
