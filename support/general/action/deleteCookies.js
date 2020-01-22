/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 */
export default (name) => {
    web.deleteCookies(name);
};
