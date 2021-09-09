/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export default async (falseCase, expectedTitle) => {
    const chai = require('chai');
    /**
     * The title of the current browser window
     * @type {String}
     */
    const title = await web.getTitle();

    if (falseCase) {
        chai.expect(title).to.not
            .equal(
                expectedTitle,
                `Expected title not to be "${expectedTitle}"`
            );
    } else {
        chai.expect(title).to
            .equal(
                expectedTitle,
                `Expected title to be "${expectedTitle}" but found "${title}"`
            );
    }
};
