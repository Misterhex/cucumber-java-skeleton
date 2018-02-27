@bing @search @searchengine
Feature: BingSearch

  Scenario Outline: Bing searching randomly
    Given I am on the Bing Search page
    When I search Bing for <query>
    Then the Bing page title should start with <query>

  Examples:
    |  query    |
    |  Cheese   |
    |  IPhone   |
    |  Samsung  |
    |  Android  |
    |  Banana   |
