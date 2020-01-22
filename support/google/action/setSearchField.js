/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {String}   value   The value to set the selector to
 * @param  {String}   selector Element selector
 */
export default (value) => {
    web.type('name=q', value);
};
