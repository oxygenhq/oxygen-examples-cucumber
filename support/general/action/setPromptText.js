/**
 * Set the text of the current prompt
 * @param  {String}   modalText The text to set to the prompt
 */
export default async (modalText) => {
    const chai = require('chai');
    try {
        await (await web.getDriver()).sendAlertText(modalText);
    } catch (e) {
        chai.assert(e, 'A prompt was not open when it should have been open');
    }
};
