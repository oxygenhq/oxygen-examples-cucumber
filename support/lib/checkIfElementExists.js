/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  selector  Element selector
 * @param  {Boolean} falsCase Check if the element (does not) exists
 * @param  {Number}  exactly  Check if the element exists exactly this number
 *                            of times
 */
export default async (selector, falsCase, exactly) => {
    const chai = require('chai');
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
    const nrOfElements = await $$(selector);

    if (falsCase === true) {
        chai.expect(nrOfElements).to.have.lengthOf(
            0,
            `Element with selector "${selector}" should not exist on the page`
        );
    } else if (exactly) {
        chai.expect(nrOfElements).to.have.lengthOf(
            exactly,
            `Element with selector "${selector}" should exist exactly `
            + `${exactly} time(s)`
        );
    } else {
        chai.expect(nrOfElements).to.have.length.of.at.least(
            1,
            `Element with selector "${selector}" should exist on the page`
        );
    }
};
