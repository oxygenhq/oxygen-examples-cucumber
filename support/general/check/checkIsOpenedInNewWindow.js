/**
 * Check if the given URL was opened in a new window
 * @param  {String}   expectedUrl The URL to check for
 * @param  {String}   obsolete    Indicator for the type (window or tab) unused
 */
/* eslint-disable no-unused-vars */
export default async (expectedUrl, obsolete) => {
    const chai = require('chai');
/* eslint-enable no-unused-vars */
    /**
     * All the current window handles
     * @type {Object}
     */
    const windowHandles = await web.driver.getWindowHandles();

    chai.expect(windowHandles).length.to.not.equal(1, 'A popup was not opened');

    /**
     * The last opened window handle
     * @type {Object}
     */
    const lastWindowHandle = windowHandles.slice(-1);

    // Make sure we focus on the last opened window handle
    await web.selectWindow(lastWindowHandle[0]);

    /**
     * Get the URL of the current browser window
     * @type {String}
     */
    const windowUrl = await web.getUrl();

    chai.expect(windowUrl).to
        .contain(expectedUrl, 'The popup has a incorrect getUrl');

    await web.closeWindow();
};
