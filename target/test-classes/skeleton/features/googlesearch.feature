@google @search @searchengine
Feature: GoogleSearch

  Scenario Outline: google searching randomly
    Given I am on the Google Search page
    When I search for <query>
    Then the page title should start with <query>

  Examples:
    |  query    |
    |  Cheese   |
    |  IPhone   |
    |  Samsung  |
    |  Android  |
    |  Banana   |
