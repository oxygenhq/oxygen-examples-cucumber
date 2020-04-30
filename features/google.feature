Feature: Enter a search in Google
    As a User
    I want to search Google
    
    Background:
        Given I open the url "https://google.com"
        Then I expect that the page title is "Google"

    @googleSearch2_a @googleSearch2_b
    Scenario: Search results should display the search term in the page title when pressing "enter"
        Given The page title is "Google"
        When I enter the search term "cats"
        And I click the "Search" button
        Then The search result page title should contain the search term "cats"

    @googleSearch2_a @googleSearch2_b
    Scenario: Search results should display the search term in the page title when pressing "search"
        Given The page title is "Google"
        When I enter the search term "dogs"
        And I click the "Search" button
        Then The search result page title should contain the search term "dogs"
    
    @test2 @test3
    Scenario Outline: Search results should display the search term in the title regardless of submission method
        Given The page title is "Google"
        When I enter the search term "<search_term>"
        And I click the "Search" button
        Then The search result page title should contain the search term "<search_term>"

    Examples: Term and submission method combinations
        | search_term |
        | cats        |
        | dogs        |
