/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
export default async (key) => {
    await web.sendKeys(key);
};
