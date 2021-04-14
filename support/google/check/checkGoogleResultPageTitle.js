/**
 * Check the title of the current browser window
 * @param  {Type}     expectedTitle The expected title
 */
export default (expectedTitle) => {
    const chai = require('chai');
    /**
     * The title of the current browser window
     * @type {String}
     */
    const title = web.getTitle();
    const searchTermInTitle = title.substring(0, title.indexOf(" - "));
    chai.expect(searchTermInTitle).to
        .equal(
            expectedTitle,
            `Expected title to be "${expectedTitle}" but found "${searchTermInTitle}"`
        );
};
