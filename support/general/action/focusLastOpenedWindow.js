/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to focus to (window or tab)
 */
/* eslint-disable no-unused-vars */
export default (obsolete) => {
/* eslint-enable no-unused-vars */
    /**
     * The last opened window
     * @type {Object}
     */
    const windowHandles = web.getWindowHandles();

    if (!windowHandles) {
        return;
    }
    const lastWindowHandle = windowHandles.slice(-1)[0];

    web.selectWindow(lastWindowHandle);
};
