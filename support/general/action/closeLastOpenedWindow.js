/**
 * Close the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
export default async (obsolete) => {
/* eslint-enable no-unused-vars */
    /**
     * The last opened window handle
     * @type {Object}
     */
    const windowHandles = await web.getWindowHandles();

    if (!windowHandles) {
        return;
    }
    const lastWindowHandle = windowHandles.slice(-1)[0];

    await web.closeWindow();
    await web.selectWindow(lastWindowHandle);
};
