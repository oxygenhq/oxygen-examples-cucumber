import { Given } from 'cucumber';

import checkContainsAnyText from '../support/general/check/checkContainsAnyText';
import checkIsEmpty from '../support/general/check/checkIsEmpty';
import checkContainsText from '../support/general/check/checkContainsText';
import checkCookieContent from '../support/general/check/checkCookieContent';
import checkCookieExists from '../support/general/check/checkCookieExists';
import checkDimension from '../support/general/check/checkDimension';
import checkElementExists from '../support/general/check/checkElementExists';
import checkEqualsText from '../support/general/check/checkEqualsText';
import checkModal from '../support/general/check/checkModal';
import checkOffset from '../support/general/check/checkOffset';
import checkProperty from '../support/general/check/checkProperty';
import checkSelected from '../support/general/check/checkSelected';
import checkTitle from '../support/general/check/checkTitle';
import checkUrl from '../support/general/check/checkURL';
import closeAllButFirstTab from '../support/general/action/closeAllButFirstTab';
import compareText from '../support/general/check/compareText';
import isEnabled from '../support/general/check/isEnabled';
import isDisplayed from '../support/general/check/isDisplayed';
import openWebsite from '../support/general/action/openWebsite';
import setWindowSize from '../support/general/action/setWindowSize';

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^the element "([^"]*)?" is( not)* displayed$/,
    isDisplayed
);

Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Given(
    /^the checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Given(
    /^there is (an|no) element "([^"]*)?" on the page$/,
    checkElementExists
);

Given(
    /^The page title is( not)* "([^"]*)?"$/,
    checkTitle
);

Given(
    /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
    compareText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Given(
    /^the (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Given(
    /^the (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Given(
    /^the page url is( not)* "([^"]*)?"$/,
    checkUrl
);

Given(
    /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Given(
    /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
    checkCookieContent
);

Given(
    /^the cookie "([^"]*)?" does( not)* exist$/,
    checkCookieExists
);

Given(
    /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
);

Given(
    /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    checkOffset
);

Given(
    /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
    setWindowSize
);

Given(
    /^I have closed all but the first (window|tab)$/,
    closeAllButFirstTab
);

Given(
    /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);
