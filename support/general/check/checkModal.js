/**
 * Check if a modal was opened
 * @param  {String}   modalType  The type of modal that is expected (alertbox,
 *                               confirmbox or prompt)
 * @param  {String}   falseState Whether to check if the modal was opened or not
 */
export default async (modalType, falseState) => {
    const chai = require('chai');
    /**
     * The text of the prompt
     * @type {String}
     */
    let promptText = '';

    try {
        promptText = await web.getAlertText();

        if (falseState) {
            chai.expect(promptText).to.not
                .equal(
                    null,
                    `A ${modalType} was opened when it shouldn't`
                );
        }
    } catch (e) {
        if (!falseState) {
            chai. expect(promptText).to
                .equal(
                    null,
                    `A ${modalType} was not opened when it should have been`
                );
        }
    }
};
