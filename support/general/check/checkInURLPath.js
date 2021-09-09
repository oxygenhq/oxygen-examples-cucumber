/**
 * Check if the given string is in the URL path
 * @param  {String}   falseCase       Whether to check if the given string is in
 *                                    the URL path or not
 * @param  {String}   expectedUrlPart The string to check for
 */
export default async (falseCase, expectedUrlPart) => {
    const chai = require('chai');
    /**
     * The URL of the current browser window
     * @type {String}
     */
    const currentUrl = await web.getUrl();

    if (falseCase) {
        chai.expect(currentUrl).to.not
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" not to contain `
                + `"${expectedUrlPart}"`
            );
    } else {
        chai.expect(currentUrl).to
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" to contain "${expectedUrlPart}"`
            );
    }
};
