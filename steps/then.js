import checkClass from '../support/general/check/checkClass';
import checkContainsAnyText from '../support/general/check/checkContainsAnyText';
import checkIsEmpty from '../support/general/check/checkIsEmpty';
import checkContainsText from '../support/general/check/checkContainsText';
import checkCookieContent from '../support/general/check/checkCookieContent';
import checkCookieExists from '../support/general/check/checkCookieExists';
import checkDimension from '../support/general/check/checkDimension';
import checkEqualsText from '../support/general/check/checkEqualsText';
import checkFocus from '../support/general/check/checkFocus';
import checkInURLPath from '../support/general/check/checkInURLPath';
import checkIsOpenedInNewWindow from
    '../support/general/check/checkIsOpenedInNewWindow';
import checkModal from '../support/general/check/checkModal';
import checkModalText from '../support/general/check/checkModalText';
import checkNewWindow from '../support/general/check/checkNewWindow';
import checkOffset from '../support/general/check/checkOffset';
import checkProperty from '../support/general/check/checkProperty';
import checkFontProperty from '../support/general/check/checkFontProperty';
import checkSelected from '../support/general/check/checkSelected';
import checkTitle from '../support/general/check/checkTitle';
import checkTitleContains from '../support/general/check/checkTitleContains';
import checkURL from '../support/general/check/checkURL';
import checkURLPath from '../support/general/check/checkURLPath';
import checkWithinViewport from '../support/general/check/checkWithinViewport';
import compareText from '../support/general/check/compareText';
import isEnabled from '../support/general/check/isEnabled';
import isExisting from '../support/general/check/isExisting';
import isVisible from '../support/general/check/isDisplayed';
import waitFor from '../support/general/action/waitFor';
import waitForVisible from '../support/general/action/waitForDisplayed';
import checkIfElementExists from '../support/lib/checkIfElementExists';
import checkEyesWindow from '../support/general/check/checkEyesWindow';
import checkGoogleResultPageTitle from '../support/google/check/checkGoogleResultPageTitle';

const { Then } = require('cucumber');


Then(
    /^I expect that the page title is( not)* "([^"]*)?"$/,
    checkTitle
);

Then(
    /^I expect that the page title ( not)* contains "([^"]*)?"$/,
    checkTitleContains
);

Then(
    /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
    checkIfElementExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* displayed$/,
    isVisible
);

Then(
    /^I expect that element "([^"]*)?" becomes( not)* displayed$/,
    waitForVisible
);

Then(
    /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
    checkWithinViewport
);

Then(
    /^I expect that element "([^"]*)?" does( not)* exist$/,
    isExisting
);

Then(
    /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
    compareText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Then(
    /^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Then(
    /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Then(
    /^I expect that the url is( not)* "([^"]*)?"$/,
    checkURL
);

Then(
    /^I expect that the path is( not)* "([^"]*)?"$/,
    checkURLPath
);

Then(
    /^I expect the url to( not)* contain "([^"]*)?"$/,
    checkInURLPath
);

Then(
    /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Then(
    /^I expect that the font( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkFontProperty
);

Then(
    /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
    checkCookieContent
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* exists$/,
    checkCookieExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
);

Then(
    /^I expect that element "([^"]*)?" is( not)* positioned at ([\d+.?\d*]+)px on the (x|y) axis$/,
    checkOffset
);

Then(
    /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
    checkClass
);

Then(
    /^I expect a new (window|tab) has( not)* been opened$/,
    checkNewWindow
);

Then(
    /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
    checkIsOpenedInNewWindow
);

Then(
    /^I expect that element "([^"]*)?" is( not)* focused$/,
    checkFocus
);

Then(
    /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
    {
        wrapperOptions: {
            retry: 3,
        },
    },
    waitFor
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
    checkModalText
);

Then(
    /^I expect that the window "([^"]*)?" is visually perfect$/,
    checkEyesWindow
);

// Google
Then(
    /^The search result page title should contain the search term "([^"]*)?"$/,
    checkGoogleResultPageTitle
);
