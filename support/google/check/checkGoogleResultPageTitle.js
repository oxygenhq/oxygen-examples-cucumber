/**
 * Check the title of the current browser window
 * @param  {Type}     expectedTitle The expected title
 */
export default (expectedTitle) => {
    /**
     * The title of the current browser window
     * @type {String}
     */
    const title = web.getTitle();
    const searchTermInTitle = title.substring(0, title.indexOf(" - "));
    expect(searchTermInTitle).to
        .equal(
            expectedTitle,
            `Expected title to be "${expectedTitle}" but found "${searchTermInTitle}"`
        );
};
