/**
 * Check the content of a cookie against a given value
 * @param  {String}   name          The name of the cookie
 * @param  {String}   falseCase     Whether or not to check if the value matches
 *                                  or not
 * @param  {String}   expectedValue The value to check against
 */
export default (name, falseCase, expectedValue) => {
    const chai = require('chai');
    /**
     * The cookie retrieved from the browser object
     * @type {Object}
     */
    const cookie = web.getCookies(name)[0];
    chai.expect(cookie.name).to.equal(
        name,
        `no cookie found with the name "${name}"`
    );

    if (falseCase) {
        chai.expect(cookie.value).to.not
            .equal(
                expectedValue,
                `expected cookie "${name}" not to have value "${expectedValue}"`
            );
    } else {
        chai.expect(cookie.value).to
            .equal(
                expectedValue,
                `expected cookie "${name}" to have value "${expectedValue}"`
                + ` but got "${cookie.value}"`
            );
    }
};
