/**
 * Check if a new window or tab is opened
 * @param  {String}   obsolete  The type of opened object (window or tab)
 * @param  {String}   falseCase Whether to check if a new window/tab was opened
 *                              or not
 */
export default async (obsolete, falseCase) => {
    const chai = require('chai');
    /**
     * The handles of all open windows/tabs
     * @type {Object}
     */
    if (!windowHandles) {
        return;
    }

    if (falseCase) {
        chai.expect(windowHandles.length).to
            .equal(1, 'A new window should not have been opened');
    } else {
        chai.expect(windowHandles.length).to.not
            .equal(1, 'A new window has been opened');
    }
};
