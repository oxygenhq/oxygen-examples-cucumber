/**
 * Close the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
export default (obsolete) => {
/* eslint-enable no-unused-vars */
    /**
     * The last opened window handle
     * @type {Object}
     */
    const windowHandles = web.getWindowHandles();

    if (!windowHandles) {
        return;
    }
    const lastWindowHandle = windowHandles.slice(-1)[0];

    web.closeWindow();
    web.selectWindow(lastWindowHandle);
};
