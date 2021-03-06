Feature: Github search
    As a Developer in Test
    I want to search for webdriverio repository
    So that I can use it in my future tests

@Github_Homepage
Scenario: Open GitHub.com page
    Given I open the url "https://github.com/"
    Then  I expect the url to contain "github.com"
    And   I expect that the title is "The world’s leading software development platform · GitHub"
    
@Github_Search
Scenario: Search for webdriverio repository
    Given I open the url "https://github.com/search"
    And   the element "[placeholder='Search GitHub']" not contains any text
    And   I clear the inputfield "[placeholder='Search GitHub']"
    And   I add "webdriverio" to the inputfield "[placeholder='Search GitHub']"
    And   I press "Space"
    And   I add "selenium" to the inputfield "[placeholder='Search GitHub']"
    When  I press "Enter"
    Then  I expect that element ".header-search-input" contains the text "webdriverio selenium"
    And   I expect that container ".repo-list-item:first-child" contains the text "Next-gen WebDriver test automation framework for Node.js"
