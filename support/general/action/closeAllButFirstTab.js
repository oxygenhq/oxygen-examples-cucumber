/**
 * Close all but the first tab
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
export default (obsolete) => {
/* eslint-enable no-unused-vars */
    /**
     * Get all the window handles
     * @type {Object}
     */
    const windowHandles = web.getWindowHandles();

    // Close all tabs but the first one
    if (windowHandles) {
        windowHandles.reverse();
        windowHandles.forEach((handle, index) => {
            web.selectWindow(handle);
            if (index < windowHandles.length - 1) {
                web.closeWindow();
            }
        });
    }    
};
