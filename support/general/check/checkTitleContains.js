/**
 * Check the title of the current browser window contains expected text/title
 * @param  {Type}     falseCase     Whether to check if the title contains the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export default async (falseCase, expectedTitle) => {
    const chai = require('chai');
    /**
     * The actual title of the current browser window
     * @type {String}
     */
    const title = await web.getTitle();

    if (falseCase) {
        chai.expect(title).to.not
            .contain(
                expectedTitle,
                `Expected title not to contain "${expectedTitle}"`
            );
    } else {
        chai.expect(title).to
            .contain(
                expectedTitle,
                `Expected title to contain "${expectedTitle}" 
                        but found "${title}"`
            );
    }
};
