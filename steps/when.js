import clearInputField from '../support/general/action/clearInputField';
import clickElement from '../support/general/action/clickElement';
import closeLastOpenedWindow from '../support/general/action/closeLastOpenedWindow';
import deleteCookies from '../support/general/action/deleteCookies';
import dragElement from '../support/general/action/dragElement';
import focusLastOpenedWindow from '../support/general/action/focusLastOpenedWindow';
import handleModal from '../support/general/action/handleModal';
import moveTo from '../support/general/action/moveTo';
import pause from '../support/general/action/pause';
import pressButton from '../support/general/action/pressButton';
import scroll from '../support/general/action/scroll';
import selectOption from '../support/general/action/selectOption';
import selectOptionByIndex from '../support/general/action/selectOptionByIndex';
import setCookie from '../support/general/action/setCookie';
import setInputField from '../support/general/action/setInputField';
import setPromptText from '../support/general/action/setPromptText';
import clickSearchButton from '../support/google/action/clickSearchButton';
import setSearchField from '../support/google/action/setSearchField';

const { When } = require('cucumber');


When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
);

When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setInputField
);

When(
    /^I clear the inputfield "([^"]*)?"$/,
    clearInputField
);

When(
    /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
    dragElement
);

When(
    /^I pause for (\d+)ms$/,
    pause
);

When(
    /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
    setCookie
);

When(
    /^I delete the cookie "([^"]*)?"$/,
    deleteCookies
);

When(
    /^I press "([^"]*)?"$/,
    pressButton
);

When(
    /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
    handleModal
);

When(
    /^I enter "([^"]*)?" into the prompt$/,
    setPromptText
);

When(
    /^I scroll to element "([^"]*)?"$/,
    scroll
);

When(
    /^I close the last opened (window|tab)$/,
    closeLastOpenedWindow
);

When(
    /^I focus the last opened (window|tab)$/,
    focusLastOpenedWindow
);

When(
    /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
    selectOptionByIndex
);

When(
    /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
    selectOption
);

When(
    /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
    moveTo
);

// Google scenario steps
When(
    /^I enter the search term "([^"]*)?"$/,
    setSearchField
);

When(
    /^I click the "Search" button$/,
    clickSearchButton
);